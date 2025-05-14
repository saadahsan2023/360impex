'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: 'Exceptional quality and purity! The Himalayan pink salt we received was top-notch, and our customers absolutely love it. Highly recommended!',
        author: 'Sarah L.',
        location: 'UK',
        rating: 5,
    },
    {
        quote: 'Reliable supply chain, premium salt quality, and great communication every step of the way. Truly a trusted partner!',
        author: 'Michael R.',
        location: 'Germany',
        rating: 5,
    },
    {
        quote: 'Fast delivery and excellent customer service. The product exceeded our expectations—will order again!',
        author: 'Priya S.',
        location: 'India',
        rating: 5,
    },
    {
        quote: 'Outstanding value and consistency. Perfect for our business needs—highly satisfied!',
        author: 'John D.',
        location: 'USA',
        rating: 5,
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatic slide change every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
        }, 5000); // Change every 5 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // Fixed renderStars function with explicit JSX
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={i < rating ? 'text-[#7ed957]' : 'text-gray-400'}
                    style={{ fontSize: '1.25rem' }}
                >
                    ★
                </span>
            );
        }
        return <div className="flex">{stars}</div>;
    };

    // Handle manual navigation
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
    };

    return (
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated Background with Subtle Gradient Shift */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(126,217,87,0.05)_0%,_rgba(44,62,80,0.1)_70%)] animate-gradient-shift" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Section Heading with Primary Color Underline */}
                    <h2
                        className="text-3xl sm:text-4xl font-bold mb-10 relative"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Trusted by 3+ million business owners worldwide
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#7ed957] rounded-full"></span>
                    </h2>

                    {/* Testimonial Slider Container */}
                    <div className="relative overflow-hidden">
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-[-40px] lg:left-[-60px] top-1/2 transform -translate-y-1/2 text-[#7ed957] text-3xl font-bold hover:text-[#6cc44a] transition-colors duration-300 z-10"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-[-40px] lg:right-[-60px] top-1/2 transform -translate-y-1/2 text-[#7ed957] text-3xl font-bold hover:text-[#6cc44a] transition-colors duration-300 z-10"
                        >
                            &gt;
                        </button>

                        {/* Testimonial Cards Wrapper */}
                        <motion.div
                            animate={{ x: `-${currentIndex * 100}%` }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="flex w-full"
                        >
                            {[...Array(Math.ceil(testimonials.length / 2))].map((_, slideIndex) => (
                                <div key={slideIndex} className="flex flex-col sm:flex-row gap-6 min-w-full">
                                    {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-100/10 p-6 rounded-lg shadow-md w-full sm:w-1/2 max-w-md border border-[#7ed957]/30 hover:shadow-lg transition-shadow duration-300"
                                        >
                                            <div className="flex items-center mb-4">{renderStars(testimonial.rating)}</div>
                                            <p className="text-gray-400 text-sm mb-4">" {testimonial.quote} "</p>
                                            <p
                                                className="text-white font-semibold text-sm"
                                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                            >
                                                {testimonial.author}, {testimonial.location}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}