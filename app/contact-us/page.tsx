'use client';
import React, { useState, useEffect } from 'react';
import { database } from '../../lib/firebase'; // Correct path for app/contact-us/
import { ref, push } from 'firebase/database';

// Define the type for form data
interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export default function ContactUs() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false);

    useEffect(() => {
        const styles = `
            @keyframes slideIn {
                from { transform: translateY(100%); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            .animate-slide-in { animation: slideIn 0.3s ease-out forwards; }
            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .animate-gradient-shift { background-size: 200% 200%; animation: gradientShift 15s ease infinite; }
            .border-[linear-gradient(to_right,#7ed957,#7ed957,#7ed957)] { border-image: linear-gradient(to right, #7ed957, #7ed957, #7ed957) 1; }
        `;
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
        return () => {
            if (document.head.contains(styleSheet)) {
                document.head.removeChild(styleSheet);
            }
        };
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name as keyof FormData]: value,
        }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;

        if (!database) {
            console.error('Realtime Database is not defined. Check the import path or Firebase initialization.');
            alert('Database is not initialized. Please check the console for details.');
            setIsSubmitting(false);
            return;
        }

        setIsSubmitting(true);

        const submissionData = {
            ...formData,
            createdAt: new Date().toISOString(),
            status: 'pending',
        };

        try {
            const messagesRef = ref(database, 'contactMessages');
            await push(messagesRef, submissionData);
            console.log('Data successfully pushed to Realtime Database');
            setIsSubmitting(false);
            setShowAlert(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error: any) {
            console.error('Realtime Database Error Details:', error.code, error.message);
            setIsSubmitting(false);
            alert(`Submission failed: ${error.message}. Check console for details.`);
        }
    };

    const closeAlert = () => {
        setShowAlert(false);
    };

    return (
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(126,217,87,0.1)_0%,_rgba(44,62,80,0.3)_70%)] animate-gradient-shift" />
            <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm text-gray-900 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border-4 border-[linear-gradient(to_right,#7ed957,#7ed957,#7ed957)] relative z-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8 md:mb-10 text-center text-gray-800" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Contact Us
                </h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div className="mb-3 sm:mb-4 md:mb-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full p-2 sm:p-3 md:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957] transition-all duration-300 bg-white shadow-sm ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            placeholder="Your Name"
                            required
                        />
                        {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div className="mb-3 sm:mb-4 md:mb-6">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full p-2 sm:p-3 md:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957] transition-all duration-300 bg-white shadow-sm ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            placeholder="Your Email"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-3 sm:mb-4 md:mb-6">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full p-2 sm:p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957] transition-all duration-300 bg-white shadow-sm"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            placeholder="Your Phone Number (Optional)"
                        />
                    </div>
                    <div className="mb-3 sm:mb-4 md:mb-6">
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className={`w-full p-2 sm:p-3 md:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957] transition-all duration-300 bg-white shadow-sm ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            placeholder="Subject"
                            required
                        />
                        {errors.subject && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.subject}</p>}
                    </div>
                    <div className="col-span-1 md:col-span-2 mb-3 sm:mb-4 md:mb-6">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className={`w-full p-2 sm:p-3 md:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957] transition-all duration-300 bg-white shadow-sm ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            placeholder="Your Message"
                            rows={5}
                            required
                        />
                        {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>}
                    </div>
                    <div className="col-span-1 md:col-span-2 text-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`inline-flex items-center justify-center bg-[#7ed957] text-white font-semibold py-2 sm:py-3 md:py-3 px-6 sm:px-8 md:px-10 rounded-lg hover:bg-[#6cc44a] transition-all duration-300 shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-4 sm:h-5 w-4 sm:w-5 mr-2 text-white" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6h-2z" />
                                    </svg>
                                    Submitting...
                                </>
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </div>
                </form>

                {showAlert && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-[#7ed957] text-white p-6 rounded-lg shadow-xl animate-slide-in transform transition-all duration-300 w-80 sm:w-96">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    Success!
                                </h2>
                                <button
                                    onClick={closeAlert}
                                    className="text-white hover:text-gray-200 transition-colors duration-200"
                                >
                                    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <p className="mt-4 text-lg sm:text-xl">Your message has been submitted successfully!</p>
                            <button
                                onClick={closeAlert}
                                className="mt-6 w-full bg-white text-[#7ed957] font-semibold py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}