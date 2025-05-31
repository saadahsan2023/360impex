// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// export default function AboutUs() {
//     return (
//         <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//             {/* Animated Background with Subtle Gradient Shift */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(126,217,87,0.05)_0%,_rgba(44,62,80,0.1)_70%)] animate-gradient-shift" />
//             <div className="max-w-7xl mx-auto relative z-10">
//                 {/* Enhanced Header */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7 }}
//                     className="relative px-6 md:px-10 py-16 md:py-24 text-center bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] rounded-xl shadow-xl border border-[#7ed957]/20 overflow-hidden"
//                 >
//                     {/* Subtle Background Glow */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#7ed957]/20 to-[#1b263b]/20 blur-2xl -z-10" />

//                     {/* Tagline */}
//                     <motion.p
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7, delay: 0.2 }}
//                         className="text-[#7ed957] uppercase tracking-widest text-sm md:text-base font-semibold mb-4"
//                         style={{ fontFamily: "'Montserrat', sans-serif" }}
//                     >
//                         Connecting Markets, Delivering Excellence
//                     </motion.p>

//                     {/* Main Heading with Gradient Underline */}
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.7, delay: 0.4 }}
//                         className="relative inline-block"
//                     >
//                         <h1
//                             className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6"
//                             style={{ fontFamily: "'Montserrat', sans-serif" }}
//                         >
//                             Where Global Trade Meets Quality<br />{' '}
//                             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7ed957] to-[#a4e67a]">
//                                 360 Impex
//                             </span>
//                         </h1>
//                         {/* Gradient Underline */}
//                         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#7ed957] to-transparent" />
//                     </motion.div>

//                     {/* Shortened Description */}
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7, delay: 0.6 }}
//                         className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg mb-6 leading-relaxed"
//                     >
//                         At <strong>360 Impex</strong>, we connect businesses worldwide with Pakistan's finest exports and reliable import solutions.
//                     </motion.p>

//                     {/* Shortened Services List */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7, delay: 0.8 }}
//                         className="flex flex-col items-center space-y-3 text-left text-gray-200 max-w-md mx-auto"
//                     >
//                         <div className="flex items-start space-x-3">
//                             <span className="mt-1 w-3 h-3 bg-[#7ed957] rounded-full"></span>
//                             <p>Exporting Pakistan premium products globally.</p>
//                         </div>
//                         <div className="flex items-start space-x-3">
//                             <span className="mt-1 w-3 h-3 bg-[#7ed957] rounded-full"></span>
//                             <p>Importing high-quality goods for local needs.</p>
//                         </div>
//                     </motion.div>

//                     {/* Final Line */}
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7, delay: 1.0 }}
//                         className="text-gray-400 mt-8 text-sm md:text-base max-w-xl mx-auto"
//                     >
//                         Trust, reliability, and quality in every trade partnership.
//                     </motion.p>
//                 </motion.div>

//                 {/* Our Story */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                     className="mb-16 bg-gray-800/50 p-8 rounded-lg shadow-lg mt-10"
//                 >
//                     <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//                         Our Story
//                     </h2>
//                     <p className="text-gray-400 text-base">
//                         At 360 Impex, we are driven by a simple yet powerful vision: to transform global trade into a seamless, efficient, and rewarding experience for businesses worldwide. Born from a passion for connecting markets and cultures, we specialize in bridging the gap between Pakistan's rich resources and the global demand for quality products, while also facilitating imports to meet local needs. Though we are a new company, our commitment to innovation, integrity, and excellence ensures that every partnership we build is rooted in trust and mutual growth. Together, let's unlock the limitless potential of global trade.
//                     </p>
//                 </motion.div>

