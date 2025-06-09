'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const heroSlides = [
    {
        label: 'Himalayan Pink Salt',
        image: '/pinksalt.png',
        description: 'Premium Himalayan Pink Salt for culinary, wellness, and decor needs.',
        href: '/request-a-quote',
        path: '/products/himalayan-pink',
    },
    {
        label: 'Vegetables',
        image: '/vegis.png',
        description: 'Fresh, organic vegetables sourced from top farms worldwide.',
        href: '/request-a-quote',
        path: '/products/vegetables',
    },
    {
        label: 'Fruits',
        image: '/fruits.png',
        description: 'Juicy fruits packed with natural sweetness and nutrition.',
        href: '/request-a-quote',
        path: '/products/Fruits',
    },
    {
        label: 'Rice',
        image: '/rice.png',
        description: 'High-quality rice varieties, including Basmati and Sella.',
        href: '/request-a-quote',
        path: '/products/rice',
    },
    {
        label: 'Cotton',
        image: '/cotton.png',
        description: 'Sustainable cotton for textiles and industrial applications.',
        href: '/request-a-quote',
        path: '/products/cotton',
    },
];

export default function HeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const currentSlide = heroSlides[index];

    const textVariants = {
        initial: { y: 30, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
        exit: { y: -30, opacity: 0, transition: { duration: 0.6 } },
    };

    const imageVariants = {
        initial: { scale: 0.95, opacity: 0, x: 50 },
        animate: {
            scale: 1,
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
        },
        exit: { scale: 0.95, opacity: 0, x: -50, transition: { duration: 0.6 } },
    };

    const dotVariants = {
        active: { scale: 1.3, backgroundColor: '#7ed957', transition: { type: 'spring', stiffness: 400, damping: 15 } },
        inactive: { scale: 1, backgroundColor: '#D1D5DB', transition: { type: 'spring', stiffness: 400, damping: 15 } },
    };

    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
            {/* Subtle animated background overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(126,217,87,0.15)_0%,_rgba(17,24,39,0.3)_70%)] opacity-50 animate-pulse" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 relative z-10">
                <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h[600px] flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {/* Image - Right on desktop, top on mobile */}
                            <motion.div
                                variants={imageVariants}
                                className="relative flex justify-end lg:order-last"
                            >
                                <div className="relative w-full max-w-md">
                                    <Image
                                        src={currentSlide.image}
                                        alt={currentSlide.label}
                                        width={500}
                                        height={333}
                                        className="w-full rounded-2xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
                                        priority={index === 0}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl" />
                                </div>
                            </motion.div>

                            {/* Text Content and Buttons - Left on all screens */}
                            <motion.div
                                variants={textVariants}
                                className="space-y-6 text-left"
                                role="region"
                                aria-label="Hero content"
                            >
                                <h1
                                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    Discover <span className="text-[#7ed957]">{currentSlide.label}</span>
                                </h1>
                                <p className="text-gray-200 text-lg sm:text-xl lg:text-2xl max-w-lg leading-relaxed">
                                    {currentSlide.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                                    <Link
                                        href={currentSlide.href}
                                        className="inline-flex items-center justify-center bg-[#7ed957] text-gray-900 font-semibold text-lg py-3 px-8 rounded-full hover:bg-[#6cc44a] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:ring-offset-2 focus:ring-offset-gray-900"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        Place Your Order
                                    </Link>
                                    <Link
                                        href={currentSlide.path}
                                        className="inline-flex items-center justify-center text-white font-medium text-lg py-3 px-8 rounded-full border border-[#7ed957] hover:bg-[#7ed957]/10 hover:text-[#7ed957] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:ring-offset-2 focus:ring-offset-gray-900"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        Explore Products
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-8 lg:mt-12 space-x-3" style={{ zIndex: 20 }}>
                    {heroSlides.map((_, idx) => (
                        <motion.button
                            key={idx}
                            onClick={() => setIndex(idx)}
                            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#7ed957] focus:ring-offset-2 focus:ring-offset-gray-900"
                            variants={dotVariants}
                            animate={idx === index ? 'active' : 'inactive'}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}