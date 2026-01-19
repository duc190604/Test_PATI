'use client';

import React from 'react';
import Image from 'next/image';

interface BloatingSymptom {
    image: string;
    text: string;
}

const symptoms: BloatingSymptom[] = [
    {
        image: 'https://trysculptique.com/cdn/shop/files/Untitled_design_3.png?v=1760689800',
        text: "Your stomach is flat in the morning, but by evening you look six months pregnant."
    },
    {
        image: 'https://trysculptique.com/cdn/shop/files/Untitled_design_3_1.png?v=1760689799',
        text: "Your ankles disappear into \"kankles\" by the end of the day."
    },
    {
        image: 'https://trysculptique.com/cdn/shop/files/Untitled_design_4.png?v=1760689801',
        text: "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try."
    },
    {
        image: 'https://trysculptique.com/cdn/shop/files/Untitled_design_4_1.png?v=1760689799',
        text: "You feel foggy and exhausted even after a full night's sleep."
    },
    {
        image: 'https://trysculptique.com/cdn/shop/files/Untitled_design_3_2.png?v=1760689799',
        text: "You wake up stiff and achy, like your body aged overnight."
    }
];

export function WhyBloatingSection() {
    return (
        <section className="w-full bg-white py-4 md:py-4 md:mt-8">
            <div className="max-w-7xl mx-auto px-4 md:px-[50px]">
                {/* Title Section */}
                <div className="text-center mb-8 md:mb-8 md:mx-16">
                    <h2 className="text-[24px] md:text-[32px] text-black my-4">
                        Why Your <span className="text-[#039869]">Bloating, Brain Fog & Swollen Legs</span> Are Actually Connected
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-black max-w-3xl mx-auto my-4">
                        If you're experiencing more than one of these symptoms, your body is trying to tell you something:
                    </p>
                </div>

                {/* Symptoms Grid */}
                <div className="mb-0">
                    {/* Desktop: 5 columns in one row */}
                    <div className="hidden md:grid grid-cols-5 gap-4 md:gap-6">
                        {symptoms.map((symptom, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="w-full mb-2 relative rounded-md">
                                    <img
                                        src={symptom.image}
                                        alt={`Symptom ${index + 1}`}
                                        className="object-fill rounded-md min-h-[150px] w-full"
                                    />
                                </div>
                                <div className="bg-[#f7f7f7] p-4 w-full min-h-[150px] flex justify-center">
                                    <p className="text-black text-base leading-[1.3]">
                                        {symptom.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile: Horizontal cards (image left, text right) */}
                    <div className="md:hidden flex flex-col gap-4 px-1">
                        {symptoms.map((symptom, index) => (
                            <div key={index} className="flex items-stretch">
                                <div className="w-1/2 shrink-0 mb-auto">
                                    <img
                                        src={symptom.image}
                                        alt={`Symptom ${index + 1}`}
                                        className="object-contain rounded-sm w-full h-full min-h-[150px]"
                                    />
                                </div>
                                <div className="w-1/2 bg-[#f7f7f7] p-4 flex items-center">
                                    <p className="text-black text-base leading-[1.3]">
                                        {symptom.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Note Image 1 */}
                <div className="mb-4 md:mb-4 md:mx-4">
                    <div className="hidden md:block w-full">
                        <img
                            src="https://trysculptique.com/cdn/shop/files/Group_7207.png?v=1760690771"
                            alt="Desktop Note"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="md:hidden w-full mt-5 mx-auto">
                        <img
                            src="https://trysculptique.com/cdn/shop/files/Frame_1000003583.png?v=1760690769"
                            alt="Mobile Note"
                            className="w-full h-auto object-contain max-w-[420px] mx-auto"
                        />
                    </div>
                </div>

                <div className="flex justify-center mb-4 md:mb-4">
                    <img
                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549"
                        alt="Arrow"
                        className="w-16 h-16 md:w-20 md:h-20 object-contain"
                    />
                </div>

                {/* Connection Title */}
                <div className="text-center mb-4 md:mb-4">
                    <h2 className="text-[24px] md:text-[32px] text-black">
                        The Connection <span className="text-[#039869]">You've Been Missing</span>
                    </h2>
                </div>

                {/* Note Image 2 */}
                <div className="mb-4 md:mb-4">
                    <div className="hidden md:block w-full">
                        <img
                            src="https://trysculptique.com/cdn/shop/files/Frame_1000003590.png?v=1760690771"
                            alt="Desktop Connection"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="md:hidden w-full mx-auto">
                        <img
                            src="https://trysculptique.com/cdn/shop/files/Frame_1000003590_1.png?v=1760690770"
                            alt="Mobile Connection"
                            className="w-full h-auto object-contain max-w-[420px] mx-auto"
                        />
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549"
                        alt="Arrow"
                        className="w-16 h-16 md:w-20 md:h-20 object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
