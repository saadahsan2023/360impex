'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const featuredProducts = [
    {
        label: 'Himalayan Pink',
        href: '/products/himalayan-pink',
        image: '/image/img1.png',
        description: 'Discover our premium Himalayan Pink Salt products, perfect for culinary, wellness, and decor.',
    },
    {
        label: 'Vegetables',
        href: '/products/vegetables',
        image: '/image/img1.png',
        description: 'Fresh and organic vegetables, sourced directly from the finest farms.',
    },
    {
        label: 'Fruits',
        href: '/products/fruits',
        image: '/image/img1.png',
        description: 'Juicy and delicious fruits, packed with natural sweetness and nutrition.',
    },
    {
        label: 'Rice',
        href: '/products/rice',
        image: '/image/img1.png',
        description: 'High-quality rice varieties, including Basmati and Sella, for every meal.',
    },
    {
        label: 'Cotton',
        href: '/products/cotton',
        image: '/image/img1.png',
        description: 'Pure and sustainable cotton, ideal for textiles and industrial use.',
    },
];

export default function FeaturedProducts() {
    return (
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl sm:text-4xl font-extrabold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Featured <span className="text-[#7ed957]">Products</span>
                    </h2>
                    <p className="text-gray-400 mt-3 text-sm sm:text-base">
                        Explore our top products, crafted with quality and care.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                        >
                            <Image
                                src={product.image}
                                alt={product.label}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h3
                                    className="text-xl font-semibold mb-2"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    {product.label}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {product.description}
                                </p>
                                <Link
                                    href={product.href}
                                    className="inline-block bg-[#7ed957] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#6cc44a] transition-colors duration-300"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    View Product
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}