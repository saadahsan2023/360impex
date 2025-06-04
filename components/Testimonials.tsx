'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        "quote": "The Himalayan pink salt is of exceptional quality! Our clients love the purity and vibrant color. Will definitely reorder.",
        "author": "Emma W.",
        "location": "Australia",
        "rating": 4.8
    },
    {
        "quote": "360 Impex delivered premium rice varieties on time. Their customer support is outstanding and made the process seamless.",
        "author": "Lucas M.",
        "location": "Canada",
        "rating": 4.9
    },
    {
        "quote": "Fantastic service and high-quality vegetables. The packaging was excellent, ensuring freshness upon arrival.",
        "author": "Sophie K.",
        "location": "UK",
        "rating": 5
    },
    {
        "quote": "The cotton we sourced was top-grade and perfect for our textile needs. Reliable supplier with great communication.",
        "author": "Noah T.",
        "location": "USA",
        "rating": 4.7
    },
    {
        "quote": "Really impressed with the quick delivery and consistent quality of the Himalayan salt products. Highly recommended!",
        "author": "Hana S.",
        "location": "Japan",
        "rating": 4.5
    },
    {
        "quote": "Their basmati rice is aromatic and of superior quality. It’s become a staple in our restaurant’s menu!",
        "author": "Liam B.",
        "location": "Germany",
        "rating": 5
    },
    {
        "quote": "Great experience working with 360 Impex. The fruits were fresh, well-packed, and arrived on schedule.",
        "author": "Isabella R.",
        "location": "Brazil",
        "rating": 4.6
    },
    {
        "quote": "The salt lamps we ordered are stunning and well-crafted. Our customers can’t stop raving about them!",
        "author": "Ethan J.",
        "location": "South Africa",
        "rating": 4.9
    },
    {
        "quote": "Dependable supplier with excellent product quality. The vegetables were fresh and met all our expectations.",
        "author": "Ava L.",
        "location": "New Zealand",
        "rating": 4.8
    },
    {
        "quote": "The team at 360 Impex is professional and responsive. Their Himalayan salt is the best we’ve sourced so far.",
        "author": "Oliver P.",
        "location": "France",
        "rating": 5
    },
    {
        "quote": "Superb quality cotton and timely delivery. It’s been a pleasure doing business with them!",
        "author": "Mia C.",
        "location": "Mexico",
        "rating": 4.7
    },
    {
        "quote": "The rice varieties we ordered were top-notch, and the customer service was exceptional throughout the process.",
        "author": "James H.",
        "location": "Singapore",
        "rating": 4.5
    },
    {
        "quote": "Fast shipping and premium Himalayan pink salt. Perfect for our wellness products. Highly satisfied!",
        "author": "Chloe N.",
        "location": "Netherlands",
        "rating": 4.9
    },
    {
        "quote": "The fruits were fresh, juicy, and well-packaged. 360 Impex is now our go-to supplier for quality produce.",
        "author": "Alexander G.",
        "location": "Sweden",
        "rating": 4.6
    },
    {
        "quote": "Outstanding service and high-quality products. The Himalayan salt exceeded our expectations in every way!",
        "author": "Lily D.",
        "location": "UAE",
        "rating": 5
    }
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

    // Updated renderStars function to handle decimal ratings and display rating value
    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating); // Full stars
        const hasHalfStar = rating % 1 >= 0.5; // Check for half star

        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={`full-${i}`} className="text-[#7ed957]" style={{ fontSize: '1.25rem' }}>
                    ★
                </span>
            );
        }

        // Add half star if applicable
        if (hasHalfStar) {
            stars.push(
                <span key="half" className="text-[#7ed957]" style={{ fontSize: '1.25rem' }}>
                    ✯
                </span>
            );
        }

        // Add empty stars to complete 5 stars
        const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(
                <span key={`empty-${i}`} className="text-gray-400" style={{ fontSize: '1.25rem' }}>
                    ☆
                </span>
            );
        }

        return (
            <div className="flex items-center gap-2">
                <div className="flex">{stars}</div>
                <span className="text-gray-300 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {rating.toFixed(1)}/5
                </span>
            </div>
        );
    };

    // Handle manual navigation
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
    };

    return (
        <section className="bg-[#141C2C] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated Background with Subtle Gradient Shift */}
            <div className="absolute inset-0 bg-[#141C2C] animate-gradient-shift" />

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
                        Trusted by 2+ million business owners worldwide
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