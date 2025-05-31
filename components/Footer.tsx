'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const footerNav = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Request a Quote', href: '/request-a-quote' },
    { label: 'Privacy', href: '/privacy' },
];

const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com/360impex', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com/360impex', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com/360impex', label: 'Instagram' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/360impex', label: 'LinkedIn' },
    { icon: FaYoutube, href: 'https://youtube.com/@360impex', label: 'YouTube' },
];

const popularProducts = [
    { label: 'Himalayan Pink', href: '/products/himalayan-pink' },
    { label: 'Vegetables', href: '/products/vegetables' },
    { label: 'Fruits', href: '/products/fruits' },
    { label: 'Rice', href: '/products/rice' },
    { label: 'Cotton', href: '/products/cotton' },
];

export default function Footer() {
    return (

        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {/* Logo and Branding */}
                <div className="flex flex-col items-start">
                    <Link href="/" className="flex items-center mb-4">
                        <Image
                            src="/logo/logo.png"
                            alt="360 Impex Logo"
                            width={48}
                            height={48}
                            priority
                            className="w-12 h-12 object-cover"
                        />
                        <span
                            className="text-xl sm:text-[22px] font-extrabold tracking-wide ml-2"
                            style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "1px" }}
                        >
                            <span className="text-white">36</span>
                            <span className="text-[#7ed957]">0</span>
                            <span className="text-white">IMP</span>
                            <span className="text-[#7ed957]">EX</span>
                        </span>
                    </Link>
                    <p className="text-sm text-gray-400">
                        Empowering global trade with quality products and services.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col items-start">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#7ed957]">Quick Links</h3>
                    <ul className="flex flex-col gap-2 text-sm sm:text-base">
                        {footerNav.map((item, idx) => (
                            <li key={idx}>
                                <Link
                                    href={item.href}
                                    className="hover:text-[#7ed957] transition"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Popular Products */}
                <div className="flex flex-col items-start">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#7ed957]">Popular Products</h3>
                    <ul className="flex flex-col gap-2 text-sm sm:text-base">
                        {popularProducts.map((product, idx) => (
                            <li key={idx}>
                                <Link
                                    href={product.href}
                                    className="hover:text-[#7ed957] transition"
                                >
                                    {product.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media and Contact */}
                <div className="flex flex-col items-start">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#7ed957]">Connect With Us</h3>
                    <div className="flex gap-4 text-xl sm:text-2xl mb-4">
                        {socialLinks.map((social, idx) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={idx}
                                    href={social.href}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#7ed957] transition"
                                >
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>
                    <p className="text-sm text-gray-400">
                        Phone: <a href="tel:+491529061160" className="hover:text-[#7ed957] transition">+49 152 9061160</a>
                    </p>
                    <p className="text-sm text-gray-400">
                        WhatsApp: <a href="tel:+491529061160" className="hover:text-[#7ed957] transition">+49 152 9061160</a>
                    </p>
                    <p className="text-sm text-gray-400 mb-1">
                        Email: <a href="mailto:info@360impex.com" className="hover:text-[#7ed957] transition">admin@360impex.com</a>
                    </p>


                </div>
            </div>

            {/* Copyright and Developer Credit */}
            <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} 360 Impex. All rights reserved. | Developed by <a href="https://digitalpoe.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7ed957] transition"> <link rel="stylesheet" href="/" /> DigitalPoe </a>
            </div>
        </footer>

    );
}