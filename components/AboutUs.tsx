'use client';
import React from 'react';
import Link from 'next/link';

export default function AboutUs() {
    return (
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated Background with Subtle Gradient Shift */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(126,217,87,0.05)_0%,_rgba(44,62,80,0.1)_70%)] animate-gradient-shift" />
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        About <span className="text-[#7ed957]">360 Impex</span>
                    </h1>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                        360 Impex is a leading manufacturer, exporter, and supplier of premium products, committed to delivering high-quality goods worldwide. We blend tradition with innovation to meet global standards.
                    </p>
                </div>

                {/* Vision, Mission, Values */}
                <div className="relative mb-16">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/texture-dark.png')] opacity-10" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-12 h-12 bg-[#7ed957] rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Vision</h3>
                            <p className="text-gray-400 text-sm">
                                To become a global leader in exporting the finest 360 Impex products, renowned for unparalleled quality, environmental stewardship, and exceptional customer experiences.
                            </p>
                        </div>
                        <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-12 h-12 bg-[#7ed957] rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Mission</h3>
                            <p className="text-gray-400 text-sm">
                                To deliver the highest quality 360 Impex products from Pakistan, promoting health, wellness, and sustainability with authentic, natural offerings and unmatched purity.
                            </p>
                        </div>
                        <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-12 h-12 bg-[#7ed957] rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-9c-1.657 0-3 .895-3 2s1.343 2 3 2m-3-4c1.11 0 2.08.402 2.599 1M13 16h-1m1-4h-1m1-4h-1m1-4h-1m-4 0H9m1 4H9m1 4H9m1 4H9m-4 0H5m1-4H5m1-4H5m1-4H5" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Values</h3>
                            <p className="text-gray-400 text-sm">
                                Our values are rooted in quality, authenticity, and sustainability. As manufacturers and exporters, we prioritize customer satisfaction, ethical practices, and environmental care for health and well-being.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What We Are Providing */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>What We Are Providing</h2>
                    <div className="bg-gray-800/50 border-2 border-[#7ed957]/20 p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                            <span className="text-gray-400">End-to-End Solutions</span>
                        </div>
                        <div className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                            <span className="text-gray-400">Customized Designing</span>
                        </div>
                        <div className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                            <span className="text-gray-400">Global Reach</span>
                        </div>
                        <div className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                            <span className="text-gray-400">Private Labeling</span>
                        </div>
                        <div className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                            <span className="text-gray-400">Flexible Delivery Terms</span>
                        </div>
                        <div className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                            <span className="text-gray-400">Secure Payment Options</span>
                        </div>
                        <div className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                            <span className="text-gray-400">Competitive Pricing</span>
                        </div>
                        <div className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                            <span className="text-gray-400">Unwavering Quality</span>
                        </div>
                        <div className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                            <span className="text-gray-400">Timely Delivery</span>
                        </div>
                        <div className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                            <span className="text-gray-400">Dedicated Support</span>
                        </div>
                        <div className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                            <span className="text-gray-400">Innovation</span>
                        </div>
                        <div className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                            <span className="text-gray-400">Regulatory Compliance</span>
                        </div>
                    </div>
                </div>

                {/* Exporting Countries */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Exporting Countries</h2>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <span className="text-[#7ed957] font-medium">USA</span>
                        <span className="text-[#7ed957] font-medium">China</span>
                        <span className="text-[#7ed957] font-medium">Japan</span>
                        <span className="text-[#7ed957] font-medium">Germany</span>
                        <span className="text-[#7ed957] font-medium">Indonesia</span>
                    </div>
                </div>

                {/* Registered With */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Registered With</h2>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <span className="text-gray-400">FBR</span>
                        <span className="text-gray-400">PSW</span>
                        <span className="text-gray-400">SMEDA</span>
                        <span className="text-gray-400">Customs</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

