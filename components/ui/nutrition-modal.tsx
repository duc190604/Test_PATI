'use client';

import { useEffect } from 'react';

interface NutritionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function NutritionModal({ isOpen, onClose }: NutritionModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const benefits = [
        'Made & produced in the USA',
        '100% Natural Ingredients',
        '60-Day Money-Back Guarantee',
        'Free Shipping'
    ];

    return (
        <div
            className="fixed inset-0 bg-black/75 flex items-center justify-center z-100 p-1"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl p-4 w-full max-w-[420px] max-h-[90vh] overflow-y-auto relative shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                onClick={(e) => e.stopPropagation()}
                style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#c1c1c1 #f1f1f1'
                }}
            >
                <button
                    className="ml-auto border -mt-2 -mr-2 border-red-600 flex items-center justify-center rounded-full cursor-pointer"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <img
                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand.png?v=1752069152"
                        alt="Close"
                        className="w-[24px] h-[24px] rotate-45"
                    />
                </button>

                <h2 className="text-[28px] text-center mb-4 -mt-4 text-[#1a1a1a] leading-tight tracking-[-0.5px]">
                    Nutritional Information
                </h2>

                <img
                    className="w-full h-auto rounded-[14px] mb-4 block"
                    src="//trysculptique.com/cdn/shop/files/ingredients-min.png?v=1758713223"
                    alt="Nutritional Information"
                />

                <button
                    className="w-full bg-black hover:bg-[#1a1a1a] text-white text-base p-5 rounded-[10px] mb-3 transition-all duration-200 tracking-[0.2px] hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                    Try Lymphatic Drainage Risk-Free
                </button>

                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-1">
                            <div className="flex items-center justify-center">
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                                    alt="Check"
                                    className="w-4 h-4 object-contain"
                                />
                            </div>
                            <p className="text-[12px] text-black font-normal m-0 whitespace-nowrap">
                                {benefit}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                div::-webkit-scrollbar {
                    width: 6px;
                }
                div::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                div::-webkit-scrollbar-thumb {
                    background: #c1c1c1;
                    border-radius: 10px;
                }
                div::-webkit-scrollbar-thumb:hover {
                    background: #a8a8a8;
                }
            `}</style>
        </div>
    );
}
