'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Assured Quality',
        description: 'Skilled workers and state-of-the-art processing units have enabled us to implement international Quality Standards for providing premium Himalayan Salt products.',
        icon: (
            <svg className="w-12 h-12 text-[#7ed957]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
        ),
    },
    {
        title: 'Minimum Lead Time',
        description: 'One of our key expertise is the timely shipments we promise our customers every time. We focus on enhancing customer satisfaction by decreasing the lead time.',
        icon: (
            <svg className="w-12 h-12 text-[#7ed957]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        ),
    },
    {
        title: 'Private Labeling',
        description: 'We offer GFSI integrated private labeling services to combine our Himalayan Salt Products under Customers’ Brand names for further industrial or retail applications.',
        icon: (
            <svg className="w-12 h-12 text-[#7ed957]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
            </svg>
        ),
    },
];

const additionalIcons = [
    { name: 'Global Reach', icon: '🌍' },
    { name: 'Customer Care', icon: '🤝' },
    { name: 'Innovation', icon: '💡' },
    { name: 'Language', icon: '🌐' },
    { name: 'Ingenuity', icon: '🔧' },
    { name: 'Innovation', icon: '🚀' },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated Background with Subtle Gradient Shift */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(126,217,87,0.05)_0%,_rgba(44,62,80,0.1)_70%)] animate-gradient-shift" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Section Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Why Choose Us
                    </h2>
                    <div className="w-16 h-0.5 bg-[#7ed957] mx-auto mb-10"></div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: idx * 0.2, ease: 'easeOut' }}
                                viewport={{ once: true }}
                                className="bg-gray-800/30 p-6 rounded-lg text-left transition-all duration-300 hover:bg-gray-800/50 hover:shadow-lg"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Icons with Wave Background */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wave.png')] opacity-10" />
                        <div className="relative flex justify-center gap-6 flex-wrap">
                            {additionalIcons.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                    className="text-2xl"
                                >
                                    {item.icon}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}