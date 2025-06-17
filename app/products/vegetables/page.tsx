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

export default function Vegetables() {
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
                <title>Vegetables | 360 Impex</title>
                <meta name="description" content="Explore a variety of fresh Vegetables from 360 Impex, perfect for global markets." />
            </Head>
            <section className="bg-[#141C2C] text-white min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="animate-fade-in-up space-y-6">
                        <h1
                            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[#7ed957]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Vegetables
                        </h1>
                        <p
                            className="text-lg sm:text-xl text-gray-300"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Fresh from the Fields
                        </p>
                        <p
                            className="text-lg sm:text-xl text-gray-400 leading-relaxed"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            At <span className="text-white font-semibold">360 Impex</span>, we offer a wide range of fresh vegetables, sourced and packed to meet global standards. Perfect for culinary use and export markets.
                        </p>
                        <div className="mt-6">
                            <Link href="/request-a-quote">
                                <button
                                    className="bg-[#7ed957] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#6ec84a] transition duration-300"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    aria-label="Request a quote for Vegetables"
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
                                src="/test4.png"
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
                        Our Vegetable Products
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: 'Onions', path: '/products/vegetables/onions', description: 'Crisp and flavorful onions, ideal for global cuisines.', image: '/vegetables/vegis4.jpg' },
                            { name: 'Garlic', path: '/products/vegetables/garlic', description: 'Aromatic garlic, perfect for culinary and health uses.', image: '/vegetables/vegis5.jpg' },
                            { name: 'Ginger', path: '/products/vegetables/ginger', description: 'Fresh and zesty ginger, great for cooking and wellness.', image: '/vegetables/vegis3.jpg' },
                            { name: 'Dry Chilies', path: '/products/vegetables/dry-chilies', description: 'Spicy dried chilies for bold flavors in dishes.', image: '/vegetables/vegis2.jpg' },
                            { name: 'Bitter Gourd (Karela)', path: '/products/vegetables/bitter-gourd-karela', description: 'Nutritious bitter gourd, popular in Asian cuisines.', image: '/vegetables/vegis6.jpg' },
                            { name: 'Potato', path: '/products/vegetables/potato', description: 'Versatile potatoes, perfect for a variety of dishes.', image: '/vegetables/vegis1.jpg' }
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