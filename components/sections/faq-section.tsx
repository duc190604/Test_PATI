'use client';

import { useState } from 'react';

export function FAQSection() {
    const [openIndices, setOpenIndices] = useState<number[]>([]);

    const faqs = [
        {
            question: "How is this different from lymphatic drops I saw on TikTok?",
            answer: "Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling. Sculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more."
        },
        {
            question: "Why didn't my diet changes work?",
            answer: "Your diet only addressed what goes INTO your system (inflammation from food). It didn't fix your body's broken ability to drain what's already there. That's why you could eat perfectly clean and still wake up bloated—the backed-up lymphatic waste was still pooling in your tissues."
        },
        {
            question: "How long until I see results?",
            answer: "Most women notice something within the first week—feeling lighter, less bloated, morning puffiness fading faster. Visible changes happen by weeks 2-3. Transformation becomes undeniable by weeks 4-6. But true restoration takes time—we recommend 90 days for complete results."
        },
        {
            question: "Is this safe? Any side effects?",
            answer: "Sculptique contains 100% natural botanical ingredients used safely for centuries. The most common experience is increased urination in the first few days (expected—you're flushing excess fluid). Serious side effects are extremely rare. However, if you have pre-existing conditions or take prescription medications, consult your healthcare provider first."
        },
        {
            question: "Can I take this with other supplements?",
            answer: "Yes. Sculptique works synergistically with most supplements. However, if you're taking blood thinners, diuretics, thyroid medication, or immune-suppressing drugs, check with your healthcare provider first."
        },
        {
            question: "How do I use it?",
            answer: "Take 2 capsules daily with water. Any time of day (though mornings are ideal). With or without food. Just be consistent."
        },
        {
            question: "What if it doesn't work for me?",
            answer: "You have 60 full days to try it. If you don't feel lighter, less bloated, more energized—send it back. Even if you've taken every capsule. We'll refund your purchase immediately. You only keep Sculptique if it works for YOU."
        },
        {
            question: "Where is this manufactured?",
            answer: "Sculptique is manufactured in the USA at an FDA-registered, GMP-certified facility. We use Infrared Spectroscopy testing, heavy metal testing, and third-party quality control. Every batch is tested to ensure therapeutic doses with no contaminants."
        },
        {
            question: "Why isn't this in stores?",
            answer: "Two reasons: Quality control (we oversee the entire process from sourcing to testing) and price (retail markup would make it cost at least double). By selling direct, we maintain the highest quality while keeping the price affordable."
        },
        {
            question: "Is this vegan/gluten-free?",
            answer: "Yes. 100% vegan, gluten-free, sugar-free, no artificial ingredients."
        }
    ];

    const toggleAccordion = (index: number) => {
        if (openIndices.includes(index)) {
            setOpenIndices(openIndices.filter(i => i !== index));
        } else {
            setOpenIndices([...openIndices, index]);
        }
    };

    return (
        <section className="w-full bg-white py-8 md:py-14">
            <div className="max-w-[1340px] mx-auto px-4 md:px-12">
                <div className="flex flex-col gap-4">
                    {/* Header */}
                    <div className="text-center mx-auto max-w-[800px] flex flex-col gap-4">
                        <h2 className="text-2xl sm:text-[2rem] leading-[1.3em] mt-4 text-black">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    {/* Accordion */}
                    <div className="sm:max-w-[824px] mx-auto w-full">
                        <div className="flex flex-col w-full bg-linear-to-b from-white to-[#f3eee0] sm:p-8 p-4 rounded-xl">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    onClick={() => toggleAccordion(index)}
                                    className={`py-4 sm:py-5 sm:px-6 cursor-pointer border-b border-white`}
                                >
                                    <div className="w-full flex items-center justify-between gap-3">
                                        <p className="text-lg leading-[1.3em] text-black">
                                            {faq.question}
                                        </p>
                                        <div className="shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                className={`w-4 h-4 transition-transform duration-200 ${openIndices.includes(index) ? 'rotate-180' : ''
                                                    }`}
                                            >
                                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div
                                        className="grid transition-all duration-700 ease-in-out overflow-hidden"
                                        style={{
                                            gridTemplateRows: openIndices.includes(index) ? '1fr' : '0fr'
                                        }}
                                    >
                                        <div className="min-h-0">
                                            <div className="mt-4 text-base text-black">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-2">
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
