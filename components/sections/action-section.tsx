'use client';

export function ActionSection() {
    return (
        <section className="w-full bg-[#f3eee0] py-8 md:py-14">
            <div className="max-w-[1340px] mx-auto px-4 md:px-12">
                <div className="grid sm:grid-cols-2 sm:gap-15 gap-3">
                    {/* Left Content */}
                    <div>
                        <div className="h-full flex flex-col justify-center sm:gap-6 gap-4">
                            {/* Trustpilot Review */}
                            <div className="flex max-sm:justify-center w-full">
                                <img
                                    alt="worldwide-review"
                                    className="max-w-[350px] max-sm:hidden"
                                    loading="lazy"
                                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review.png?v=1752480694"
                                />
                                <img
                                    alt="worldwide-review-small"
                                    className="max-w-[250px] sm:hidden"
                                    loading="lazy"
                                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_2.png?v=1752485383"
                                />
                            </div>

                            {/* Heading */}
                            <div className="text-center mx-auto max-w-[800px] flex flex-col gap-4">
                                <h2 className="text-2xl sm:text-[2rem] leading-[1.3em] text-left text-black">
                                    Stop Masking Symptoms. Start Restoring Root Cause.
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col gap-3 text-lg sm:leading-5.5 leading-6 text-black">
                                <p>
                                    You deserve to feel like yourself again. To wake up without puffiness. To see your ankles. To look in the mirror and recognize the vibrant woman staring back. To have energy for the people you love.
                                </p>
                                <p>
                                    You deserve a solution that actually works. Not temporary relief. Not symptom masking. Complete lymphatic restoration.
                                </p>
                            </div>

                            {/* Desktop CTA */}
                            <div className="max-sm:hidden max-w-[490px] mt-4">
                                <div className="text-center font-normal flex flex-col justify-center items-center gap-4">
                                    <button
                                        onClick={() => window.location.href = 'https://pay.trysculptique.com/lymphatic/checkout'}
                                        className="text-white bg-black hover:opacity-70 sm:py-4 sm:px-20 p-4 sm:text-lg text-base sm:inline-block block transition duration-200 leading-[1.3em] rounded-sm hover:cursor-pointer max-sm:w-full font-normal self-start"
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

                    {/* Right Image */}
                    <div className="flex items-center justify-center">
                        <div className="w-full max-sm:rounded-t-xl">
                            <img
                                alt="expert-picture"
                                loading="lazy"
                                className="w-full h-full rounded-xl sm:pb-2"
                                src="https://trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928"
                            />
                        </div>
                    </div>

                    {/* Mobile CTA */}
                    <div className="sm:hidden mt-4">
                        <div className="text-center font-normal flex flex-col justify-center items-center gap-4">
                            <button
                                onClick={() => window.location.href = 'https://pay.trysculptique.com/lymphatic/checkout'}
                                className="text-white bg-black hover:opacity-70 sm:py-4 sm:px-20 p-4 sm:text-lg text-base sm:inline-block block transition duration-200 leading-[1.3em] rounded-sm hover:cursor-pointer max-sm:w-full font-normal self-start"
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
