'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import OurProducts from '@/components/OurProducts';

export default function DesiCotton() {
    useEffect(() => {
        const styles = `
            @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
            .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
            .hover-scale { transition: transform 0.3s ease, box-shadow 0.3s ease; }
            .hover-scale:hover { transform: scale(1.03); box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); }
            .border-green { border: 1px solid #7ed957; }
            .card { transition: all 0.3s ease; }
            .card:hover { background-color: #2a3b4f; }
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
                <title>Desi Cotton (Gossypium Arboreum) | 360 Impex</title>
                <meta name="description" content="High-quality Desi Cotton (Gossypium Arboreum) from 360 Impex, ideal for textile industries." />
            </Head>
            <section className="bg-[#141C2C] text-white min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="animate-fade-in-up space-y-6">
                        <h1
                            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[#7ed957]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Desi Cotton (Gossypium Arboreum)
                        </h1>
                        <p
                            className="text-lg sm:text-xl text-gray-300"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Traditional Fiber of Strength
                        </p>
                        <p
                            className="text-lg sm:text-xl text-gray-400 leading-relaxed"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            At <span className="text-white font-semibold">360 Impex</span>, we offer premium Desi Cotton (Gossypium Arboreum), a native variety known for its durability and adaptability. Ideal for sustainable textiles, it's a top choice for global markets.
                        </p>
                        <div className="mt-6">
                            <Link href="/request-a-quote">
                                <button
                                    className="bg-[#7ed957] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#6ec84a] transition duration-300"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    aria-label="Request a quote for Desi Cotton (Gossypium Arboreum)"
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
                                src="/cotton/Desi-Cotton-Gossypium-Arboreum.jpg"
                                alt="Desi Cotton (Gossypium Arboreum)"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-2xl shadow-2xl border-4 border-[#7ed95730]"
                                priority={true}
                            />
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="relative z-10 mt-16 sm:mt-24 max-w-6xl mx-auto">
                    <h2
                        className="text-2xl sm:text-3xl font-bold text-[#7ed957] mb-12 text-center"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Features of Desi Cotton
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Sustainable', description: 'Resistant to local pests and diseases, reducing the need for chemical inputs.' },
                            { title: 'High Durability', description: 'Ideal for coarse fabrics, offering strength and longevity.' },
                            { title: 'Export Quality', description: 'Carefully packaged to meet global textile industry standards.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#2a3b4f] p-6 rounded-xl border border-green card hover-scale text-center">
                                <h3
                                    className="text-xl font-semibold text-white mb-2"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className="text-sm text-gray-300 mb-4"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    {item.description}
                                </p>
                                {/* <button
                                    className="bg-[#7ed957] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#6ec84a] transition duration-300"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    Learn More
                                </button> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <WhyChooseUs />
            <OurProducts />
            <Testimonials />
        </>
    );
}