//                 {/* Our Mission & Values */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.4 }}
//                     className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8"
//                 >
//                     {/* Our Mission */}
//                     <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                         <div className="w-12 h-12 bg-[#7ed957] rounded-full flex items-center justify-center mb-4">
//                             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
//                             </svg>
//                         </div>
//                         <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//                             Our Mission
//                         </h3>
//                         <p className="text-gray-400 text-sm">
//                             At 360 Impex, our mission is to bridge global markets by facilitating the exchange of exceptional products and fostering mutually beneficial trade relationships. We aim to empower businesses by providing end-to-end import and export services that drive growth, reduce costs, and ensure timely delivery.
//                         </p>
//                     </div>
//                     {/* Our Values */}
//                     <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                         <div className="w-12 h-12 bg-[#7ed957] rounded-full flex items-center justify-center mb-4">
//                             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-9c-1.657 0-3 .895-3 2s1.343 2 3 2m-3-4c1.11 0 2.08.402 2.599 1M13 16h-1m1-4h-1m1-4h-1m1-4h-1m-4 0H9m1 4H9m1 4H9m1 4H9m-4 0H5m1-4H5m1-4H5m1-4H5" />
//                             </svg>
//                         </div>
//                         <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//                             Our Values
//                         </h3>
//                         <ul className="text-gray-400 text-sm">
//                             <li className="flex items-start mb-2">
//                                 <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-2 mt-2"></span>
//                                 <span><strong>Integrity:</strong> We conduct business with honesty, transparency, and ethical practices.</span>
//                             </li>
//                             <li className="flex items-start mb-2">
//                                 <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-2 mt-2"></span>
//                                 <span><strong>Innovation:</strong> We leverage the latest technology and industry insights to optimize your trade operations.</span>
//                             </li>
//                             <li className="flex items-start mb-2">
//                                 <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-2 mt-2"></span>
//                                 <span><strong>Sustainability:</strong> We are committed to promoting sustainable trade practices that benefit businesses and the environment.</span>
//                             </li>
//                             <li className="flex items-start">
//                                 <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-2 mt-2"></span>
//                                 <span><strong>Partnership:</strong> We believe in building long-term relationships with our clients, suppliers, and partners.</span>
//                             </li>
//                         </ul>
//                     </div>
//                 </motion.div>

//                 {/* Why Choose 360 Impex */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.6 }}
//                     className="mb-16"
//                 >
//                     <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//                         Why Choose 360 Impex?
//                     </h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                         <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                             <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//                                 Comprehensive Trade Solutions
//                             </h3>
//                             <p className="text-gray-400 text-sm">
//                                 We specialize in both imports and exports, offering a one-stop solution for all your international trade needs.
//                             </p>
//                         </div>
//                         <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                             <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//                                 Diverse Product Portfolio
//                             </h3>
//                             <p className="text-gray-400 text-sm">
//                                 From Pink Himalayan salt, fresh fruits, vegetables, rice, and cotton for export to sourcing high-quality imported goods for the Pakistani market, we cater to a wide range of industries.
//                             </p>
//                         </div>
//                         <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                             <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//                                 Quality Assurance
//                             </h3>
//                             <p className="text-gray-400 text-sm">
//                                 We prioritize quality at every step, ensuring that all products meet international standards.
//                             </p>
//                         </div>
//                         <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                             <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//                                 Expert Team
//                             </h3>
//                             <p className="text-gray-400 text-sm">
//                                 Our team of trade professionals brings extensive experience in logistics, customs clearance, and supply chain management.
//                             </p>
//                         </div>
//                         <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                             <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//                                 Customer-Centric Approach
//                             </h3>
//                             <p className="text-gray-400 text-sm">
//                                 We work closely with our clients to understand their unique needs and deliver tailored solutions.
//                             </p>
//                         </div>
//                         <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                             <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//                                 Global Network
//                             </h3>
//                             <p className="text-gray-400 text-sm">
//                                 With a strong network of suppliers, manufacturers, and logistics partners, we connect you to markets across the globe.
//                             </p>
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Our Export Expertise & Import Services */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.8 }}
//                     className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8"
//                 >
//                     {/* Export Expertise */}
//                     <div>
//                         <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//                             Our Export Expertise
//                         </h2>
//                         <p className="text-gray-400 text-base mb-4">
//                             Pakistan is a land of abundant natural resources, and at 360 Impex, we take pride in exporting some of its finest products:
//                         </p>
//                         <ul className="text-gray-400 text-sm">
//                             <li className="flex items-start mb-2">
//                                 <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-2 mt-2"></span>
//                                 <span><strong>Pink Himalayan Salt:</strong> Sourced from the pristine mountains of Pakistan, our pink salt is renowned for its purity and health benefits.</span>
//                             </li>
//                             <li className="flex items-start mb-2">
//                                 <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-2 mt-2"></span>
//                                 <span><strong>Fresh Fruits and Vegetables:</strong> From juicy mangoes to crisp potatoes, we deliver farm-fresh produce to global markets.</span>
//                             </li>
//                             <li className="flex items-start mb-2">
//                                 <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-2 mt-2"></span>
//                                 <span><strong>Basmati Rice:</strong> Known for its aroma and long grains, our Basmati rice is a favorite in kitchens worldwide.</span>
//                             </li>
//                             <li className="flex items-start mb-2">
//                                 <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-2 mt-2"></span>
//                                 <span><strong>Cotton:</strong> Pakistan's high-quality cotton is a cornerstone of the global textile industry.</span>
//                             </li>
//                             <li className="flex items-start">
//                                 <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-2 mt-2"></span>
//                                 <span><strong>And More:</strong> We continuously expand our product range to meet the evolving demands of our clients.</span>
//                             </li>
//                         </ul>
//                     </div>
//                     {/* Import Services */}
//                     <div>
//                         <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//                             Our Import Services
//                         </h2>
//                         <p className="text-gray-400 text-base">
//                             In addition to exports, we specialize in importing high-quality products to meet the growing demands of the Pakistani market. Whether you need raw materials, machinery, or consumer goods, we source the best products from around the world and deliver them to your doorstep.
//                         </p>
//                     </div>
//                 </motion.div>

