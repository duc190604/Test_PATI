export function CommitmentSection() {
    const commitments = [
        {
            image: "//trysculptique.com/cdn/shop/files/ship-min.png?v=1758713222",
            title: "Free Shipping from USA",
            description: "On all orders"
        },
        {
            image: "//trysculptique.com/cdn/shop/files/support-min.png?v=1758713216",
            title: "Naturally Supports Your Body",
            description: "Promotes healthy immune cell functions"
        },
        {
            image: "//trysculptique.com/cdn/shop/files/natural-min.png?v=1758713216",
            title: "100% Natural Ingredients",
            description: "8 active, natural ingredients"
        },
        {
            image: "//trysculptique.com/cdn/shop/files/60-min.png?v=1758713216",
            title: "Try it Risk Free for 60 Days",
            description: "60-day money-back guarantee"
        }
    ];

    return (
        <section className="w-full bg-[#f3eee0] py-8 mt-8">
            <div className="max-w-[1340px] mx-auto px-4 md:px-12">
                <div className="grid sm:grid-cols-4 grid-cols-2 gap-6">
                    {commitments.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <div>
                                <img
                                    alt={item.title}
                                    className="max-w-[40px] h-10"
                                    src={item.image}
                                />
                            </div>
                            <div className="flex flex-col gap-2 text-center w-full items-center">
                                <p className="font-semibold max-sm:max-w-[150px] text-black">
                                    {item.title}
                                </p>
                                <p className="text-black">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
