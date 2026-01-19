'use client';

import React from 'react';
import Image from 'next/image';

interface PressLogo {
    src: string;
    alt: string;
}

// Pattern: Vogue → Grazia → Vogue → Women's Health (repeating)
const basePattern: PressLogo[] = [
    {
        src: 'https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678',
        alt: 'Vogue'
    },
    {
        src: 'https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678',
        alt: 'Grazia'
    },
    {
        src: 'https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678',
        alt: 'Vogue'
    },
    {
        src: 'https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678',
        alt: "Women's Health"
    }
];

export function PressLogosSection() {
    // Duplicate pattern 6 times for seamless infinite scroll (4 logos × 6 = 24 logos)
    const duplicatedLogos = [
        ...basePattern,
        ...basePattern,
        ...basePattern,
        ...basePattern,
        ...basePattern,
        ...basePattern
    ];

    return (
        <section className="relative w-full mx-auto">
            <div className="relative max-w-full mx-auto leading-none bg-[#f3eee0] overflow-hidden">
                <div className="grid grid-cols-1 mx-auto justify-items-center text-center py-5 content-center gap-5">
                    <h3
                        className="text-[18px] sm:text-base md:text-2xl tracking-normal text-black m-0"
                        style={{ fontFamily: 'var(--font-trirong)' }}
                    >
                        As Seen In
                    </h3>
                    <div className="w-full overflow-hidden min-w-px">
                        <div className="logos-wrap flex items-center w-fit gap-[40px] md:gap-[100px]">
                            {duplicatedLogos.map((logo, index) => (
                                <div key={`logo-${index}`} className="shrink-0 flex items-center justify-center">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={100}
                                        height={30}
                                        className="block object-contain"
                                        unoptimized
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes logo-scroll {
          0% {
            transform: translate(0);
          }
          100% {
            transform: translate(-50%);
          }
        }

        .logos-wrap {
          animation: logo-scroll 30s infinite linear;
        }

        @media screen and (max-width: 900px) {
          .logos-wrap {
            animation: logo-scroll 40s infinite linear;
          }
        }

        /* Pause animation on hover */
        .logos-wrap:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}
