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


"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";

interface BannerProduct {
  label: string;
  description: string;
  href: string;
  image: string;
}

const bannerProduct: BannerProduct = {
  label: "Himalayan Pink Salt",
  description: "Discover the purest Himalayan Pink Salt, rich in minerals and natural flavors.",
  href: "/products/himalayan-salt",
  image: "https://via.placeholder.com/320x320?text=Himalayan+Salt",
};

const featuredProducts = [
  {
    label: 'Himalayan ',
    href: '/products/himalayan-pink',
    image: '/test.png',
    description: 'Our premium Himalayan Pink Salt products, perfect for culinary, wellness, and decor.',
  },
  {
    label: 'Vegetables',
    href: '/products/vegetables',
    image: '/pro1.png',
    description: 'Fresh and organic vegetables, sourced directly from the finest farms.',
  },
  {
    label: 'Fruits',
    href: '/products/Fruits',
    image: '/pro4.png',
    description: 'Juicy and delicious fruits, packed with natural sweetness and nutrition.',
  },
  {
    label: 'Rice',
    href: '/products/rice',
    image: '/pro3.png',
    description: 'High-quality rice varieties, including Basmati and Sella, for every meal.',
  },
  {
    label: 'Cotton',
    href: '/products/cotton',
    image: '/pro2.png',
    description: 'Pure and sustainable cotton, ideal for textiles and industrial use.',
  },
];

// Animation variants
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50, rotate: 5 },
  visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
  hover: { scale: 1.05, rotate: 2, transition: { duration: 0.5 } },
};

export default function FeaturedProducts() {
  const bannerProduct = featuredProducts[0]; // Himalayan Pink Salt for banner
  const gridProducts = featuredProducts.slice(1); // Remaining 4 products for 2x2 grid

  return (
    <section className="bg-[#F5F5F5] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#1F2937]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Featured <span className="text-[#6cc44a]">Products</span>
          </h2>
          <p className="text-[#4B5563] mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our top products, crafted with quality and care.
          </p>
        </div>

        {/* Banner for Himalayan Pink Salt */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-12 overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex-1 z-10 text-center md:text-left"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1F2937] mb-3 sm:mb-4 leading-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >

              {bannerProduct.label}
              <span className="text-[#6cc44a]">Pink Salt</span>
            </h3>

            <p
              className="text-[#4B5563] text-sm sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed max-w-xs sm:max-w-md mx-auto md:mx-0"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {bannerProduct.description}
            </p>

            <Link
              href={bannerProduct.href}
              className="inline-block bg-[#6cc44a] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#5bb63e] transition-all duration-300 font-semibold text-sm sm:text-lg"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              View Details
            </Link>

          </motion.div>
          <motion.figure
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 relative z-10"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >

            <Image
              src={bannerProduct.image}
              alt={bannerProduct.label}
              width={320}
              height={320}
              className="w-full h-full object-cover rounded-2xl shadow-md"
            />
          </motion.figure>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gridProducts.map((product, idx) => (
            <motion.article
              key={idx}
              className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col items-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            >
              <figure className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72">
                <Image
                  src={product.image}
                  alt={product.label}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg shadow-sm"
                />
              </figure>

              <div className="text-center">
                <h3
                  className="text-xl font-semibold text-[#1F2937] mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {product.label}
                </h3>
                <p className="text-[#4B5563] text-sm mb-4">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="inline-block bg-[#7ED957] text-white py-1 px-4 rounded-full hover:bg-[#6CC44A] transition-colors duration-300 font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  View Details
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}