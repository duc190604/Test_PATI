'use client';

export function ExpertAdviceSection() {
    return (
        <section className="w-full bg-[#f7f7f7] md:bg-white md:py-14">
            <div className=" max-w-[1340px] mx-auto px-4 md:px-12 max-sm:px-0">
                <div className=" md:bg-[#f7f7f7] grid sm:grid-cols-2 sm:rounded-xl max-sm:py-8 max-sm:px-4">
                    {/* Content Side */}
                    <div className="sm:p-8 p-4 max-sm:bg-white flex flex-col gap-4 max-sm:rounded-b-xl">
                        <p className="text-gray-500">July 4th, 2025</p>

                        <div className="text-center mx-auto max-w-[800px] flex flex-col gap-4">
                            <h2 className="text-2xl sm:text-[2rem] leading-[1.3em] text-left text-black">
                                Expert Advice from Dr. Emily Chen of a Premier New York Skin Clinic
                            </h2>
                        </div>

                        <div className="flex flex-col gap-3 text-lg sm:leading-[22px] leading-6 text-black">
                            <p>
                                "Your nutrition plays a powerful role in your appearance. If your body is missing key vitamins and nutrients, it can't process fat and upkeep healthy connective tissue, which is why unprocessed fat flows up and starts pushing up against your skin, forming bumps you know as cellulite.
                            </p>
                            <p>
                                SmoothSkin by Sculptique™ contains ingredients that are scientifically proven to enhance microcirculation, boost lymphatic drainage, and reduce inflammation, which restores your tissue and breaks down the fat cells in your skin."
                            </p>
                        </div>

                        <div className="mt-2">
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

                    {/* Image Side */}
                    <div className="w-full max-sm:order-first max-sm:bg-white max-sm:rounded-t-xl max-sm:pb-2">
                        <img
                            alt="expert-picture"
                            loading="lazy"
                            className="object-cover w-full h-full rounded-xl"
                            src="https://trysculptique.com/cdn/shop/files/greendeskt-min.png?v=1758713213"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
