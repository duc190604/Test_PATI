'use client';

import { useState, useEffect } from 'react';

export function StoriesSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [playingVideo, setPlayingVideo] = useState<number | null>(null);
    const [scrollPercentage, setScrollPercentage] = useState(25.1); // Default to desktop
    const [maxSlide, setMaxSlide] = useState(7); // Default to desktop
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateScrollPercentage = () => {
            // Check if screen is mobile (< 640px, Tailwind's sm breakpoint)
            const mobile = window.innerWidth < 640;
            setIsMobile(mobile);

            if (mobile) {
                setScrollPercentage(80);
                setMaxSlide(9);
            } else {
                setScrollPercentage(25.1);
                setMaxSlide(6);
            }
        };

        // Set initial value
        updateScrollPercentage();

        // Update on resize
        window.addEventListener('resize', updateScrollPercentage);
        return () => window.removeEventListener('resize', updateScrollPercentage);
    }, []);

    // Calculate cumulative scroll distance
    const getScrollDistance = () => {
        if (!isMobile) {
            return currentSlide * scrollPercentage;
        }

        // Mobile: last scroll is half (40% instead of 80%)
        if (currentSlide === 0) return 0;
        if (currentSlide <= 8) {
            return currentSlide * 80;
        } else {
            return (8 * 80) + 40;
        }
    };

    const videos = [
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_12.40.11.png?v=1752486039",
            src: "https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.12.02.png?v=1752498744",
            src: "https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.04.png?v=1752497038",
            src: "https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.34.png?v=1752497063",
            src: "https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.11.50.png?v=1752498777",
            src: "https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.10.png?v=1752497092",
            src: "https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.44.54.png?v=1752497118",
            src: "https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.46.37.png?v=1752497216",
            src: "https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.45.36.png?v=1752497166",
            src: "https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.47.12.png?v=1752497252",
            src: "https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4"
        }
    ];

    const handlePrev = () => {
        setCurrentSlide(prev => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide(prev => Math.min(maxSlide, prev + 1));
    };

    const handleVideoClick = (index: number, videoElement: HTMLVideoElement) => {
        if (playingVideo === index) {
            // If clicking on currently playing video, pause and reset
            videoElement.pause();
            videoElement.currentTime = 0;
            setPlayingVideo(null);
        } else {
            // Pause all other videos
            const allVideos = document.querySelectorAll('video');
            allVideos.forEach((video) => {
                video.pause();
                video.currentTime = 0;
            });
            // Play this video
            videoElement.play();
            setPlayingVideo(index);
        }
    };

    return (
        <section className="w-full bg-[#f3eee0] py-8 md:py-14">
            <div className="max-w-[1340px] mx-auto px-4 md:px-12">
                <div className="flex flex-col">
                    {/* Header */}
                    <div className="text-center mx-auto max-w-[800px] flex flex-col gap-4">
                        <div className="w-full flex justify-center">
                            <img
                                alt="worldwide-review"
                                className="max-w-[300px]"
                                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_2.png?v=1752485383"
                            />
                        </div>
                        <h2 className="text-2xl sm:text-[2rem] leading-[1.3em] mb-4 text-black">
                            See The Stories of Sculptique™ Women Firsthand
                        </h2>
                    </div>

                    {/* Video Carousel */}
                    <div className="flex flex-col gap-3 relative">
                        <div className="relative rounded-sm overflow-hidden">
                            <div
                                className="flex -ml-4 px-2 rounded-sm transition-transform duration-500 ease-out"
                                style={{
                                    transform: `translate3d(-${getScrollDistance()}%, 0px, 0px)`,
                                }}
                            >
                                {videos.map((video, index) => (
                                    <div
                                        key={index}
                                        className="min-w-0 shrink-0 grow-0 pl-4 sm:basis-[25.1%] basis-[80%] py-1 flex justify-center"
                                    >
                                        <div className="h-full w-full rounded-sm relative group">
                                            {playingVideo !== index && (
                                                <div
                                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer z-10 group-hover:opacity-80 transition-opacity"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        const videoElement = e.currentTarget.nextElementSibling as HTMLVideoElement;
                                                        if (videoElement) {
                                                            handleVideoClick(index, videoElement);
                                                        }
                                                    }}
                                                >
                                                    <img
                                                        alt="play-icon"
                                                        className="w-8 h-8"
                                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519"
                                                    />
                                                </div>
                                            )}
                                            <video
                                                playsInline
                                                poster={video.poster}
                                                className="aspect-9/16 w-full h-full rounded-sm object-cover overflow-hidden cursor-pointer"
                                                onClick={(e) => {
                                                    handleVideoClick(index, e.currentTarget);
                                                }}
                                            >
                                                <source src={video.src} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progress Indicators */}
                        <div className="absolute sm:bottom-2.5 bottom-2 w-full sm:max-w-[calc(100%-200px)] max-w-[calc(100%-90px)]">
                            {/* Desktop indicators */}
                            <div className="flex w-full gap-0 max-sm:hidden">
                                {[...Array(7)].map((_, index) => (
                                    <button
                                        key={index}
                                        aria-label={`Go to position ${index + 1}`}
                                        className="w-full h-4 cursor-pointer"
                                        onClick={() => setCurrentSlide(index)}
                                    >
                                        <div className={`h-1 w-full ${currentSlide === index ? 'bg-[#039869]' : 'bg-gray-300'}`}></div>
                                    </button>
                                ))}
                            </div>
                            {/* Mobile indicators */}
                            <div className="flex w-full gap-0 sm:hidden">
                                {[...Array(10)].map((_, index) => (
                                    <button
                                        key={index}
                                        aria-label={`Go to position ${index + 1}`}
                                        className="w-full h-4 cursor-pointer"
                                        onClick={() => setCurrentSlide(index)}
                                    >
                                        <div className={`h-1 w-full ${currentSlide === index ? 'bg-[#039869]' : 'bg-gray-300'}`}></div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center justify-end">
                            <div className="flex gap-3 items-center">
                                <button
                                    onClick={handlePrev}
                                    disabled={currentSlide === 0}
                                    className="bg-white flex justify-center items-center w-8 h-8 rounded-full disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                                >
                                    <img
                                        alt="left-arrow"
                                        className="w-8 h-8"
                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845"
                                    />
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={currentSlide === maxSlide}
                                    className="bg-white flex justify-center items-center w-8 h-8 rounded-full rotate-180 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                                >
                                    <img
                                        alt="right-arrow"
                                        className="w-8 h-8"
                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <div className="text-center font-normal flex flex-col justify-center items-center gap-4">
                            <button
                                onClick={() => window.location.href = 'https://pay.trysculptique.com/lymphatic/checkout'}
                                className="text-white bg-black hover:opacity-70 sm:py-4 sm:px-20 p-4 sm:text-lg text-base sm:inline-block block transition duration-200 leading-[1.3em] rounded-sm hover:cursor-pointer max-sm:w-full font-normal"
                            >
                                Try Lymphatic Drainage Risk-Free
                            </button>
                            <div className="flex items-center gap-4 justify-center">
                                <div>
                                    <img
                                        alt="60-days-back"
                                        className="w-6 h-6"
                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864"
                                    />
                                </div>
                                <p className="text-black">60-Day Money-Back Guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
