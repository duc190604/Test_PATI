'use client';

import React, { useState } from 'react';

interface Ingredient {
    category: string;
    image: string;
    name: string;
    description: string;
    study: string;
}

const ingredients: Ingredient[] = [
    {
        category: 'Reactivate Lymphatic Pumps',
        image: 'https://trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760698909',
        name: 'Cleavers Extract (100mg)',
        description: 'Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that "wake up" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance.',
        study: '[Study: Enhanced NK cell activity in immunosuppressed models]'
    },
    {
        category: 'Flush Excess Fluid',
        image: 'https://trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908',
        name: 'Dandelion Extract (250mg)',
        description: 'Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001).',
        study: '[Study: First human pilot study on diuretic effects]'
    },
    {
        category: 'Break Down Protein Clogs',
        image: 'https://trysculptique.com/cdn/shop/files/image_2.png?v=1760939909',
        name: 'Bromelain Powder (100mg)',
        description: 'Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating "sludge" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo.',
        study: '[Study: As effective as prescription NSAIDs for inflammation]'
    },
    {
        category: 'Strengthen Vessel Walls',
        image: 'https://trysculptique.com/cdn/shop/files/image_3.png?v=1760939909',
        name: 'Rutin (100mg)',
        description: "Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients.",
        study: '[Study: Systematic review of 1,643 participants]'
    },
    {
        category: 'Reduce Inflammation',
        image: 'https://trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909',
        name: 'Burdock Root Powder (200mg)',
        description: 'Breaks the inflammation-congestion cycle. RCT showed significantly decreased inflammatory markers IL-6 and C-reactive protein (p<0.001). Also supports hormonal balance.',
        study: '[Study: 42-day trial in osteoarthritis patients]'
    },
    {
        category: 'Boost Immune Clearance',
        image: 'https://trysculptique.com/cdn/shop/files/image_4.png?v=1760939909',
        name: 'Echinacea Purpurea Extract (500mg)',
        description: 'Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections.',
        study: '[Study: Increased NK cell cytotoxic activity]'
    },
    {
        category: 'Support Metabolism',
        image: 'https://trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909',
        name: 'Kelp Extract (30mg)',
        description: 'Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials.',
        study: '[Study: Dose-dependent increase in TSH levels]'
    },
    {
        category: 'Antioxidant Protection',
        image: 'https://trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910',
        name: 'Lemon Powder (50mg)',
        description: 'Protects vessels from oxidative damage. RCT showed 145% improvement in vascular function (p<0.001). Supports circulation and metabolic health.',
        study: '[Study: Triple-masked trial in 90 participants]'
    }
];

export function IngredientsSection() {
    const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

    const toggleExpand = (index: number) => {
        setExpandedIndices(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section className="w-full bg-[#f7f2e7] mt-[35px] py-8 md:py-14">
            <div className="max-w-7xl mx-auto px-4 md:px-[50px]">
                {/* Title */}
                <div className="text-center mb-8 md:mb-12 max-w-[790px] mx-auto">
                    <h2 className="text-[24px] md:text-[32px] text-black mb-4">
                        <span className="text-[#039869]">The 8-Ingredient System</span> That Restores What Hormones Once Maintained
                    </h2>
                    <p className="text-base md:text-lg text-black leading-[1.3]">
                        Sculptique is the only formula that addresses ALL 6 mechanisms of lymphatic dysfunction simultaneously—not with symbolic doses, but with therapeutic amounts based on clinical research.
                        <br />
                        Not just moving fluid temporarily. Not just reducing inflammation. <strong>Complete restoration.</strong>
                    </p>
                </div>

                {/* Ingredients Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 mb-8 md:mb-12 border-[1.5px] border-black rounded-xl overflow-hidden">
                    {ingredients.map((ingredient, index) => (
                        <div
                            key={index}
                            onClick={() => toggleExpand(index)}
                            className="bg-white border-[1.5px] border-black overflow-hidden p-4 md:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                            {/* Category with checkmark */}
                            <div className=" flex items-center justify-center md:justify-start gap-2 ">
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419"
                                    alt="Check"
                                    className="w-4 h-4 shrink-0 mt-0.5"
                                />
                                <p className="text-base text-[#0c7c00] ">
                                    {ingredient.category}
                                </p>
                            </div>

                            {/* Image - Desktop only */}
                            <div className="hidden md:block px-4 pb-4 max-h-[80px] max-w-[150px] mx-auto my-4">
                                <img
                                    src={ingredient.image}
                                    alt={ingredient.name}
                                    className="w-full h-auto object-fill mx-auto"
                                />
                            </div>

                            {/* Expandable Section */}
                            <div className="">
                                {/* Thumbnail - clickable */}
                                <div
                                    className=" flex items-center justify-between transition-colors"
                                >
                                    {/* Mobile image */}
                                    <div className="md:hidden w-[20%] shrink-0 mr-3">
                                        <img
                                            src={ingredient.image}
                                            alt={ingredient.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <h5 className="flex-1 text-sm md:text-base font-semibold text-black" style={{ fontFamily: 'var(--font-trirong)' }}>
                                        {ingredient.name}
                                    </h5>

                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626"
                                        alt="Arrow"
                                        className={`w-6 h-3 shrink-0 transition-transform `}
                                    />
                                </div>

                                {/* Expanded Content */}
                                <div
                                    className={`grid transition-all duration-700 ease-in-out ${expandedIndices.includes(index) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="pb-4 space-y-2">
                                            <p className="text-sm text-black leading-[1.3]">
                                                {ingredient.description}
                                            </p>
                                            <p className="text-sm text-black">
                                                {ingredient.study}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Note Image */}
                <div className="mb-0">
                    <div className="hidden md:block  max-w-[580px] mx-auto">
                        <img
                            src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_2.png?v=1760697982"
                            alt="Desktop Note"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="md:hidden w-full">
                        <img
                            src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_3.png?v=1760697982"
                            alt="Mobile Note"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
