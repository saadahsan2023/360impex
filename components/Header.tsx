'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const menuStructure = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    {
        label: 'Our Products',
        subMenu: [
            {
                label: 'Himalayan Pink',
                basePath: '/products/himalayan-pink',
                subItems: [
                    'Edible Salt',
                    'Himalayan Salt Lamps',
                    'Animal lick salt',
                    'Decorative products',
                    'Health and wellness products',
                    'Industrial salt',
                ],
            },
            {
                label: 'Vegetables',
                basePath: '/products/vegetables',
                subItems: [
                    'Onions',
                    'Patato',
                    'Garlic',
                    'Ginger',
                    'Dry Chilies',
                    'Bitter Gourd (Karela)',
                ],
            },
            {
                label: 'Fruits',
                basePath: '/products/Fruits',
                subItems: ['Mangoes', 'Apples', 'Bananas', 'Pomegranates', 'Dates'],
            },
            {
                label: 'Rice',
                basePath: '/products/rice',
                subItems: ['Basmati Rice', 'Non Basmati Rice', 'Sella Rice'],
            },
            {
                label: 'Cotton',
                basePath: '/products/cotton',
                subItems: [
                    'Desi Cotton (Gossypium arboreum)',
                    'American Cotton (Gossypium hirsutum)',
                ],
            },
        ],
    },
    { label: 'Services', href: '/services' },
    { label: 'Request a Quote', href: '/request-a-quote' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const handleSubMenuHover = (index: number | null) => setActiveSubMenu(index);
    const handleSubMenuLeave = () => setActiveSubMenu(null);
    const toggleSubMenuMobile = (index: number | null) => {
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };

    const generateLink = (base: string, label: string) => {
        const slug = label.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        return `${base}/${slug}`;
    };

    return (
        <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                {/* Logo + Name on all screens */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo/logo.png"
                        alt="360 Impex Logo"
                        width={48}
                        height={48}
                        priority
                        className="w-12 h-12 object-cover"
                    />
                    <span
                        className="text-[22px] font-extrabold tracking-wide"
                        style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "1px" }}
                    >
                        <span className="text-white">36</span>
                        <span className="text-[#7ed957]">0</span>&nbsp;
                        <span className="text-white">IMP</span>
                        <span className="text-[#7ed957]">EX</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-1 justify-center space-x-8">
                    {menuStructure.map((item, idx) => (
                        <div key={idx} className="relative group">
                            <Link
                                href={item.href || '#'}
                                className="text-white hover:text-[#7ed957] font-medium transition-transform duration-200 transform hover:scale-105"
                            >
                                {item.label}
                            </Link>
                            {item.subMenu && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                                    {item.subMenu.map((main, i) => (
                                        <div
                                            key={i}
                                            className="relative group/sub"
                                            onMouseEnter={() => handleSubMenuHover(i)}
                                            onMouseLeave={handleSubMenuLeave}
                                        >
                                            <div className="px-4 py-2 text-white hover:text-[#7ed957] font-medium hover:bg-gray-700 rounded">
                                                {main.label}
                                            </div>
                                            {activeSubMenu === i && (
                                                <div className="absolute left-full top-0 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-xl">
                                                    {main.subItems.map((subItem, j) => (
                                                        <Link
                                                            key={j}
                                                            href={generateLink(main.basePath, subItem)}
                                                            className="block px-4 py-2 text-sm text-gray-300 hover:text-[#7ed957] hover:bg-gray-700"
                                                        >
                                                            {subItem}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Removed Contact Us Button from mobile, shown only on desktop */}
                <Link
                    href="/contact-us"
                    className="bg-[#7ed957] text-white font-semibold py-1.5 px-3 rounded-lg hover:bg-[#6cc44a] transition-all duration-300 shadow-md hover:shadow-xl hidden sm:inline-block"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    Contact Us
                </Link>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-white hover:text-[#7ed957]"
                    aria-label="Toggle mobile menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Content */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-gray-800 border-t border-gray-700 transition-all duration-300">
                    <ul className="px-4 py-4 space-y-3">
                        {menuStructure.map((item, idx) => (
                            <li key={idx}>
                                <Link
                                    href={item.href || '#'}
                                    className="block text-white hover:text-[#7ed957] font-medium"
                                    onClick={toggleMobileMenu}
                                >
                                    {item.label}
                                </Link>
                                {item.subMenu && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        {item.subMenu.map((main, i) => (
                                            <div key={i}>
                                                <div
                                                    className="font-semibold text-white hover:text-[#7ed957] cursor-pointer"
                                                    onClick={() => toggleSubMenuMobile(i)}
                                                >
                                                    {main.label}
                                                </div>
                                                {activeSubMenu === i && (
                                                    <ul className="ml-4 mt-1 space-y-1 text-sm text-gray-300">
                                                        {main.subItems.map((subItem, j) => (
                                                            <li key={j}>
                                                                <Link
                                                                    href={generateLink(main.basePath, subItem)}
                                                                    className="block hover:text-[#7ed957]"
                                                                    onClick={toggleMobileMenu}
                                                                >
                                                                    {subItem}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
