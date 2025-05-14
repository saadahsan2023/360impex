'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const heroSlides = [
    {
        label: 'Himalayan Pink',
        image: '/image/img2.png',
        description: 'Premium Himalayan Pink Salt for culinary, wellness, and decor needs.',
        href: '/products/himalayan-pink',
    },
    {
        label: 'Vegetables',
        image: '/image/img2.png',
        description: 'Fresh, organic vegetables sourced from top farms worldwide.',
        href: '/products/vegetables',
    },
    {
        label: 'Fruits',
        image: '/image/img2.png',
        description: 'Juicy fruits packed with natural sweetness and nutrition.',
        href: '/products/fruits',
    },
    {
        label: 'Rice',
        image: '/image/img2.png',
        description: 'High-quality rice varieties, including Basmati and Sella.',
        href: '/products/rice',
    },
    {
        label: 'Cotton',
        image: '/image/img2.png',
        description: 'Sustainable cotton for textiles and industrial applications.',
        href: '/products/cotton',
    },
];

export default function HeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
        }, 4500); // Reduced to 4.5 seconds for faster slide changes
        return () => clearInterval(interval);
    }, []);

    const currentSlide = heroSlides[index];

    const textVariants = {
        enter: { x: 20, opacity: 0 },
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
        },
        exit: { x: -20, opacity: 0, transition: { duration: 1, ease: [0.4, 0, 0.2, 1] } },
    };

    const imageVariants = {
        enter: { x: 20, opacity: 0, scale: 0.98 },
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 },
        },
        exit: {
            x: -20,
            opacity: 0,
            scale: 0.98,
            transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
        },
    };

    const dotVariants = {
        active: { scale: 1.5, backgroundColor: '#7ed957', transition: { type: 'spring', stiffness: 300, damping: 20 } },
        inactive: { scale: 1, backgroundColor: '#9CA3AF', transition: { type: 'spring', stiffness: 300, damping: 20 } },
    };

    return (
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated Background with Subtle Gradient Shift */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(126,217,87,0.05)_0%,_rgba(44,62,80,0.1)_70%)] animate-gradient-shift" />
            {/* Removed wave texture, added optional mountain-like gradient */}

            <div className="max-w-7xl mx-auto relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10"
                        initial="enter"
                        animate="center"
                        exit="exit"
                    >
                        {/* Text Content (Left) */}
                        <motion.div
                            className="w-full lg:w-1/2 text-left order-last lg:order-first"
                            variants={textVariants}
                        >
                            <h1
                                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                Discover <span className="text-[#7ed957]">{currentSlide.label}</span>
                            </h1>
                            <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 max-w-md">
                                {currentSlide.description}
                            </p>
                            <div className="flex space-x-4">
                                <Link
                                    href={currentSlide.href}
                                    className="inline-block bg-[#7ed957] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#6cc44a] transition-all duration-300 shadow-md hover:shadow-xl"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    Shop Now
                                </Link>
                                <Link
                                    href={currentSlide.href}
                                    className="inline-block text-white font-medium py-2 px-4 rounded-md border border-transparent hover:border-[#7ed957] hover:text-[#7ed957] hover:bg-gray-800/50 transition-all duration-300"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>

                        {/* Image (Right) */}
                        <motion.div
                            className="w-full lg:w-1/2 relative order-first lg:order-last"
                            variants={imageVariants}
                        >
                            <div className="relative">
                                <Image
                                    src={currentSlide.image}
                                    alt={currentSlide.label}
                                    width={450}
                                    height={300}
                                    className="w-full max-w-md mx-auto rounded-xl shadow-2xl object-cover"
                                />
                                <div />
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
                {/* className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" */}
                {/* Navigation Dots */}
                <div className="flex justify-center mt-8 space-x-2">
                    {heroSlides.map((_, idx) => (
                        <motion.button
                            key={idx}
                            onClick={() => setIndex(idx)}
                            className="w-3 h-3 rounded-full"
                            variants={dotVariants}
                            animate={idx === index ? 'active' : 'inactive'}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}