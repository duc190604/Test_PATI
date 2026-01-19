'use client';

import React, { useState } from 'react';

interface Review {
    id: string;
    author: string;
    rating: number;
    date: string;
    title: string;
    content: string;
    verified: boolean;
}

const sampleReviews: Review[] = [
    {
        id: '1',
        author: 'Hannah V.',
        rating: 5,
        date: '01/10/2025',
        title: 'Better Than Expected',
        content: "I didn't expect much, but Sculptique has blown me away. The cellulite reduction is real and I'm less bloated throughout the day. My clothes fit better and I feel great!",
        verified: true
    },
    {
        id: '2',
        author: 'Chloe N.',
        rating: 5,
        date: '01/10/2025',
        title: 'Finally Wearing Shorts Again',
        content: "I avoided shorts for years because of cellulite. After six weeks with this supplement, I'm comfortable showing my legs again. The texture has improved so much and I'm thrilled with the results.",
        verified: false
    },
    {
        id: '3',
        author: 'Grace L.',
        rating: 5,
        date: '01/09/2025',
        title: 'Amazing Product',
        content: "This has been a game changer for my confidence. The dimpling on my thighs has significantly reduced and my skin looks healthier overall. I'm so glad I tried Sculptique!",
        verified: true
    },
    {
        id: '4',
        author: 'Madison K.',
        rating: 5,
        date: '01/09/2025',
        title: 'Works Like Magic',
        content: "Four weeks in and the cellulite on my legs is barely noticeable. My skin feels firmer and I'm less puffy everywhere. This is the real deal and I couldn't be happier!",
        verified: true
    },
    {
        id: '5',
        author: 'Ella R.',
        rating: 5,
        date: '01/08/2025',
        title: 'Highly Effective',
        content: "I've wasted so much money on products that didn't work. Sculptique is different. The results are visible and my skin texture has improved dramatically. Worth every dollar!",
        verified: false
    },
    {
        id: '6',
        author: 'Sophia M.',
        rating: 5,
        date: '01/07/2025',
        title: 'Life Changing',
        content: "After menopause, I thought I'd never get rid of the stubborn cellulite. Sculptique proved me wrong! My skin is smoother and I feel more confident than ever.",
        verified: true
    },
    {
        id: '7',
        author: 'Olivia P.',
        rating: 4,
        date: '01/06/2025',
        title: 'Great Results',
        content: "I've been using this for about 5 weeks and I'm seeing noticeable improvements. The bloating has reduced significantly and my skin texture is getting better.",
        verified: true
    },
    {
        id: '8',
        author: 'Emma T.',
        rating: 5,
        date: '01/05/2025',
        title: 'Incredible Transformation',
        content: "I can't believe the difference! The cellulite on my thighs has diminished so much. I'm finally comfortable wearing a swimsuit again. Thank you Sculptique!",
        verified: false
    },
    {
        id: '9',
        author: 'Ava W.',
        rating: 5,
        date: '01/04/2025',
        title: 'Best Investment',
        content: "This is hands down the best supplement I've ever tried. My skin looks healthier, the dimpling is almost gone, and I feel amazing. Worth every penny!",
        verified: true
    },
    {
        id: '10',
        author: 'Isabella H.',
        rating: 5,
        date: '01/03/2025',
        title: 'Visible Results',
        content: "After just 3 weeks, I'm already seeing results. The puffiness is gone and my skin feels firmer. I'm so excited to see what happens in the next few weeks!",
        verified: true
    },
    {
        id: '11',
        author: 'Mia B.',
        rating: 4,
        date: '01/02/2025',
        title: 'Really Works',
        content: "I was skeptical at first, but Sculptique really delivers. The cellulite reduction is gradual but consistent. My legs look so much better now!",
        verified: false
    },
    {
        id: '12',
        author: 'Charlotte D.',
        rating: 5,
        date: '01/01/2025',
        title: 'Perfect Solution',
        content: "I've tried everything - creams, massages, exercises. Nothing worked until Sculptique. This is the real solution for cellulite and bloating!",
        verified: true
    },
    {
        id: '13',
        author: 'Amelia F.',
        rating: 5,
        date: '12/30/2024',
        title: 'Highly Recommend',
        content: "If you're struggling with cellulite, just try this. It's been 8 weeks and the transformation is incredible. My confidence is through the roof!",
        verified: true
    },
    {
        id: '14',
        author: 'Harper G.',
        rating: 5,
        date: '12/29/2024',
        title: 'Game Changer',
        content: "Sculptique has completely changed how I feel about my body. The cellulite is barely visible now and I'm no longer bloated all the time.",
        verified: false
    },
    {
        id: '15',
        author: 'Evelyn J.',
        rating: 4,
        date: '12/28/2024',
        title: 'Impressive Results',
        content: "I'm on week 6 and very happy with the progress. The dimpling has reduced noticeably and my skin feels much smoother. Will continue using!",
        verified: true
    },
    {
        id: '16',
        author: 'Abigail K.',
        rating: 5,
        date: '12/27/2024',
        title: 'Worth The Hype',
        content: "All the positive reviews are true! This product actually works. My cellulite has improved dramatically and I feel so much better in my own skin.",
        verified: true
    },
    {
        id: '17',
        author: 'Emily L.',
        rating: 5,
        date: '12/26/2024',
        title: 'Amazing Experience',
        content: "I can't say enough good things about Sculptique. It's helped with both cellulite and water retention. I'm a customer for life!",
        verified: false
    },
    {
        id: '18',
        author: 'Elizabeth M.',
        rating: 5,
        date: '12/25/2024',
        title: 'Best Product Ever',
        content: "This is the only product that has actually made a difference. The cellulite reduction is real and my skin looks healthier than it has in years!",
        verified: true
    },
    {
        id: '19',
        author: 'Sofia N.',
        rating: 4,
        date: '12/24/2024',
        title: 'Very Satisfied',
        content: "Great product! I've been using it for a month and the results are encouraging. The cellulite is less noticeable and I feel less bloated.",
        verified: true
    },
    {
        id: '20',
        author: 'Avery O.',
        rating: 5,
        date: '12/23/2024',
        title: 'Fantastic Results',
        content: "I'm absolutely thrilled with Sculptique! The transformation has been amazing. My skin is smoother, firmer, and the cellulite is almost gone!",
        verified: true
    }
];

