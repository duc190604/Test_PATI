'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RefillIcon } from '../icon/refill-icon';
import { TruckIcon } from '../icon/truck-icon';
import { SaleIcon } from '../icon/sale-icon';
import { CliniciansBanner } from './clinicians-banner';
import { NutritionModal } from '../ui/nutrition-modal';
import { MobileCarousel } from './mobile-carousel';

interface ProductOption {
    id: string;
    title: string;
    info: string;
    price: string;
    comparePrice: string;
    perks: string[];
    badge?: string;
    index: number;
    ship: string;
}

interface TabItem {
    title: string;
    content: string;
}

function ExpandableTabs() {
    const [openTabs, setOpenTabs] = useState<number[]>([]);

    const tabs: TabItem[] = [
        {
            title: 'Ingredients proven by science',
            content: `<p><strong>Sculptique Ingredients:</strong></p>
<ul>
<li><strong>Echinacea purpurea Extract</strong> – Known for its anti-inflammatory properties, it may support skin health.</li>
<li><strong>Dandelion Extract</strong> – Traditionally used as a diuretic, it may help reduce water retention.</li>
<li><strong>Burdock Powder</strong> – Contains antioxidants that may promote skin clarity.</li>
<li><strong>Cleavers Extract</strong> – Believed to support lymphatic drainage and detoxification.</li>
<li><strong>Rutin</strong> – A flavonoid that may strengthen blood vessels and improve circulation.</li>
<li><strong>Bromelain Powder</strong> – An enzyme from pineapple that may reduce inflammation and support tissue repair.</li>
<li><strong>Lemon Powder</strong> – Rich in vitamin C, it may aid in collagen production and skin rejuvenation.</li>
<li><strong>Kelp Extract</strong> – A source of iodine and minerals that may support skin metabolism.</li>
</ul>
<p>These natural ingredients work together to reduce puffiness, bloating, fluid retention.</p>`
        },
        {
            title: 'How does it actually work?',
            content: `<p>Sculptique works by improving blood flow and supporting lymphatic drainage to reduce fluid buildup that causes puffiness, inflammation, and water retention. It also reduces inflammation and boosts collagen production to help skin become firmer and smoother.</p>`
        },
        {
            title: 'Shipping and returns',
            content: `<p>All of Sculptique orders get FREE shipping straight from our USA warehouse. Orders are usually shipped out within 1-2 working days, and you should receive the order within 3-7 working days for domestic USA orders, and within 10 working days for International orders.</p>
<p>We also offer a 60-day money back guarantee - if you are unsatisfied with our product, you can take advantage of our guarantee and ship back the product to us to get your return within 60 days of receiving your order.</p>`
        }
    ];

    const toggleTab = (index: number) => {
        setOpenTabs(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="space-y-3 mt-6">
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={`border transition-all duration-300 cursor-pointer ${openTabs.includes(index) ? 'border-[#039869]' : 'border-gray-200'
                        }`}
                    style={{ borderRadius: '32px', overflow: 'hidden' }}
                >
                    <button
                        onClick={() => toggleTab(index)}
                        className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        <p className="text-left text-black">{tab.title}</p>
                        <img
                            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"
                            alt="Expand"
                            className={`w-6 h-6 transition-transform duration-300 ${openTabs.includes(index) ? 'rotate-45' : ''}`}
                        />
                    </button>
                    <div
                        className={`grid transition-all duration-500 ease-in-out ${openTabs.includes(index) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                            }`}
                    >
                        <div className="overflow-hidden">
                            <div
                                className="p-4 bg-white text-base text-black prose prose-sm max-w-none"
                                dangerouslySetInnerHTML={{ __html: tab.content }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export function HeroSection() {
    const [selectedOption, setSelectedOption] = useState(2);

    const productOptions: ProductOption[] = [
        {
            id: '1',
            title: '1 Bottle',
            info: '1 bottle total | Save $27.99',
            price: '$31.96',
            comparePrice: '$59.95',
            perks: ['Free USA Shipping'],
            index: 1,
            ship: "Refills Ship Monthly"
        },
        {
            id: '2',
            title: 'Buy 2 Get 1 Free',
            info: '3 bottles total | Save $115.93',
            price: '$63.92',
            comparePrice: '$179.85',
            perks: ['Free USA Shipping', 'Free Anti-Bloating Protocol E-book'],
            badge: 'New Year Sale',
            index: 2,
            ship: "Refills Ship Bi-Monthly"
        },
        {
            id: '3',
            title: 'Buy 3 Get 2 Free',
            info: '5 bottles total | Save $203.87',
            price: '$95.88',
            comparePrice: '$299.75',
            perks: ['Free USA Shipping', 'Free Anti-Bloating Protocol E-book', '$20 Gift Card'],
            index: 3,
            ship: "Refills Ship Every 12 Week"
        }
    ];

    const features = [
        {
            icon: 'https://cdn.shopify.com/s/files/1/0917/5649/5191/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413',
            text: 'Join over 93 Thousand who say - it WORKS!'
        },
        {
            icon: 'https://cdn.shopify.com/s/files/1/0917/5649/5191/files/blood_13858030_1.png?v=1752064910',
            text: "Restores your body's natural 24-hour lymphatic cycle"
        },
        {
            icon: 'https://cdn.shopify.com/s/files/1/0917/5649/5191/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413',
            text: 'Helps reduce fluid retention and the appearance of puffiness and bloating'
        },
        {
            icon: 'https://cdn.shopify.com/s/files/1/0917/5649/5191/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414',
            text: 'Helps fall asleep faster, stay asleep longer and wake up energized'
        },
        {
            icon: 'https://cdn.shopify.com/s/files/1/0917/5649/5191/files/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png?v=1758713414',
            text: 'Eliminates joint stiffness, pain, morning creakiness and feel more grounded'
        },
        {
            icon: 'https://cdn.shopify.com/s/files/1/0917/5649/5191/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413',
            text: 'Boosts energy, mental clarity and emotional balance'
        }
    ];

    const [isNutritionModalOpen, setIsNutritionModalOpen] = useState(false);

    return (
        <section className="w-full bg-white py-8 md:py-8">
            <div className="max-w-7xl mx-auto px-4 md:px-[50px]">
                {/* Mobile Carousel - Only visible on mobile */}
                <MobileCarousel onNutritionClick={() => setIsNutritionModalOpen(true)} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Side - Product Images - Hidden on mobile */}
                    <div className="hidden md:block space-y-4">
                        {/* Main Product Image */}
                        <div className="relative">
                            <img
                                src="https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674"
                                alt="Sculptique Product"
                                className="w-full h-auto rounded-lg"
                            />

                            {/* Nutrition Info Badge */}
                            <div
                                className="absolute bottom-5 border border-black left-1/2 -translate-x-1/2 bg-white opacity-90 backdrop-blur-sm rounded-full px-6 py-2 inline-flex items-center gap-2 shadow-md cursor-pointer hover:bg-white transition-colors max-w-max"
                                onClick={() => setIsNutritionModalOpen(true)}
                            >
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629"
                                    alt="Leaf icon"
                                    className="w-5 h-5 shrink-0"
                                />
                                <span className="text-sm text-gray-700 whitespace-nowrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    Nutritional Information
                                </span>
                            </div>

                            {/* Sale Badge */}
                            <img
                                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
                                alt="Sale Badge"
                                className="absolute top-4 right-4 w-28 h-28"
                            />
                        </div>

                        {/* Secondary Images Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684"
                                alt="Product detail 1"
                                className="w-full h-auto rounded-lg"
                            />
                            <img
                                src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684"
                                alt="Product detail 2"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        {/* Tertiary Images Grid */}
                        <div className="grid grid-cols-3 gap-4">
                            <img
                                src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685"
                                alt="Product detail 3"
                                className="w-full h-auto rounded-lg"
                            />
                            <img
                                src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685"
                                alt="Product detail 4"
                                className="w-full h-auto rounded-lg"
                            />
                            <img
                                src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685"
                                alt="Product detail 5"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        {/* Bottom Images */}
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://trysculptique.com/cdn/shop/files/tiredness-min.png?v=1758713216"
                                alt="Tiredness"
                                className="w-full h-auto rounded-lg"
                            />
                            <img
                                src="https://trysculptique.com/cdn/shop/files/puffiness-min.png?v=1758713216"
                                alt="Puffiness"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Right Side - Product Info */}
                    <div className="space-y-3">
                        {/* Reviews */}
                        <div className="flex items-center gap-3 rounded-lg">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_229.png?v=1752064359"
                                alt="Stars"
                                className="block w-[100px]"
                            />
                            <p className="text-base text-black">4.8/5 Excellent | Based on 2381 Reviews</p>
                        </div>

                        {/* Product Title */}
                        <h1 className="text-2xl md:text-[28px] font-normal text-black leading-tight">
                            New Maximum Potency Formula - Lymphatic Drainage Capsules by Sculptique™
                        </h1>

                        {/* Features List */}
                        <div className="space-y-3">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 ">
                                    <img
                                        src={feature.icon}
                                        alt=""
                                        className="w-13 h-13 mt-0.5 shrink-0"
                                    />
                                    <p className="text-base text-black">{feature.text}</p>
                                </div>
                            ))}
                        </div>

                        <CliniciansBanner />

                        <div className="space-y-3 mt-8 bg-[#f3eee0] p-3 rounded-2xl pb-6">
                            {productOptions.map((option) => (
                                <div
                                    key={option.id}
                                    onClick={() => setSelectedOption(option.index)}
                                    className={`relative border-2 rounded-2xl cursor-pointer transition-all ${selectedOption === option.index
                                        ? 'border-[#039869] shadow-lg'
                                        : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                >
                                    {option.badge && (
                                        <div className="absolute -top-5 -right-1 z-100">
                                            <SaleIcon />
                                        </div>
                                    )}

                                    {/* Main Content */}
                                    <div className="p-4 bg-white rounded-t-2xl overflow-hidden">
                                        <div className="flex items-center gap-3">
                                            {/* Radio Button */}
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedOption === option.index
                                                ? 'border-[#039869]'
                                                : 'border-gray-300'
                                                }`}>
                                                {selectedOption === option.index && (
                                                    <div className="w-3.5 h-3.5 rounded-full bg-[#039869]"></div>
                                                )}
                                            </div>

                                            {/* Option Details */}
                                            <div className="flex-1">
                                                <p className="font-bold text-black text-base">{option.title}</p>
                                                <p className="text-sm text-gray-600">{option.info}</p>
                                            </div>

                                            {/* Pricing */}
                                            <div className="text-right">
                                                <p className="text-base font-semibold text-black">{option.price}</p>
                                                <p className="text-sm text-gray-500 line-through">{option.comparePrice}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Perks Section - Green Background with conditional opacity */}
                                    <div className={`bg-[#039869] px-4 py-3 space-y-2 transition-opacity rounded-b-xl overflow-hidden ${selectedOption === option.index ? 'opacity-100' : 'opacity-60'
                                        }`}>
                                        {option.perks.map((perk, idx) => {
                                            // Determine icon based on perk content
                                            let iconSrc = '';
                                            if (perk.includes('Shipping')) {
                                                iconSrc = 'https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916';
                                            } else if (perk.includes('E-book') || perk.includes('Protocol')) {
                                                iconSrc = 'https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943';
                                            } else if (perk.includes('Gift Card')) {
                                                iconSrc = 'https://trysculptique.com/cdn/shop/files/Kaching-Bundles-Kaching-Bundles-Kaching-Bundles-gift-card_18054896_300x300_300x300_72117561-797d-4e48-9491-3bc1748ce974.png?v=1749556309';
                                            }

                                            return (
                                                <div key={idx} className="flex items-center gap-2.5">
                                                    <div className="">
                                                        <img
                                                            src={iconSrc}
                                                            alt=""
                                                            className="w-8 h-8 object-contain"
                                                        />
                                                    </div>
                                                    <p className="text-sm text-white font-bold">{perk}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Delivery Info */}
                        <div className="flex items-center gap-3 text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="18" fill="none" viewBox="0 0 33 18"><mask id="a" width="33" height="18" x="0" y="0" maskUnits="userSpaceOnUse"><path fill="#fff" d="M0 0h33v18H0z" /></mask><g mask="url(#a)"><path fill="#1a1a1a" d="M32.7 9 29 5.2l-.6-.2h-2.5V.7l-.2-.5-.5-.2H11.4l-.5.1-.3.6v13.8l.1.4.4.3h2.1a3 3 0 0 0 1.5 2.4 3.2 3.2 0 0 0 4.8-2.4H24a3 3 0 0 0 1.5 2.4 3 3 0 0 0 4.3-1l.5-1.4h1.8l.4-.1.3-.6v-5zM12.1 1.6h12.2v12.2h-5L19 13l-.6-.6-.1-.1-.8-.4h-.1a4 4 0 0 0-1.8 0h-.1l-.8.4h-.1l-.6.7-.5.5h-1.2zm4.2 15a2 2 0 0 1-1.7-1.7v-.3a1.7 1.7 0 0 1 3.2-.5l.2.5v.3a2 2 0 0 1-.8 1.3zm11 0a1.7 1.7 0 0 1-1.7-1.8v-.2l.2-.6a2 2 0 0 1 1.6-.8 2 2 0 0 1 1.6 1.4v.2l-.1.7-.7.8zm4.1-2.8h-1.2l-.4-.8-.6-.5-.1-.1-.8-.4h-.1l-1-.1-1 .2-.3.1V6.5H28l3.4 3.3zM10.1 7.5v.4l-.7.3H4.2A1 1 0 0 1 3.9 7a1 1 0 0 1 .7-.4h4.8l.5.2zm0 3v.4a1 1 0 0 1-.7.4H.8a1 1 0 0 1-.7-.5v-.6l.3-.3.4-.1h8.6l.5.2zm0 3.2v.5l-.6.3h-3l-.5-.2-.3-.6.3-.5.5-.2h2.9l.4.1z" /></g></svg>
                            <p className="text-base font-medium">
                                Delivered on <span className="bg-[#039869] text-white rounded-sm py-1 px-2">Thứ Ba, 21 Tháng 1</span> with Express Shipping
                            </p>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={() => window.location.href = 'https://pay.trysculptique.com/checkout2?products=763%3A1'}
                            className="w-full cursor-pointer bg-black text-white font-bold py-4 px-6 rounded-lg hover:bg-gray-800 transition-colors text-lg"
                        >
                            ADD TO CART
                        </button>

                        {/* Subscription/Refills Info */}
                        <div className="flex items-center justify-center gap-6 py-2">
                            <div className="flex items-center gap-2">
                                <RefillIcon width={16} height={16} />
                                <p className="text-base text-black">{productOptions[selectedOption - 1].ship}</p>
                            </div>
                            <div className="h-4 w-px bg-gray-300"></div>
                            <div className="flex items-center gap-2">
                                <img src="https://cdn.shopify.com/s/files/1/0779/0673/9384/files/clock.webp" alt="Clock" className="w-5 h-5" />
                                <p className="text-base text-black">Stop or Cancel Anytime</p>
                            </div>
                        </div>

                        {/* Payment Icons */}
                        <img
                            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003454.png?v=1752066654"
                            alt="Payment methods"
                            className="w-full max-w-md mx-auto my-3"
                        />

                        {/* Promotional Note Image */}
                        <img
                            src="//trysculptique.com/cdn/shop/files/CTA_Button_Add_To_Cart_8b5e7dd2-d716-4b24-a339-d8f27d86e61a.png?v=1766758486"
                            alt="Promotional note"
                            className="w-full rounded-xl my-4"
                        />

                        {/* Guarantees */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864"
                                    alt="60-day guarantee"
                                    className="w-6 h-6"
                                />
                                <p className="text-base text-black">60-Day Money-Back Guarantee</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003293.png?v=1752066864"
                                    alt="Free shipping"
                                    className="w-6 h-6"
                                />
                                <p className="text-base text-black">Free Shipping From USA Included</p>
                            </div>
                        </div>

                        {/* Customer Review */}
                        <div className="bg-[#f3eee0] rounded-xl p-3 mt-6 border border-gray-100">
                            <div className="flex items-start gap-3 mb-3">
                                <img
                                    src="//trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889"
                                    alt="Customer"
                                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                                />
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="font-semibold text-base text-black">Margaret Ellison | FL</p>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267" alt="Verified" className='max-w-30' />
                                    </div>
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/stars-4.5_1.png?v=1752068267"
                                        alt="5 stars"
                                        className="h-4"
                                    />
                                </div>
                            </div>
                            <div className="text-base text-black leading-relaxed">
                                <p className="font-semibold mb-2">Even my husband noticed... the spark came back.</p>
                                <p className="text-black">After years of hiding under coverups, picking apart my body, and feeling disconnected, I finally feel at ease again. I feel less bloated, lighter, like my body is working with me not against me. These past months, I've been present. Even my marriage feels renewed, not just in how I look but in how I feel. It's hard to explain, but once you try it you'll get it. I'd recommend this to my closest friends without question.</p>
                            </div>
                        </div>

                        {/* Expandable Tabs */}
                        <ExpandableTabs />
                    </div>
                </div >
            </div >

            {/* Nutrition Modal */}
            <NutritionModal
                isOpen={isNutritionModalOpen}
                onClose={() => setIsNutritionModalOpen(false)}
            />
        </section >
    );
}
