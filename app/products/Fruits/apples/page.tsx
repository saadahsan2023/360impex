'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import OurProducts from '@/components/OurProducts';

export default function Apples() {
    useEffect(() => {
        const styles = `
            @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
            .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
            @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
            .animate-gradient-shift { background-size: 200% 200%; animation: gradientShift 10s ease infinite; }
            .hover-scale { transition: transform 0.3s ease; }
            .hover-scale:hover { transform: scale(1.03); }
            .border-[linear-gradient(to_right,#7ed957,#7ed957,#7ed957)] { border-image: linear-gradient(to right, #7ed957, #7ed957, #7ed957) 1; }
        `;
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
        return () => {
            if (document.head.contains(styleSheet)) {
                document.head.removeChild(styleSheet);
            }
        };
    }, []);

    return (
        <>
            <Head>
                <title>Apples | 360 Impex</title>
                <meta name="description" content="Crisp Apples from 360 Impex, fresh and ready for export." />
            </Head>
            <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(126,217,87,0.1)_0%,_transparent_70%)] animate-gradient-shift" />
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="animate-fade-in-up space-y-6">
                        <h1
                            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[#7ed957]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Apples
                        </h1>
                        <p
                            className="text-lg sm:text-xl text-gray-300"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Nature's Crisp Delight
                        </p>
                        <p
                            className="text-lg sm:text-xl text-gray-400 leading-relaxed"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            At <span className="text-white font-semibold">360 Impex</span>, we provide fresh, crisp apples, sourced from top orchards. Packed with flavor and nutrition, our apples are perfect for export and local consumption.
                        </p>
                        <div className="mt-6">
                            <Link href="/request-a-quote">
                                <button
                                    className="bg-[#7ed957] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#6ec84a] transition duration-300"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    aria-label="Request a quote for Apples"
                                >
                                    Request a Quote
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-full max-w-md h-[320px] sm:h-[400px] max-h-[400px]">
                            <Image
                                src="/image/apples.jpg"
                                alt="Apples"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-2xl shadow-2xl border-4 border-[#7ed95730]"
                                priority={true}
                            />
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="relative z-10 mt-16 sm:mt-24 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    {[
                        { title: 'Crisp Texture', desc: 'Harvested at peak freshness.' },
                        { title: 'Nutrient-Packed', desc: 'Rich in vitamins and fiber.' },
                        { title: 'Export Ready', desc: 'Packaged for global distribution.' }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-[#7ed957] transition-all duration-300">
                            <h3
                                className="text-xl font-semibold text-[#7ed957] mb-2"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                {item.title}
                            </h3>
                            <p
                                className="text-sm text-gray-300"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <WhyChooseUs />
            <OurProducts />
            <Testimonials />
        </>
    );
}