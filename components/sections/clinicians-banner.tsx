'use client';

import { useState } from 'react';

export function CliniciansBanner() {
    const [isMinimized, setIsMinimized] = useState(false);

    const toggle = () => {
        setIsMinimized(!isMinimized);
    };

    const scrollToTestimonials = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log('Scroll to testimonials');
    };

    const openFrontrowModal = () => {
        console.log('Open Frontrow modal');
    };

    if (isMinimized) return null;

    return (
        <div className="clinicians-banner">
            <div className="banner-content">
                {/* Left side - Logo and Title */}
                <div className="banner-left">
                    <span className="leaf-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="35" viewBox="0 0 17 35" fill="black">
                            <path d="M2.60396 10.0782C2.63019 12.7275 5.0681 14.8472 5.0681 14.8472C5.0681 14.8472 7.46457 12.6717 7.43993 10.0222C7.41325 7.3697 4.97398 5.25178 4.97398 5.25178C4.97398 5.25178 2.57932 7.42863 2.60396 10.0782ZM1.34556 19.1722C2.78927 21.3977 5.99278 21.9007 5.99278 21.9007C5.99278 21.9007 6.85625 18.7951 5.41254 16.5696C3.96883 14.3441 0.763495 13.8397 0.763495 13.8397C0.763495 13.8397 -0.0997442 16.9469 1.34556 19.1722ZM3.82901 27.3622C6.16621 28.6381 9.23028 27.5709 9.23028 27.5709C9.23028 27.5709 8.50337 24.4335 6.16618 23.1576C3.82898 21.8817 0.764911 22.9489 0.764911 22.9489C0.764911 22.9489 1.49182 26.0862 3.82901 27.3622ZM10.5368 33.3638C13.0903 34.1327 15.868 32.4611 15.868 32.4611C15.868 32.4611 14.504 29.5425 11.9502 28.772C9.39665 28.0031 6.62082 29.6761 6.62082 29.6761C6.62082 29.6761 7.98323 32.5949 10.5368 33.3638ZM9.02056 3.29033C7.3448 5.35644 7.8659 8.53241 7.8659 8.53241C7.8659 8.53241 11.1079 8.36114 12.7836 6.29503C14.4594 4.22891 13.9381 1.05136 13.9381 1.05136C13.9381 1.05136 10.6963 1.22421 9.02056 3.29033Z" stroke="#212121" strokeLinecap="round" />
                        </svg>
                    </span>
                    <p className="banner-title text-black">Clinicians&apos;<br />Choice</p>
                    <span className="leaf-icon h-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="35" viewBox="0 0 17 35" fill="black">
                            <path d="M14.1756 10.0782C14.1494 12.7275 11.7114 14.8472 11.7114 14.8472C11.7114 14.8472 9.31497 12.6717 9.33961 10.0222C9.36629 7.3697 11.8056 5.25178 11.8056 5.25178C11.8056 5.25178 14.2002 7.42863 14.1756 10.0782ZM15.434 19.1722C13.9903 21.3977 10.7868 21.9007 10.7868 21.9007C10.7868 21.9007 9.92329 18.7951 11.367 16.5696C12.8107 14.3441 16.016 13.8397 16.016 13.8397C16.016 13.8397 16.8793 16.9469 15.434 19.1722ZM12.9505 27.3622C10.6133 28.6381 7.54926 27.5709 7.54926 27.5709C7.54926 27.5709 8.27617 24.4335 10.6134 23.1576C12.9506 21.8817 16.0146 22.9489 16.0146 22.9489C16.0146 22.9489 15.2877 26.0862 12.9505 27.3622ZM6.24277 33.3638C3.68923 34.1327 0.911591 32.4611 0.911591 32.4611C0.911591 32.4611 2.27559 29.5425 4.82935 28.772C7.38289 28.0031 10.1587 29.6761 10.1587 29.6761C10.1587 29.6761 8.79631 32.5949 6.24277 33.3638ZM7.75898 3.29033C9.43474 5.35644 8.91365 8.53241 8.91365 8.53241C8.91365 8.53241 5.67166 8.36114 3.9959 6.29503C2.32014 4.22891 2.84146 1.05136 2.84146 1.05136C2.84146 1.05136 6.08322 1.22421 7.75898 3.29033Z" stroke="#212121" strokeLinecap="round" />
                        </svg>
                    </span>
                </div>

                {/* Right side - Info and CTA */}
                <div className="banner-right">
                    <p className="banner-text">
                        <span className="font-bold">373 clinicians</span> share this on{' '}
                        <span className="italic">FrontrowMD</span> without compensation.{' '}
                        <button
                            className="learn-more-link"
                            onClick={openFrontrowModal}
                        >
                            Learn more
                        </button>
                    </p>
                    <div className="banner-cta">
                        <span className="clinician-images">
                            <img
                                src="https://assets.app.thefrontrowhealth.com/jijjnma3wz2ktevmvpuoewdnubm0"
                                alt="Dr. Kimberly Rogers, MD"
                            />
                            <img
                                src="https://assets.app.thefrontrowhealth.com/j3dpo0lkq5u6etn5fezqeizarel4"
                                alt="Ageless Aesthetics & Beauty Bar"
                            />
                            <img
                                src="https://assets.app.thefrontrowhealth.com/pa8nliuewz7t7g0dmxjawwf0kr5a"
                                alt="Dr. Green"
                            />
                        </span>
                        <button
                            className="testimonial-link"
                            onClick={scrollToTestimonials}
                        >
                            Read their reviews
                        </button>
                    </div>
                </div>
            </div>

            <button
                className="close-btn"
                onClick={toggle}
                aria-label="Close banner"
            >
                ×
            </button>

            <style jsx>{`
                .clinicians-banner {
                    position: relative;
                    padding: 16px 40px 16px 20px;
                    margin: -20px 0;
                    width: 100%;
                    max-width: 450px;
                }

                .banner-content {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .banner-left {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-shrink: 0;
                }

                .leaf-icon {
                    display: flex;
                    align-items: center;
                }

                .leaf-icon svg {
                    width: 16px;
                    height: auto;
                }

                .banner-title {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 21px;
                    margin: 0;
                    text-align: center;
                    
                }

                .banner-right {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .banner-text {
                    font-size: 14px;
                    line-height: 1.4;
                    margin: 0;
                    color: #333;
                }

                .font-bold {
                    font-weight: 700;
                }

                .italic {
                    font-style: italic;
                }

                .learn-more-link {
                    background: none;
                    border: none;
                    color: #000;
                    text-decoration: underline;
                    cursor: pointer;
                    padding: 0;
                    font-size: 14px;
                    display: inline;
                }

                .banner-cta {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .clinician-images {
                    display: flex;
                    align-items: center;
                }

                .clinician-images img {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    object-fit: cover;
                    background-color: #eee;
                    border: 2px solid white;
                }

                .clinician-images img:nth-of-type(2),
                .clinician-images img:nth-of-type(3) {
                    margin-left: -8px;
                }

                .testimonial-link {
                    background: none;
                    border: none;
                    color: #000;
                    text-decoration: underline;
                    cursor: pointer;
                    padding: 0;
                    font-size: 14px;
                }

                .close-btn {
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    background: none;
                    border: none;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    font-size: 20px;
                    color: #666;
                    line-height: 1;
                }

                .close-btn:hover {
                    color: #000;
                }

                @media (max-width: 768px) {
                    .banner-content {
                        flex-direction: column;
                        gap: 12px;
                        align-items: flex-start;
                    }

                    .banner-left {
                        align-self: center;
                    }
                }
            `}</style>
        </div>
    );
}
