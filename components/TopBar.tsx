'use client';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

export default function TopBar() {
    return (
        <div
            className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2 px-4 sm:px-6 lg:px-8 shadow-md flex justify-between items-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
            {/* Left Side: Social Media Icons */}
            <div className="flex space-x-4">
                <a
                    href="https://www.facebook.com/profile.php?id=61571381976386"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7ed957] hover:text-[#6ec84a] transition duration-300"
                    aria-label="Visit our Facebook page"
                >
                    <FaFacebookF size={18} />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7ed957] hover:text-[#6ec84a] transition duration-300"
                    aria-label="Visit our Twitter page"
                >
                    <FaTwitter size={18} />
                </a>
                <a
                    href="https://instagram.com/360impex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7ed957] hover:text-[#6ec84a] transition duration-300"
                    aria-label="Visit our Instagram page"
                >
                    <FaInstagram size={18} />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7ed957] hover:text-[#6ec84a] transition duration-300"
                    aria-label="Visit our LinkedIn page"
                >
                    <FaLinkedinIn size={18} />
                </a>
                {/* <a
                    href="https://wa.me/491529061160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7ed957] hover:text-[#6ec84a] transition duration-300 flex items-center space-x-1"
                    aria-label="Contact us on WhatsApp"
                >
                    <FaWhatsapp size={18} />
                    <span className="text-sm hidden md:inline">+49 152 9061160</span>
                </a> */}
            </div>

            {/* Center: Main Text */}
            <p className="text-sm sm:text-base font-medium text-[#7ed957] hidden sm:block">
                B2B worldwide shipping available — let’s grow together!
            </p>

            {/* Right Side: Email and WhatsApp */}
            <div className="flex space-x-4 items-center">
                <a
                    href="mailto:admin@360impex.com"
                    className="text-[#7ed957] hover:text-[#6ec84a] transition duration-300 flex items-center space-x-1"
                    aria-label="Email us"
                >
                    <FaEnvelope size={18} />
                    <span className="text-sm hidden md:inline">admin@360impex.com</span>
                </a>
                <a
                    href="https://wa.me/491529061160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7ed957] hover:text-[#6ec84a] transition duration-300 flex items-center space-x-1"
                    aria-label="Contact us on WhatsApp"
                >
                    <FaWhatsapp size={18} />
                    <span className="text-sm hidden md:inline">+49 152 9061160</span>
                </a>
            </div>
        </div>
    );
}