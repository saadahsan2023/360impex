'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import OurProducts from '@/components/OurProducts';
export default function RockSaltLamps() {
    useEffect(() => {
        const styles = `
            @keyframes fadeInDown {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
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
            <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(126,217,87,0.1)_0%,_transparent_70%)] animate-gradient-shift" />
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="animate-fade-in-up space-y-6">
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[#7ed957]">
                            Rock Salt Lamps
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300">
                            Handcrafted Elegance from the Himalayas
                        </p>
                        <p className="text-md sm:text-lg text-gray-400 leading-relaxed">
                            At <span className="text-white font-semibold">360 Impex</span>, we specialize in crafting premium Rock Salt Lamps, sourced from the Himalayan rock salt mines. Each lamp is handcrafted to bring natural beauty and wellness to your space, acting as a natural air purifier.
                        </p>
                        <div className="mt-6">
                            <Link href="/request-a-quote">
                                <button
                                    className="bg-[#7ed957] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#6ec84a] transition duration-300"
                                    aria-label="Request a quote for Rock Salt Lamps"
                                >
                                    Request a Quote
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-full max-w-md h-[320px] sm:h-[400px]">
                            <Image
                                src="/lamp.jpg"
                                alt="Rock Salt Lamps"
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
                        { title: 'Handcrafted Design', desc: 'Each lamp is uniquely crafted by skilled artisans.' },
                        { title: 'Natural Air Purifier', desc: 'Releases negative ions to improve air quality.' },
                        { title: 'Globally Certified', desc: 'ISO, HACCP, Halal, and SGS compliant.' }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-[#7ed957] transition-all duration-300">
                            <h3 className="text-xl font-semibold text-[#7ed957] mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-300">{item.desc}</p>
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