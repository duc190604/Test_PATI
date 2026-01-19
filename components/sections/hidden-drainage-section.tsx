'use client';

import React from 'react';
import Image from 'next/image';

export function HiddenDrainageSection() {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-[50px]">
                {/* Title */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-[24px] md:text-[32px] text-black">
                        Your <span className="text-[#039869]">Hidden</span> Drainage System
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-26 items-start">
                    {/* Left Column - Text Content */}
                    <div className="space-y-6 order-2 md:order-1">
                        {/* Top Text */}
                        <div className="space-y-4">
                            <p className="text-base md:text-lg text-black leading-relaxed">
                                Your lymphatic system is your body's internal cleaning crew—a network of vessels that processes{' '}
                                <strong>3-4 liters of cellular waste and excess fluid every single day.</strong>
                            </p>
                            <p className="text-base md:text-lg text-black leading-relaxed">
                                When it's working properly, you don't even know it exists.
                            </p>
                            <ul className="space-y-1">
                                <li className="flex items-start gap-3">
                                    <img
                                        src="https://trysculptique.com/cdn/shop/files/check-mark_17013456_2_1.png?v=1760702838"
                                        alt="Check"
                                        className="w-5 h-5 shrink-0 mt-1"
                                    />
                                    <span className="text-base md:text-lg font-semibold text-[#0c7c00] leading-relaxed">
                                        Waste gets drained away
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <img
                                        src="https://trysculptique.com/cdn/shop/files/check-mark_17013456_2_1.png?v=1760702838"
                                        alt="Check"
                                        className="w-5 h-5 shrink-0 mt-1"
                                    />
                                    <span className="text-base md:text-lg font-semibold text-[#0c7c00] leading-relaxed">
                                        Fluid stays balanced.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <img
                                        src="https://trysculptique.com/cdn/shop/files/check-mark_17013456_2_1.png?v=1760702838"
                                        alt="Check"
                                        className="w-5 h-5 shrink-0 mt-1"
                                    />
                                    <span className="text-base md:text-lg font-semibold text-[#0c7c00] leading-relaxed">
                                        Your body feels light and energized.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Pink Highlighted Text */}
                        <div className="bg-[#ffe3e3] p-4 md:p-4 rounded-lg">
                            <p className="text-base md:text-lg text-black leading-[1.3]">
                                But after age 35, declining estrogen hijacks this system's ability to function.
                            </p>
                        </div>

                        {/* Bottom Text */}
                        <div className="space-y-3">
                            <ul className="space-y-1">
                                <li className="flex items-start gap-3">
                                    <img
                                        src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                                        alt="X Mark"
                                        className="w-5 h-5 shrink-0 mt-1"
                                    />
                                    <span className="text-base md:text-lg font-semibold text-[#a60003] leading-relaxed">
                                        Vessel pumping weakens.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <img
                                        src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                                        alt="X Mark"
                                        className="w-5 h-5 shrink-0 mt-1"
                                    />
                                    <span className="text-base md:text-lg font-semibold text-[#a60003] leading-relaxed">
                                        One-way valves fail.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <img
                                        src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                                        alt="X Mark"
                                        className="w-5 h-5 shrink-0 mt-1"
                                    />
                                    <span className="text-base md:text-lg font-semibold text-[#a60003] leading-relaxed">
                                        Protein clogs form.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <img
                                        src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                                        alt="X Mark"
                                        className="w-5 h-5 shrink-0 mt-1"
                                    />
                                    <span className="text-base md:text-lg font-semibold text-[#a60003] leading-relaxed">
                                        Vessel walls become leaky.
                                    </span>
                                </li>
                            </ul>
                            <p className="text-base md:text-lg text-black leading-relaxed">
                                Instead of processing and removing waste, it backs up in your tissues.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="w-full my-auto order-1 md:order-2">
                        <img
                            src="https://trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546"
                            alt="Lymphatic System Diagram"
                            className="w-full h-auto object-contain rounded-lg border border-gray-200 shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
