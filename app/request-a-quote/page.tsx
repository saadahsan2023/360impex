"use client";

import React, { useState } from 'react'; // Removed useEffect as it's not used
import { ref, push } from "firebase/database"; // For Realtime Database
import { database } from "../../lib/firebase"; // CRITICAL: Ensure 'database' is the Realtime Database instance from your firebase setup

// Define types for better management
interface SubItem {
    label: string;
    href: string;
}

interface MenuItem {
    label: string;
    subItems: SubItem[];
}
const menuStructure: MenuItem[] = [
    {
        label: 'Himalayan Pink',
        subItems: [
            { label: 'Edible Salt', href: '/products/himalayan-pink/edible-salt' },
            { label: 'Himalayan Salt Lamps', href: '/products/himalayan-pink/salt-lamps' },
            { label: 'Animal Lick Salt', href: '/products/himalayan-pink/animal-lick-salt' },
            { label: 'Decorative Products', href: '/products/himalayan-pink/decorative-products' },
            { label: 'Health and Wellness Products', href: '/products/himalayan-pink/health-wellness' },
            { label: 'Industrial Salt', href: '/products/himalayan-pink/industrial-salt' },
        ],
    },
    {
        label: 'Vegetables',
        subItems: [
            { label: 'Onions', href: '/products/vegetables/onions' },
            { label: 'Potatoes', href: '/products/vegetables/potatoes' },
            { label: 'Garlic', href: '/products/vegetables/garlic' },
            { label: 'Ginger', href: '/products/vegetables/ginger' },
            { label: 'Dry Chilies', href: '/products/vegetables/dry-chilies' },
            { label: 'Bitter Gourd (Karela)', href: '/products/vegetables/bitter-gourd' },
        ],
    },
    {
        label: 'Fruits',
        subItems: [
            { label: 'Mangoes', href: '/products/fruits/mangoes' },
            { label: 'Apples', href: '/products/fruits/apples' },
            { label: 'Bananas', href: '/products/fruits/bananas' },
            { label: 'Pomegranates', href: '/products/fruits/pomegranates' },
            { label: 'Dates', href: '/products/fruits/dates' },
        ],
    },
    {
        label: 'Rice',
        subItems: [
            { label: 'Basmati Rice', href: '/products/rice/basmati' },
            { label: 'Non Basmati Rice', href: '/products/rice/non-basmati' },
            { label: 'Sella Rice', href: '/products/rice/sella' },
        ],
    },
    {
        label: 'Cotton',
        subItems: [
            { label: 'Desi Cotton (Gossypium arboreum)', href: '/products/cotton/desi' },
            { label: 'American Cotton (Gossypium hirsutum)', href: '/products/cotton/american' },
        ],
    },
];

