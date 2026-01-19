'use client';

import React from 'react';
import Image from 'next/image';

export function AccumulationSection() {
    return (
        <section className="w-full bg-white py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-[50px]">
                {/* Content Grid - Reversed on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-26 items-start">
                    {/* Left Column - Image (on desktop) */}
                    <div className="w-full my-auto order-1">
                        <img
                            src="https://trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096"
                            alt="Lymphatic Accumulation"
                            className="w-full h-auto object-contain rounded-lg border border-gray-200 shadow-md"
                        />
                    </div>

                    {/* Right Column - Text Content (on desktop) */}
                    <div className="space-y-6 order-2">
                        {/* Top Text */}
                        <div className="space-y-4">
                            <p className="text-base md:text-lg text-black font-[500px] leading-[1.3]">
                                <strong>And it accumulates. Day after day. Week after week.</strong>
                            </p>
                            <p className="text-base md:text-lg text-black font-medium leading-[1.3]">
                                That gallon of fluid your body should be draining every 24 hours? It's pooling in your stomach, your legs, your face—anywhere gravity and tissue structure allow it to settle.
                            </p>
                        </div>

                        {/* Pink Highlighted Text with Bullets */}
                        <div className="bg-[#ffe3e3] p-4 md:p-4 rounded-lg space-y-3">
                            <p className="text-base md:text-lg text-black leading-[1.3]">
                                The metabolic waste your cells produce overnight? It's still sitting there at noon. At dinner. While you're trying to fall asleep.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3">
                                    <img
                                        src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                                        alt="X Mark"
                                        className="w-5 h-5 shrink-0 mt-1"
                                    />
                                    <span className="text-base md:text-lg font-semibold text-[#a60003] leading-relaxed">
                                        That's why you're bloated.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <img
                                        src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                                        alt="X Mark"
                                        className="w-5 h-5 shrink-0 mt-1"
                                    />
                                    <span className="text-base md:text-lg font-semibold text-[#a60003] leading-relaxed">
                                        That's why your ankles swell.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <img
                                        src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                                        alt="X Mark"
                                        className="w-5 h-5 shrink-0 mt-1"
                                    />
                                    <span className="text-base md:text-lg font-semibold text-[#a60003] leading-relaxed">
                                        That's why you see cellulite.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <img
                                        src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                                        alt="X Mark"
                                        className="w-5 h-5 shrink-0 mt-1"
                                    />
                                    <span className="text-base md:text-lg font-semibold text-[#a60003] leading-relaxed">
                                        That's why you feel exhausted and foggy.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Bottom Text */}
                        <div className="space-y-4">
                            <p className="text-base md:text-lg text-black leading-[1.3]">
                                <strong>Your cells are literally sitting in their own waste—and your body can't flush it out.</strong>
                            </p>
                            <p className="text-base md:text-lg text-black leading-[1.3]">
                                The longer this goes on, the worse it gets. More congestion. More inflammation. More pressure on an already compromised system.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
