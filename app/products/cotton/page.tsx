'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import Section from '@/components/Section';
import OurProducts from '@/components/OurProducts';

export default function Cotton() {
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
                <title>Cotton | 360 Impex</title>
                <meta name="description" content="Explore premium Cotton varieties from 360 Impex, ideal for textile industries." />
            </Head>
            <section className="bg-[#141C2C] text-white min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="animate-fade-in-up space-y-6">
                        <h1
                            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[#7ed957]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Cotton
                        </h1>
                        <p
                            className="text-lg sm:text-xl text-gray-300"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Nature's Versatile Fiber
                        </p>
                        <p
                            className="text-lg sm:text-xl text-gray-400 leading-relaxed"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            At <span className="text-white font-semibold">360 Impex</span>, we supply premium cotton varieties, grown for their strength and softness. Perfect for textile industries and export markets worldwide.
                        </p>
                        <div className="mt-6">
                            <Link href="/request-a-quote">
                                <button
                                    className="bg-[#7ed957] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#6ec84a] transition duration-300"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    aria-label="Request a quote for Cotton"
                                >
                                    Request a Quote
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-full max-w-[400px] aspect-square mx-auto">
                            <Image
                                src="/test1.png"
                                alt="Himalayan Pink Salt"
                                fill
                                className="object-contain rounded-2xl shadow-2xl border-4 border-[#7ed95730] bg-white"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Sub-Products Section */}
                <div className="relative z-10 mt-16 sm:mt-24 max-w-6xl mx-auto">
                    <h2
                        className="text-2xl sm:text-3xl font-bold text-[#7ed957] mb-12 text-center"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Our Cotton Products
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {[
                            { name: 'Desi Cotton (Gossypium Arboreum)', path: '/products/cotton/desi-cotton-gossypium-arboreum', description: 'A robust and eco-friendly cotton variety, ideal for sustainable textile production.', image: '/cotton/Desi-Cotton-Gossypium-Arboreum.jpg' },
                            { name: 'American Cotton (Gossypium Hirsutum)', path: '/products/cotton/american-cotton-gossypium-hirsutum', description: 'Premium quality cotton known for its softness and strength, perfect for high-end fabrics.', image: '/cotton/American-Cotton-Gossypium-Hirsutum.avif' }
                        ].map((product, idx) => (
                            <Link key={idx} href={product.path}>
                                <div className="bg-[#2a3b4f] p-6 rounded-xl border border-green card hover-scale">
                                    <div className="relative w-full h-65 mb-4">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <h3
                                        className="text-xl font-semibold text-white mb-2"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        {product.name}
                                    </h3>
                                    <p
                                        className="text-sm text-gray-300 mb-4"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        {product.description}
                                    </p>
                                    <button
                                        className="bg-[#7ed957] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#6ec84a] transition duration-300"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        Explore Now
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Section />
            <HowItWorks />
            <WhyChooseUs />
            <OurProducts />
            <Testimonials />
        </>
    );
}