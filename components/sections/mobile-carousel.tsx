'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface MobileCarouselProps {
    onNutritionClick: () => void;
}

export function MobileCarousel({ onNutritionClick }: MobileCarouselProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

    const images = [
        {
            src: '//trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674',
            hasNutrition: true,
            hasSale: true
        },
        { src: '//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684' },
        { src: '//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684' },
        { src: '//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685' },
        { src: '//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685' },
        { src: '//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685' },
        { src: '//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard6.jpg?v=1760103685' },
        { src: '//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard8.jpg?v=1760103685' },
        { src: '//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard9.jpg?v=1760103684' },
        { src: '//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard10.jpg?v=1760103684' },
        { src: '//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard11.jpg?v=1760103684' },
        { src: '//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard12.jpg?v=1760103685' },
        { src: '//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard13.jpg?v=1760103685' }
    ];

    // Sync thumbnails to show active slide
    const handleMainSlideChange = (swiper: SwiperType) => {
        if (thumbsSwiper) {
            const realIndex = swiper.realIndex;
            // Use slideToLoop for proper loop synchronization
            thumbsSwiper.slideToLoop(realIndex, 300);
        }
    };

    // Track swipe direction
    const swipeStartXRef = useRef<number>(0);

    // Track if user is swiping (not just tapping)
    const handleThumbnailTouchStart = (swiper: SwiperType) => {
        // Store the starting X position
        swipeStartXRef.current = swiper.touches.startX;
    };

    // Auto-advance to next/previous slide after user releases touch on thumbnails
    const handleThumbnailTouchEnd = (swiper: SwiperType) => {
        // Only auto-advance if the swiper actually moved (user swiped, not just tapped)
        if (!swiper.touches.diff) {
            return; // User just tapped, don't auto-advance
        }

        // Detect swipe direction
        const swipeEndX = swiper.touches.currentX;
        const swipeStartX = swipeStartXRef.current;
        const isSwipingBackward = swipeEndX > swipeStartX; // Swiping right = backward

        // Immediately advance to next or previous slide based on direction
        if (mainSwiper) {
            if (isSwipingBackward) {
                mainSwiper.slidePrev(); // Go to previous slide
            } else {
                mainSwiper.slideNext(); // Go to next slide
            }
        }
    };

    return (
        <div className="md:hidden w-full mb-6">
            {/* Main Carousel */}
            <div className="relative mb-3">
                <Swiper
                    modules={[Navigation, Thumbs]}
                    onSwiper={setMainSwiper}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    navigation={{
                        prevEl: '.swiper-button-prev-custom',
                        nextEl: '.swiper-button-next-custom',
                    }}
                    onSlideChange={handleMainSlideChange}
                    loop={true}
                    spaceBetween={0}
                    className="main-carousel rounded-xl overflow-hidden"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full aspect-square bg-gray-100">
                                <img
                                    src={image.src}
                                    alt={`Product ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    loading={index === 0 ? 'eager' : 'lazy'}
                                />

                                {/* Nutrition Info Badge */}
                                {image.hasNutrition && (
                                    <div
                                        className="absolute bottom-5 border border-black left-1/2 -translate-x-1/2 bg-white opacity-90 backdrop-blur-sm rounded-full px-6 py-2 inline-flex items-center gap-2 shadow-md cursor-pointer hover:bg-white transition-colors max-w-max"
                                        onClick={onNutritionClick}
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
                                )}

                                {/* Sale Badge */}
                                {image.hasSale && (
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
                                        alt="New Year's Sale"
                                        className="absolute top-3 right-3 w-20 h-20"
                                    />
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <button className="swiper-button-prev-custom absolute left-3 top-1/2 -translate-y-1/2 z-1 bg-white/20 rounded-full">
                    <img
                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_1.png?v=1752126281"
                        alt="Previous"
                        className="w-8 h-8"
                    />
                </button>
                <button className="swiper-button-next-custom absolute right-3 top-1/2 -translate-y-1/2 z-1 bg-white/20 rounded-full">
                    <img
                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin.png?v=1752126281"
                        alt="Next"
                        className="w-8 h-8"
                    />
                </button>
            </div>

            {/* Thumbnails */}
            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={6}
                slidesPerView={4}
                slidesPerGroup={1}
                watchSlidesProgress={true}
                onTouchStart={handleThumbnailTouchStart}
                onTouchEnd={handleThumbnailTouchEnd}
                className="thumbs-carousel"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="aspect-square cursor-pointer rounded-lg overflow-hidden border border-gray-200 hover:border-gray-400 transition-all">
                            <img
                                src={image.src}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .main-carousel .swiper-slide-thumb-active + div {
                    border-color: #000 !important;
                    border-width: 2px;
                }
            `}</style>
        </div>
    );
}
