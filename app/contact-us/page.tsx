'use client';
import React, { useState, useEffect } from 'react';
import { database } from '../../lib/firebase';
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
        <section className="py-12 md:py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#7ed957]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Contact Us
                </h1>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full bg-gray-700 text-white border-gray-600 rounded-md p-2.5 focus:ring-[#7ed957] focus:border-[#7ed957] ${errors.name ? 'border-red-500' : ''}`}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            placeholder="Your Name"
                            required
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full bg-gray-700 text-white border-gray-600 rounded-md p-2.5 focus:ring-[#7ed957] focus:border-[#7ed957] ${errors.email ? 'border-red-500' : ''}`}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            placeholder="Your Email"
                            required
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Your Phone Number (Optional)</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-gray-700 text-white border-gray-600 rounded-md p-2.5 focus:ring-[#7ed957] focus:border-[#7ed957]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            placeholder="Your Phone Number"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className={`w-full bg-gray-700 text-white border-gray-600 rounded-md p-2.5 focus:ring-[#7ed957] focus:border-[#7ed957] ${errors.subject ? 'border-red-500' : ''}`}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            placeholder="Subject"
                            required
                        />
                        {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className={`w-full bg-gray-700 text-white border-gray-600 rounded-md p-2.5 focus:ring-[#7ed957] focus:border-[#7ed957] ${errors.message ? 'border-red-500' : ''}`}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            placeholder="Your Message"
                            rows={4}
                            required
                        />
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-[#7ed957] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#6cc44a] transition-all duration-300 shadow-md hover:shadow-xl ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin h-4 w-4 mr-2 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6h-2z" />
                                </svg>
                                Submitting...
                            </>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </form>

                {showAlert && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                        <div className="bg-[#7ed957] text-white p-6 sm:p-8 rounded-lg shadow-xl max-w-md w-full">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    Success!
                                </h2>
                                <button
                                    onClick={closeAlert}
                                    className="text-white hover:text-gray-200 transition-colors duration-200"
                                    aria-label="Close success alert"
                                >
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-base sm:text-lg mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Your message has been submitted successfully!
                            </p>
                            <button
                                onClick={closeAlert}
                                className="w-full bg-white text-[#7ed957] font-semibold py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-300"
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