//                 {/* Join Us */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 1.0 }}
//                     className="text-center"
//                 >
//                     <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//                         Join Us on This Journey
//                     </h2>
//                     <p className="text-gray-400 text-base max-w-2xl mx-auto mb-6">
//                         Whether you're looking to export premium Pakistani products or import high-quality goods, 360 Impex is your trusted partner in global trade. Let's work together to unlock new opportunities and grow your business.
//                     </p>
//                     <Link
//                         href="/contact-us"
//                         className="inline-block bg-[#7ed957] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#6cc44a] transition-all duration-300 shadow-md hover:shadow-xl"
//                         style={{ fontFamily: "'Montserrat', sans-serif" }}
//                     >
//                         Contact Us Today
//                     </Link>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }







'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUs() {
    return (
        <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row items-start justify-between gap-8">
                    <div className="text-left max-w-lg">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            About <span className="text-[#7ed957]">360 Impex</span>
                        </h1>
                        <p className="text-gray-300 text-base sm:text-lg">
                            360 Impex is a leading manufacturer, exporter, and supplier of premium products, committed to delivering high-quality goods worldwide. We blend tradition with innovation to meet global standards.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Image
                            src="/about.png"
                            alt="360 Impex Logo"
                            width={160}
                            height={160}
                            className="w-90 h-90 object-contain"
                        />
                    </div>
                </div>

                {/* Vision, Mission, Values */}
                <div className="relative mb-16">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/texture-dark.png')] opacity-10 rounded-lg" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        <article className="bg-gray-800/80 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <figure className="w-12 h-12 bg-[#7ed957] rounded-full flex items-center justify-center mb-4" aria-label="Vision Icon">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </figure>
                            <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Vision</h3>
                            <p className="text-gray-300 text-sm">
                                To become a global leader in exporting the finest 360 Impex products, renowned for unparalleled quality, environmental stewardship, and exceptional customer experiences.
                            </p>
                        </article>
                        <article className="bg-gray-800/80 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <figure className="w-12 h-12 bg-[#7ed957] rounded-full flex items-center justify-center mb-4" aria-label="Mission Icon">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </figure>
                            <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Mission</h3>
                            <p className="text-gray-300 text-sm">
                                To deliver the highest quality 360 Impex products from Pakistan, promoting health, wellness, and sustainability with authentic, natural offerings and unmatched purity.
                            </p>
                        </article>
                        <article className="bg-gray-800/80 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <figure className="w-12 h-12 bg-[#7ed957] rounded-full flex items-center justify-center mb-4" aria-label="Values Icon">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-9c-1.657 0-3 .895-3 2s1.343 2 3 2m-3-4c1.11 0 2.08.402 2.599 1M13 16h-1m1-4h-1m1-4h-1m1-4h-1m-4 0H9m1 4H9m1 4H9m1 4H9m-4 0H5m1-4H5m1-4H5m1-4H5" />
                                </svg>
                            </figure>
                            <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Values</h3>
                            <p className="text-gray-300 text-sm">
                                Our values are rooted in quality, authenticity, and sustainability. As manufacturers and exporters, we prioritize customer satisfaction, ethical practices, and environmental care for health and well-being.
                            </p>
                        </article>
                    </div>
                </div>

                {/* What We Are Providing */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>What We Are Providing</h2>
                    <div className="bg-gray-800/60 border-2 border-[#7ed957]/30 p-8 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3 text-[#7ed957]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Core Services</h3>
                            <div className="flex items-start mb-2">
                                <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                                <span className="text-gray-300">End-to-End Solutions</span>
                            </div>
                            <div className="flex items-start mb-2">
                                <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                                <span className="text-gray-300">Customized Designing</span>
                            </div>
                            <div className="flex items-start mb-2">
                                <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                                <span className="text-gray-300">Global Reach</span>
                            </div>
                            <div className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                                <span className="text-gray-300">Private Labeling</span>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3 text-[#7ed957]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Operational Excellence</h3>
                            <div className="flex items-start mb-2">
                                <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                                <span className="text-gray-300">Flexible Delivery Terms</span>
                            </div>
                            <div className="flex items-start mb-2">
                                <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                                <span className="text-gray-300">Secure Payment Options</span>
                            </div>
                            <div className="flex items-start mb-2">
                                <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                                <span className="text-gray-300">Competitive Pricing</span>
                            </div>
                            <div className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                                <span className="text-gray-300">Unwavering Quality</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-[#7ed957]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Customer Commitment</h3>
                            <div className="flex items-start mb-2">
                                <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                                <span className="text-gray-300">Timely Delivery</span>
                            </div>
                            <div className="flex items-start mb-2">
                                <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                                <span className="text-gray-300">Dedicated Support</span>
                            </div>
                            <div className="flex items-start mb-2">
                                <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                                <span className="text-gray-300">Innovation</span>
                            </div>
                            <div className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-[#7ed957] rounded-full mr-3 mt-2"></span>
                                <span className="text-gray-300">Regulatory Compliance</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Exporting Countries */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Exporting Countries</h2>
                    <div className="flex justify-center gap-8 flex-wrap">
                        <span className="text-[#7ed957] font-medium bg-gray-800/50 px-4 py-2 rounded-full">USA</span>
                        <span className="text-[#7ed957] font-medium bg-gray-800/50 px-4 py-2 rounded-full">China</span>
                        <span className="text-[#7ed957] font-medium bg-gray-800/50 px-4 py-2 rounded-full">Japan</span>
                        <span className="text-[#7ed957] font-medium bg-gray-800/50 px-4 py-2 rounded-full">Germany</span>
                        <span className="text-[#7ed957] font-medium bg-gray-800/50 px-4 py-2 rounded-full">Indonesia</span>
                    </div>
                </div>

                {/* Registered With */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Registered With</h2>
                    <div className="flex justify-center gap-8 flex-wrap">
                        <span className="text-gray-300 font-medium bg-gray-800/50 px-4 py-2 rounded-full">FBR</span>
                        <span className="text-gray-300 font-medium bg-gray-800/50 px-4 py-2 rounded-full">PSW</span>
                        <span className="text-gray-300 font-medium bg-gray-800/50 px-4 py-2 rounded-full">SMEDA</span>
                        <span className="text-gray-300 font-medium bg-gray-800/50 px-4 py-2 rounded-full">Customs</span>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <Link href="/contact-us" className="inline-block bg-[#7ed957] text-white py-3 px-8 rounded-lg hover:bg-[#6bc246] transition-colors duration-300 font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}