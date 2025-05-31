// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const featuredProducts = [
//     {
//         label: 'Himalayan Pink Salt',
//         href: '/products/himalayan-pink',
//         image: '/main.jpg',
//         description: 'Our premium Himalayan Pink Salt products, perfect for culinary, wellness, and decor.',
//     },
//     {
//         label: 'Vegetables',
//         href: '/products/vegetables',
//         image: '/check2.jpg',
//         description: 'Fresh and organic vegetables, sourced directly from the finest farms.',
//     },
//     {
//         label: 'Fruits',
//         href: '/products/Fruits',
//         image: '/check2.jpg',
//         description: 'Juicy and delicious fruits, packed with natural sweetness and nutrition.',
//     },
//     {
//         label: 'Rice',
//         href: '/products/rice',
//         image: '/image/img1.png',
//         description: 'High-quality rice varieties, including Basmati and Sella, for every meal.',
//     },
//     {
//         label: 'Cotton',
//         href: '/products/cotton',
//         image: '/image/img1.png',
//         description: 'Pure and sustainable cotton, ideal for textiles and industrial use.',
//     },
// ];

// export default function FeaturedProducts() {
//     return (
//         <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 {/* Section Heading */}
//                 <div className="text-center mb-12">
//                     <h2
//                         className="text-3xl sm:text-4xl font-extrabold"
//                         style={{ fontFamily: "'Montserrat', sans-serif" }}
//                     >
//                         Featured <span className="text-[#7ed957]">Products</span>
//                     </h2>
//                     <p className="text-gray-400 mt-3 text-sm sm:text-base">
//                         Explore our top products, crafted with quality and care.
//                     </p>
//                 </div>

//                 {/* Product Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//                     {featuredProducts.map((product, idx) => (
//                         <div
//                             key={idx}
//                             className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
//                         >
//                             <Image
//                                 src={product.image}
//                                 alt={product.label}
//                                 width={400}
//                                 height={300}
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-5">
//                                 <h3
//                                     className="text-xl font-semibold mb-2"
//                                     style={{ fontFamily: "'Montserrat', sans-serif" }}
//                                 >
//                                     {product.label}
//                                 </h3>
//                                 <p className="text-gray-400 text-sm mb-4">
//                                     {product.description}
//                                 </p>
//                                 <Link
//                                     href={product.href}
//                                     className="inline-block bg-[#7ed957] text-white py-1 px-3.5 rounded-full hover:bg-[#6cc44a] transition-colors duration-300"
//                                     style={{ fontFamily: "'Montserrat', sans-serif" }}
//                                 >
//                                     Explore More
//                                 </Link>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }



'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const featuredProducts = [
    {
        label: 'Himalayan Pink Salt',
        href: '/products/himalayan-pink',
        image: '/main.jpg',
        description: 'Our premium Himalayan Pink Salt products, perfect for culinary, wellness, and decor.',
    },
    {
        label: 'Vegetables',
        href: '/products/vegetables',
        image: '/check2.jpg',
        description: 'Fresh and organic vegetables, sourced directly from the finest farms.',
    },
    {
        label: 'Fruits',
        href: '/products/Fruits',
        image: '/check2.jpg',
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
    const bannerProduct = featuredProducts[0]; // Himalayan Pink Salt for banner
    const gridProducts = featuredProducts.slice(1); // Remaining 4 products for 2x2 grid

    return (
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/texture-dark.png')] opacity-10" />
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl sm:text-4xl font-extrabold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Featured <span className="text-[#7ed957]">Products</span>
                    </h2>
                    <p className="text-gray-300 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
                        Explore our top products, crafted with quality and care.
                    </p>
                </div>

                {/* Banner for Himalayan Pink Salt */}
                <div className="mb-12 bg-gray-800/80 rounded-xl shadow-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex-1">
                        <h3
                            className="text-2xl sm:text-3xl font-bold mb-4"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            {bannerProduct.label}
                        </h3>
                        <p className="text-gray-300 text-base sm:text-lg mb-6">
                            {bannerProduct.description}
                        </p>
                        <Link
                            href={bannerProduct.href}
                            className="inline-block bg-[#7ed957] text-white py-2 px-6 rounded-full hover:bg-[#6cc44a] transition-colors duration-300 font-semibold"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Explore More
                        </Link>
                    </div>
                    <figure className="w-80 h-60 sm:w-96 sm:h-72">
                        <Image
                            src={bannerProduct.image}
                            alt={bannerProduct.label}
                            width={384}
                            height={288}
                            className="w-full h-full object-cover rounded-lg border-2 border-[#7ed957]/20 shadow-lg"
                        />
                    </figure>
                </div>

                {/* 2x2 Grid for Remaining Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {gridProducts.map((product, idx) => (
                        <article
                            key={idx}
                            className="bg-gray-800/80 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center gap-4 transform transition-transform duration-300 hover:scale-105"
                        >
                            <div className="flex-1">
                                <h3
                                    className="text-xl font-semibold mb-2"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    {product.label}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    {product.description}
                                </p>
                                <Link
                                    href={product.href}
                                    className="inline-block bg-[#7ed957] text-white py-1 px-4 rounded-full hover:bg-[#6cc44a] transition-colors duration-300 font-medium"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    Explore More
                                </Link>
                            </div>
                            <figure className="w-32 h-24 sm:w-40 sm:h-32">
                                <Image
                                    src={product.image}
                                    alt={product.label}
                                    width={160}
                                    height={128}
                                    className="w-full h-full object-cover rounded-md border-2 border-[#7ed957]/20 shadow-md"
                                />
                            </figure>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}