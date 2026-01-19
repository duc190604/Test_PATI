export function MissionSection() {
    return (
        <section className="w-full bg-white py-8 md:py-14">
            <div className="max-w-[1340px] mx-auto px-4 md:px-12">
                <div className="flex items-center max-sm:flex-col">
                    {/* Left Content */}
                    <div className="sm:px-8 flex flex-col gap-3">
                        <div className="text-center mx-auto max-w-[800px] flex flex-col gap-4">
                            <h2 className="text-2xl sm:text-[2rem] leading-[1.3em] sm:text-left mb-1 mt-4 text-black">
                                We're On A Mission To Help 100,000,000 Women Visibly, Naturally Get Rid Of Bloating…And Feel Like Themselves Again
                            </h2>
                        </div>
                        <p className="text-lg sm:leading-5.5 leading-6 max-sm:text-center text-black">
                            Here's where we're at right now:
                        </p>
                        {/* Desktop Usage Rate */}
                        <div className="max-sm:hidden">
                            <img
                                alt="usage-rate"
                                loading="lazy"
                                className="w-full"
                                src="https://trysculptique.com/cdn/shop/files/numbdeskt-min_png.png?v=1760942458"
                            />
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="sm:w-[80%]">
                        <img
                            alt="product"
                            loading="lazy"
                            className="w-full overflow-hidden h-full object-cover rounded-xl max-sm:hidden"
                            src="https://trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777"
                        />
                        <img
                            alt="product-small"
                            loading="lazy"
                            className="w-full sm:hidden"
                            src="https://trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777"
                        />
                    </div>

                    {/* Mobile Usage Rate */}
                    <div className="sm:hidden mb-1">
                        <img
                            alt="usage-rate-small"
                            loading="lazy"
                            className="w-full"
                            src="https://trysculptique.com/cdn/shop/files/numbmob-min_png.png?v=1760942458"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
