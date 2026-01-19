'use client';

import React from 'react';

interface FailureReason {
    image: string;
    title: string;
    reason: string;
}

const failureReasons: FailureReason[] = [
    {
        image: 'https://trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360',
        title: 'You cut out gluten, dairy, sugar. You ate clean for months.',
        reason: "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there."
    },
    {
        image: 'https://trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359',
        title: 'You tried viral lymphatic drops from TikTok.',
        reason: "They're just pricey water with trace herbs. The \"active ingredients\" are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine."
    },
    {
        image: 'https://trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359',
        title: 'You got lymphatic massage or bought compression socks.',
        reason: "Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own."
    }
];

export function WhyNothingWorkedSection() {
    return (
        <section className="w-full bg-[#f7f2e7] md:mt-4 pb-[70px] ">
            <div className="max-w-7xl mx-auto px-4 md:px-[50px]">
                {/* Title */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-[24px] md:text-[32px] text-black">
                        Why Nothing Has <span className="text-[#039869]">Worked</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 ">
                    {failureReasons.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            {/* Image */}
                            <div className="mb-0">
                                <img
                                    src={item.image}
                                    alt={`Reason ${index + 1}`}
                                    className="w-full h-auto object-cover rounded-t-lg"
                                />
                            </div>

                            {/* Content */}
                            <div className="space-y-4 bg-white md:p-6 p-4 rounded-b-md">
                                {/* Title */}
                                <h4 className="text-xl text-center text-black leading-tight">
                                    {item.title}
                                </h4>

                                {/* Pink Box */}
                                <div className="bg-[#ffe3e3] px-4 py-2 rounded-lg space-y-3 md:min-h-[180px]">
                                    {/* Subtitle with icon */}
                                    <div className="flex items-center font-medium justify-center">
                                        <span className="text-base mr-2  text-black">
                                            Why it failed
                                        </span>
                                        <img
                                            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853"
                                            alt="Arrow"
                                            className="w-6 h-6"
                                        />
                                    </div>

                                    {/* Reason text */}
                                    <p className="text-base  text-black leading-[1.3] text-center font-bold">
                                        {item.reason}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note Image */}
                <div className="mb-4 md:mb-8">
                    <div className="hidden md:block w-full px-[90px]">
                        <img
                            src="https://trysculptique.com/cdn/shop/files/Group_7207_1.png?v=1760694176"
                            alt="Desktop Note"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="md:hidden w-full max-w-[420px] mx-auto mt-4">
                        <img
                            src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_1.png?v=1760694176"
                            alt="Mobile Note"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center space-y-4 mt-6 md:mt-0">
                    <a
                        href="https://pay.trysculptique.com/lymphatic/checkout"
                        className="inline-block cursor-pointer w-full md:w-auto bg-black text-white font-bold py-[18px] md:px-20 px-4 rounded-md hover:bg-gray-800 transition-colors md:text-lg text-base"
                    >
                        Try Lymphatic Drainage Risk-Free
                    </a>

                    {/* Footer text */}
                    <div className="flex items-center justify-center gap-2 text-base text-black font-bold">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
                            alt="60 days"
                            className="w-6 h-6"
                        />
                        <span>60 day money-back guarantee</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
