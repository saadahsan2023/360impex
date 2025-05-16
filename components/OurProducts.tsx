'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GetAQuote() {
    return (
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated Background with Subtle Gradient Shift */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(126,217,87,0.05)_0%,_rgba(44,62,80,0.1)_70%)] animate-gradient-shift" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Text Content (Left) */}
                    <div className="text-left space-y-6">
                        <h2
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Get a Quote
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg max-w-md">
                            If you need our Product Catalog, Want Pricing, Have Questions about Shipping, or anything else, reach out to us. We'll respond as soon as we can.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/request-a-quote"
                                className="inline-flex items-center justify-center bg-[#7ed957] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#6cc44a] transition-all duration-300 shadow-md hover:shadow-lg"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                Get a Quote
                            </Link>
                            <Link
                                href="/CalMeeting"
                                className="inline-flex items-center justify-center bg-[#7ed957] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#6cc44a] transition-all duration-300 shadow-md hover:shadow-lg"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Map Image (Right) */}
                    <div className="relative w-full h-64 sm:h-80 lg:h-[400px]">
                        <Image
                            src="/image/map.avif"
                            alt="World Map"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl shadow-2xl"
                        />
                        {/* Placeholder Pins (Adjust coordinates based on your map) */}
                        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#7ed957] rounded-full animate-pulse"></div>
                        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#7ed957] rounded-full animate-pulse"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#7ed957] rounded-full animate-pulse"></div>
                        <div className="absolute bottom-1/5 right-1/5 w-4 h-4 bg-[#7ed957] rounded-full animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#7ed957] rounded-full animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-[#7ed957] rounded-full animate-pulse"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}