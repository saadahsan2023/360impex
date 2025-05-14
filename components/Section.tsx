'use client';
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface Stat {
    value: number | string;
    label: string;
}

const stats: Stat[] = [
    { value: 50, label: 'Exporting Countries' },
    { value: 200, label: 'Serving Clients' },
    { value: 250, label: 'Production Capacity Per Day (M.Ton)' },
    { value: 300, label: 'Work Force' },
];

export default function FeaturedProducts() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once when the section comes into view
        threshold: 0.3, // Trigger when 30% of the section is visible
    });

    return (
        <section
            ref={ref}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Animated Background with Subtle Gradient Shift (Matching HowItWorks/HeroSection) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(126,217,87,0.05)_0%,_rgba(44,62,80,0.1)_70%)] animate-gradient-shift" />

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                {/* Manufacturer Tag */}
                <span className="text-sm font-medium text-gray-400 uppercase mb-2 inline-block">
                    Manufacturer
                </span>
                <div className="border-b-2 border-[#7ed957] w-16 mx-auto mb-4"></div>

                {/* Main Heading */}
                <h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    Ultimate Partner for Brands, Foodservice & Wholesale Businesses
                </h2>

                {/* Subtext */}
                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10">
                    With satisfied clients in over 80+ countries, you can trust us to meet your needs.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-gray-800/30 rounded-lg transition-all duration-300 hover:bg-gray-800/50 hover:shadow-lg hover:scale-105"
                        >
                            <h3
                                className="text-4xl font-bold text-[#7ed957] mb-2"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                {inView ? (
                                    <CountUp
                                        start={0}
                                        end={typeof stat.value === 'number' ? stat.value : parseFloat(stat.value)}
                                        duration={2.5}
                                        suffix={typeof stat.value === 'string' && stat.value.includes('M.Ton') ? ' M.Ton' : '+'}
                                    />
                                ) : (
                                    '0'
                                )}
                            </h3>
                            <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}