export default function RequestQuote() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        business: '',
        country: '',
        whatsapp: '',
        message: '',
        quantity: '',
        quantityUnit: 'kg',
    });
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState<{ [key: string]: string[] }>({});
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleMainCategoryChange = (categoryLabel: string) => {
        setSelectedProducts(prevSelected => {
            const newSelected = prevSelected.includes(categoryLabel)
                ? prevSelected.filter(p => p !== categoryLabel)
                : [...prevSelected, categoryLabel];

            if (!newSelected.includes(categoryLabel)) {
                setSelectedSubCategories(prevSubs => {
                    const newSubs = { ...prevSubs };
                    delete newSubs[categoryLabel];
                    return newSubs;
                });
            }
            return newSelected;
        });
    };

    const handleSubCategoryChange = (mainCategoryLabel: string, subCategoryLabel: string) => {
        setSelectedSubCategories(prev => {
            const currentSubsForMain = prev[mainCategoryLabel] || [];
            const newSubsForMain = currentSubsForMain.includes(subCategoryLabel)
                ? currentSubsForMain.filter(s => s !== subCategoryLabel)
                : [...currentSubsForMain, subCategoryLabel];
            return {
                ...prev,
                [mainCategoryLabel]: newSubsForMain,
            };
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.country.trim()) newErrors.country = 'Country is required';
        if (selectedProducts.length === 0) newErrors.products = 'Please select at least one product category';

        selectedProducts.forEach((product) => {
            if (!selectedSubCategories[product] || selectedSubCategories[product]?.length === 0) {
                newErrors[`subCategories-${product}`] = `Please select at least one sub-category for ${product}`;
            }
        });
        if (!formData.quantity.trim()) newErrors.quantity = 'Quantity is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            console.log("Validation Errors:", errors);
            return;
        }

        setIsSubmitting(true);

        const submissionData = {
            ...formData,
            products: selectedProducts.map((productName) => ({
                name: productName,
                subCategories: selectedSubCategories[productName] || [],
            })),
            createdAt: new Date().toISOString(),
        };

        console.log('Form Submission Data for Realtime DB:', submissionData);

        try {
            // Save data to Firebase Realtime Database
            // The 'database' variable here MUST be an instance of the Realtime Database
            const quotesRef = ref(database, "quoteRequests");
            await push(quotesRef, submissionData);

            setShowAlert(true);
            setFormData({
                name: '', email: '', phone: '', business: '', country: '', whatsapp: '',
                message: '', quantity: '', quantityUnit: 'kg'
            });
            setSelectedProducts([]);
            setSelectedSubCategories({});
            setErrors({});
        } catch (error) {
            console.error("Firebase Realtime Database submission error:", error);
            // Check if the error is a FirebaseError and has a code property
            let errorMessage = "Submission failed. Please try again.";
            if (error instanceof Error && 'code' in error) {
                // It's a FirebaseError or similar, you might want to log error.code
                console.error("Firebase error code:", (error as any).code);
            }
            setErrors({ form: errorMessage });
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeAlert = () => {
        setShowAlert(false);
    };

    return (
        <section className="py-12 md:py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#7ed957]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Request a Quote
                </h1>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl space-y-6">
                    {/* Basic Info Fields */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-700 text-white border-gray-600 rounded-md p-2.5 focus:ring-[#7ed957] focus:border-[#7ed957]" />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-700 text-white border-gray-600 rounded-md p-2.5 focus:ring-[#7ed957] focus:border-[#7ed957]" />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
                        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-gray-700 text-white border-gray-600 rounded-md p-2.5 focus:ring-[#7ed957] focus:border-[#7ed957]" />
                        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                        <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-1">Company Name (Optional)</label>
                        <input type="text" name="business" id="business" value={formData.business} onChange={handleChange} className="w-full bg-gray-700 text-white border-gray-600 rounded-md p-2.5 focus:ring-[#7ed957] focus:border-[#7ed957]" />
                    </div>
                    <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1">Country</label>
                        <input type="text" name="country" id="country" value={formData.country} onChange={handleChange} required className="w-full bg-gray-700 text-white border-gray-600 rounded-md p-2.5 focus:ring-[#7ed957] focus:border-[#7ed957]" />
                        {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country}</p>}
                    </div>
                    <div>
                        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1">WhatsApp (Optional)</label>
                        <input type="tel" name="whatsapp" id="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full bg-gray-700 text-white border-gray-600 rounded-md p-2.5 focus:ring-[#7ed957] focus:border-[#7ed957]" />
                    </div>

                    {/* Product Selection */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-200">Select Products</h3>
                        {errors.products && <p className="text-red-400 text-xs -mt-2 mb-2">{errors.products}</p>}
                        {menuStructure.map(category => (
                            <div key={category.label} className="p-3 bg-gray-700 rounded-md">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={selectedProducts.includes(category.label)}
                                        onChange={() => handleMainCategoryChange(category.label)}
                                        className="form-checkbox h-5 w-5 text-[#7ed957] bg-gray-600 border-gray-500 rounded focus:ring-[#6cc44a]"
                                    />
                                    <span className="font-medium text-gray-100">{category.label}</span>
                                </label>
                                {selectedProducts.includes(category.label) && (
                                    <div className="mt-2 pl-6 space-y-1">
                                        <h4 className="text-sm font-medium text-gray-400 mb-1">Select {category.label} types:</h4>
                                        {errors[`subCategories-${category.label}`] && <p className="text-red-400 text-xs mb-1">{errors[`subCategories-${category.label}`]}</p>}
                                        {category.subItems.map(subItem => (
                                            <label key={subItem.label} className="flex items-center space-x-2 text-sm text-gray-300 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedSubCategories[category.label]?.includes(subItem.label) || false}
                                                    onChange={() => handleSubCategoryChange(category.label, subItem.label)}
                                                    className="form-checkbox h-4 w-4 text-[#7ed957] bg-gray-600 border-gray-500 rounded focus:ring-[#6cc44a]"
                                                />
                                                <span>{subItem.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Quantity */}
                    <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-1">Quantity</label>
                        <div className="flex">
                            <input type="number" name="quantity" id="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g., 1000" required className="w-2/3 bg-gray-700 text-white border-gray-600 rounded-l-md p-2.5 focus:ring-[#7ed957] focus:border-[#7ed957]" />
                            <select name="quantityUnit" id="quantityUnit" value={formData.quantityUnit} onChange={handleChange} className="w-1/3 bg-gray-700 text-white border-gray-600 border-l-0 rounded-r-md p-2.5 focus:ring-[#7ed957] focus:border-[#7ed957]">
                                <option value="kg">kg</option>
                                <option value="ton">Tons</option>
                                <option value="pcs">Pieces</option>
                                <option value="containers">Containers</option>
                            </select>
                        </div>
                        {errors.quantity && <p className="text-red-400 text-xs mt-1">{errors.quantity}</p>}
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Additional Message (Optional)</label>
                        <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="w-full bg-gray-700 text-white border-gray-600 rounded-md p-2.5 focus:ring-[#7ed957] focus:border-[#7ed957]"></textarea>
                    </div>

                    {errors.form && <p className="text-red-400 text-sm text-center">{errors.form}</p>}

                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#7ed957] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#6cc44a] transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                        {isSubmitting ? 'Submitting...' : 'Send Request'}
                    </button>
                </form>

                {/* Success Alert Modal */}
                {showAlert && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                        <div className="bg-[#7ed957] text-white p-6 sm:p-8 rounded-lg shadow-xl animate-slide-in max-w-md w-full">
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
                            <p className="text-base sm:text-lg mb-6">Your quote request has been submitted successfully! We will get back to you soon.</p>
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