'use client'

import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function TopBar() {
  return (
    <div
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center"
      style={{
        fontFamily: "'Montserrat', sans-serif",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid #7ed957',
      }}
    >
      {/* Left Side: Social Media Icons */}
      <div className="flex space-x-5">
        <a
          href="https://www.facebook.com/profile.php?id=61571381976386"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7ed957] hover:text-[#6ec84a] transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-pulse-once"
          aria-label="Visit our Facebook page"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="https://instagram.com/360impex"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7ed957] hover:text-[#6ec84a] transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-pulse-once"
          aria-label="Visit our Instagram page"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7ed957] hover:text-[#6ec84a] transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-pulse-once"
          aria-label="Visit our LinkedIn page"
        >
          <FaLinkedinIn size={18} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7ed957] hover:text-[#6ec84a] transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-pulse-once"
          aria-label="Visit our Twitter page"
        >
          <FaTwitter size={18} />
        </a>
      </div>

      {/* Center: Main Text with Gradient Animation */}
      <p
        className="text-sm sm:text-base font-semibold tracking-wide hidden sm:block hover:scale-105 transition-transform duration-300"
        style={{
          background: 'linear-gradient(90deg, #7ed957, #8cff66, #4CAF50, #6ec84a, #7ed957)',
          backgroundSize: '300% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          animation: 'gradientShift 4s ease-in-out infinite',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
        }}
      >
        B2B worldwide shipping available — let's grow together!
      </p>

      {/* Right Side: Email and WhatsApp */}
      <div className="flex space-x-5 items-center">
        <a
          href="mailto:admin@360impex.com"
          className="text-[#7ed957] hover:text-[#6ec84a] transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-pulse-once"
          aria-label="Email us"
        >
          <FaEnvelope size={18} />
        </a>
        <a
          href="https://wa.me/491529061160"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7ed957] hover:text-[#6ec84a] transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-pulse-once"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp size={18} />
        </a>
      </div>

      {/* CSS for Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes pulseOnce {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pulse-once {
          animation: pulseOnce 0.8s ease-in-out;
        }
      `}</style>
    </div>
  )
}