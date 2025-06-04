'use client';
import React from 'react';
import Link from 'next/link';

const steps = [
    {
        icon: (
           <img src="/icon/pickaxe.svg" alt="Trade Icon" className="w-12 h-12" />

        ),
        title: 'Hand-Mined',
        description: 'At 360 Impex, we hand-mine Himalayan Pink Salt to maintain its purity and quality.',
    },
    {
        icon: (
         <img src="/icon/pottery-colored.png" alt="Trade Icon" className="w-12 h-12" />
        ),
        title: 'Artisan-Crafted',
        description: 'Our artisans craft each product into unique shapes with care and tradition.',
    },
    {
        icon: (
          <img src="/icon/artwork.svg" alt="Trade Icon" className="w-12 h-12" />
        ),
        title: 'Artworks Designed',
        description: 'Thoughtful design work ensures our products are both functional and beautiful.',
    },
    {
        icon: (
          <img src="/icon/delivered.svg" alt="Trade Icon" className="w-12 h-12" />
        ),
        title: 'Delivered',
        description: 'Products are carefully packed at our facility and shipped to your doorstep.',
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-[#141C2C] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated Background with Subtle Gradient Shift (Matching HeroSection) */}
            <div className="absolute inset-0 bg-[#141C2C] animate-gradient-shift" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <Link
                        href="/how-it-works"
                        className="text-[#7ed957] text-sm font-medium mb-2 inline-block hover:underline"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Explore
                    </Link>
                    <h2
                        className="text-3xl sm:text-4xl font-extrabold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        How It Works
                    </h2>
                    <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
                        At 360 Impex, we hand-mine Himalayan Pink Salt and craft our products with care, ensuring every piece is delivered to you with the utmost quality and precision.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="text-center p-6 bg-gray-800/30 rounded-lg transition-all duration-300 hover:bg-gray-800/50 hover:shadow-lg"
                        >
                            <div className="mb-4">{step.icon}</div>
                            <h3
                                className="text-lg sm:text-xl font-semibold mb-2"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-sm sm:text-base">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}