export function ReviewsSection() {
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const reviewsPerPage = 5;
    const totalPages = Math.ceil(sampleReviews.length / reviewsPerPage);
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    const currentReviews = sampleReviews.slice(startIndex, endIndex);

    const handleToggleForm = () => {
        if (showReviewForm) {
            setIsClosing(true);
            setTimeout(() => {
                setShowReviewForm(false);
                setIsClosing(false);
            }, 700);
        } else {
            setShowReviewForm(true);
        }
    };

    const renderStars = (count: number, interactive: boolean = false, size: number = 17) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const isFilled = i <= count;
            stars.push(
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill={isFilled ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth={isFilled ? '3' : '2'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-[#FA8A8A] ${interactive ? 'cursor-pointer hover:opacity-60' : ''}`}
                    onClick={() => interactive && setRating(i)}
                    onMouseEnter={() => interactive && setHoverRating(i)}
                    onMouseLeave={() => interactive && setHoverRating(0)}
                >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
            );
        }
        return <div className="flex items-center gap-0.5">{stars}</div>;
    };

    const renderHalfStars = (rating: number, size: number = 17) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                // Full star
                stars.push(
                    <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width={size}
                        height={size}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#FA8A8A]"
                    >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                );
            } else if (i === fullStars + 1 && hasHalfStar) {
                // Half star
                stars.push(
                    <div key={i} className="relative inline-block" style={{ width: `${size}px`, height: `${size}px` }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={size}
                            height={size}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="absolute top-0 left-0 text-[#FA8A8A]"
                        >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${size / 2}px` }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={size}
                                height={size}
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-[#FA8A8A]"
                            >
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                        </div>
                    </div>
                );
            } else {
                // Empty star
                stars.push(
                    <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width={size}
                        height={size}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#FA8A8A]"
                    >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                );
            }
        }
        return <div className="flex items-center gap-0.5">{stars}</div>;
    };

    const ratingDistribution = [
        { stars: 5, count: 85, percentage: 76 },
        { stars: 4, count: 17, percentage: 15 },
        { stars: 3, count: 8, percentage: 7 },
        { stars: 2, count: 1, percentage: 1 },
        { stars: 1, count: 0, percentage: 0 }
    ];

    return (
        <section className="w-full bg-white py-8 md:py-14">
            <div className="max-w-[1340px] mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="mb-4">
                    <div className="text-center mx-auto max-w-[800px] flex flex-col gap-4">
                        <div className="flex justify-center">
                            <img
                                alt="worldwide-review"
                                className="max-w-[200px]"
                                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_Score.png?v=1752349211"
                            />
                        </div>
                        <h2 className="text-[24px] md:text-[32px] leading-[1.3em] px-4 text-black">
                            Real Women, Real Results: 93,000+ Transformations
                        </h2>
                        <div className="text-base md:text-lg leading-[1.3em] text-black">
                            All reviews verified from actual paying customers
                        </div>
                    </div>
                </div>

                {/* Review Summary */}
                <div className="px-4 py-6">
                    <div className="flex flex-col lg:gap-6 gap-3 pb-2">
                        <h2 className="text-center text-2xl text-black">Customer Reviews</h2>

                        <div className="flex max-lg:flex-col gap-6 justify-center items-stretch">
                            {/* Left: Average Rating */}
                            <div className="flex justify-center items-center lg:w-[30%]">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        {renderHalfStars(4.68, 17)}
                                        <p className="text-black/75" style={{ fontFamily: 'var(--font-montserrat)' }}>4.68 out of 5</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-black/75" style={{ fontFamily: 'var(--font-montserrat)' }}>Based on 110 reviews</p>
                                        <div>
                                            <img
                                                alt="check-icon"
                                                className="w-4 h-4"
                                                src="https://judgeme-public-images.imgix.net/judgeme/logos/verified-checkmark.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Middle: Rating Distribution */}
                            <div className="border-x border-[#1084741a] flex justify-center lg:w-[40%]">
                                <div className="flex flex-col gap-4 px-6">
                                    <div className="flex flex-col gap-1">
                                        {ratingDistribution.map((item) => (
                                            <div key={item.stars} className="flex items-center gap-6 cursor-pointer hover:opacity-60">
                                                {renderStars(item.stars, false, 14)}
                                                <div className="bg-[#e0e0e080] h-3.5 md:w-[140px] w-[126px]">
                                                    <div
                                                        className="h-full bg-[#FA8A8A]"
                                                        style={{ width: `${item.percentage}%` }}
                                                    />
                                                </div>
                                                <p className="text-[80%] text-[#7b7b7b]">{item.count}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Write Review Button */}
                            <div className="flex items-center justify-center lg:w-[30%]">
                                <button
                                    onClick={handleToggleForm}
                                    className="bg-[#FA8A8A] text-white leading-[17px] border-2 border-[#FA8A8A] hover:opacity-60 font-extrabold text-base py-2.5 px-5 cursor-pointer sm:max-w-[240px] w-full"
                                >
                                    {showReviewForm ? 'Cancel review' : 'Write a review'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Review Form */}
                    {showReviewForm && (
                        <div
                            className="py-6 border-t border-[#fa8a8a1a] overflow-hidden"
                            style={{
                                animation: isClosing ? 'slideUp 0.7s ease-out forwards' : 'slideDown 0.7s ease-out forwards'
                            }}
                        >
                            <style jsx>{`
                                @keyframes slideDown {
                                    from {
                                        max-height: 0;
                                        opacity: 0;
                                    }
                                    to {
                                        max-height: 2000px;
                                        opacity: 1;
                                    }
                                }
                                @keyframes slideUp {
                                    from {
                                        max-height: 2000px;
                                        opacity: 1;
                                    }
                                    to {
                                        max-height: 0;
                                        opacity: 0;
                                    }
                                }
                            `}</style>
                            <form className="max-w-[600px] mx-auto space-y-2 px-4 flex flex-col gap-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                <h3 className="text-center text-2xl font-bold text-black">Write a review</h3>

                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center gap-2">
                                        <label className="text-black">Rating</label>
                                        <div className="flex flex-col items-center gap-3">
                                            {renderStars(rating || hoverRating, true, 28)}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <div>
                                        <label htmlFor="content-input" className="cursor-pointer md:text-base text-[15px] text-black">
                                            Review content
                                        </label>
                                    </div>
                                    <textarea
                                        id="content-input"
                                        rows={5}
                                        placeholder="Start writing here..."
                                        className="px-4 py-2 w-full border border-[#e4e4e4] focus:outline-none focus:border-[#FA8A8A] text-sm text-black"
                                    />
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <label className="cursor-pointer md:text-base text-[15px] text-black">Picture/Video (optional)</label>
                                    <div className="border border-[#e4e4e4] w-32 h-32 relative flex items-center justify-center hover:opacity-70 mb-2.5 cursor-pointer">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="4" viewBox="0 0 256 256" className="text-[#7b7b7b]" height="60" width="60" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM88,80h32v64a8,8,0,0,0,16,0V80h32a8,8,0,0,0,5.66-13.66l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,88,80Z"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <label htmlFor="name-input" className="cursor-pointer md:text-base text-[15px] text-center text-black">
                                        Display name (displayed publicly like{' '}
                                        <select className="text-[#FA8A8A] py-2.5 text-sm cursor-pointer hover:opacity-80">
                                            <option value="John Smith">John Smith</option>
                                            <option value="John S.">John S.</option>
                                            <option value="John">John</option>
                                            <option value="J.S">J.S</option>
                                            <option value="Anonymous">Anonymous</option>
                                        </select>{' '}
                                        )
                                    </label>
                                    <input
                                        id="name-input"
                                        placeholder="Display name"
                                        className="px-4 py-2 w-full border border-[#e4e4e4] focus:outline-none focus:border-[#FA8A8A] text-sm text-black"
                                    />
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <label htmlFor="email-input" className="cursor-pointer md:text-base text-[15px] text-black">
                                        Email address
                                    </label>
                                    <input
                                        id="email-input"
                                        placeholder="Your email address"
                                        className="px-4 py-2 w-full border border-[#e4e4e4] focus:outline-none focus:border-[#FA8A8A] text-sm text-black"
                                    />
                                </div>

                                <div className="text-center text-base text-black" style={{ fontFamily: 'var(--font-nunito)' }}>
                                    How we use your data: We'll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me's{' '}
                                    <a href="https://judge.me/terms" target="_blank" className="underline text-blue-800">terms</a>,{' '}
                                    <a href="https://judge.me/privacy" target="_blank" className="underline text-blue-800">privacy</a> and{' '}
                                    <a href="https://judge.me/content-policy" target="_blank" className="underline text-blue-800">content</a> policies.
                                </div>

                                <div className="flex items-center gap-3 justify-center mb-6">
                                    <button
                                        type="button"
                                        onClick={() => setShowReviewForm(false)}
                                        className="border-2 border-[#FA8A8A] font-bold text-base leading-[17px] py-2.5 px-5 cursor-pointer text-[#FA8A8A] hover:text-[#FA8A8A] bg-white hover:bg-white hover:opacity-80"
                                    >
                                        Cancel review
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-[#FA8A8A] text-white border-2 border-[#FA8A8A] hover:bg-[#FA8A8A] font-bold text-base leading-[17px] py-2.5 px-5 cursor-pointer hover:opacity-80"
                                    >
                                        Submit Review
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>

                {/* Diamond Badge */}
                <div className="border-t-2 border-[#fa8a8a1a] py-6 flex justify-center w-full">
                    <div className="flex flex-col text-center">
                        <div className="pt-4">
                            <img
                                alt="authenticity-badge"
                                className="max-w-full w-20 h-20"
                                src="https://judgeme-public-images.imgix.net/judgeme/medals-v2-2025-rebranding/auth/diamond.svg?auto=format"
                            />
                        </div>
                        <p className="font-bold text-xs pl-2 text-[#4c8eda]">100.0</p>
                    </div>
                </div>

                {/* Sort Dropdown */}
                <div className="border-t border-[#fa8a8a1a]">
                    <div className="py-2">
                        <select className="text-[#FA8A8A] py-2.5 text-sm cursor-pointer hover:opacity-80">
                            <option value="most-recent">Most Recent</option>
                            <option value="highest-rating">Highest Rating</option>
                            <option value="lowest-rating">Lowest Rating</option>
                            <option value="only-pictures">Only Pictures</option>
                            <option value="pictures-first">Pictures First</option>
                            <option value="videos-first">Videos First</option>
                            <option value="most-helpful">Most Helpful</option>
                        </select>
                    </div>

                    {/* Reviews List */}
                    <div className="space-y-4">
                        {currentReviews.map((review) => (
                            <div key={review.id} className="py-4 border-t border-[#fa8a8a1a] w-full flex flex-col gap-2.5">
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between">
                                        {renderStars(review.rating, false, 16)}
                                        <p className="text-[#7b7b7b] text-[80%]" style={{ fontFamily: 'var(--font-montserrat)' }}>{review.date}</p>
                                    </div>

                                    <div className="flex gap-2 items-start">
                                        <div className="relative flex items-center justify-center w-9 h-9 bg-[#e0e0e080]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FA8A8A]">
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                            {review.verified && (
                                                <div className="absolute flex items-center justify-center bottom-0 right-0 w-3 h-3 bg-[#FA8A8A]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                                        <path d="M20 6 9 17l-5-5"></path>
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-[#FA8A8A] md:text-base text-[15px]">{review.author}</p>
                                            {review.verified && (
                                                <div className="bg-[#FA8A8A] text-white text-xs tracking-wider py-0.5 px-1.5">
                                                    Verified
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="text-black">{review.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center py-4 border-t border-[#fa8a8a1a] gap-1">
                        {/* First page button */}
                        <button
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                            className="w-6 h-6 p-1 text-[#FA8A8A] hover:opacity-80 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Go to first page"
                        >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" className="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9142 12L18.7071 7.20712L17.2929 5.79291L11.0858 12L17.2929 18.2071L18.7071 16.7929L13.9142 12ZM7 18V6.00001H9V18H7Z"></path>
                            </svg>
                        </button>

                        {/* Previous page button */}
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="w-6 h-6 p-1 text-[#FA8A8A] hover:opacity-80 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Go to previous page"
                        >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" className="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                            </svg>
                        </button>

                        {/* Page numbers */}
                        <div className="flex items-center gap-2">
                            {[...Array(Math.min(5, totalPages))].map((_, i) => {
                                const pageNum = i + 1;
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={`py-1 px-2 md:text-base text-[15px] ${currentPage === pageNum
                                            ? 'text-3xl font-bold text-[#7b7b7b] cursor-default'
                                            : 'text-[#FA8A8A] hover:opacity-80 cursor-pointer'
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Next page button */}
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                            className="w-6 h-6 p-1 text-[#FA8A8A] hover:opacity-80 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Go to next page"
                        >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" className="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                            </svg>
                        </button>

                        {/* Last page button */}
                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            disabled={currentPage === totalPages}
                            className="w-6 h-6 p-1 text-[#FA8A8A] hover:opacity-80 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Go to last page"
                        >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" className="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0858 12L5.29291 16.7929L6.70712 18.2071L12.9142 12L6.70712 5.79291L5.29291 7.20712L10.0858 12ZM17 6.00002L17 18H15L15 6.00002L17 6.00002Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
