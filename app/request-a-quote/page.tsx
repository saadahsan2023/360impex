'use client';
import React, { useState } from 'react';

const menuStructure = [
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
    });
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState<{ [key: string]: string[] }>({});
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const product = e.target.value;
        setSelectedProducts((prev) =>
            e.target.checked ? [...prev, product] : prev.filter((p) => p !== product)
        );
        setErrors((prev) => ({ ...prev, products: '' }));
        if (!e.target.checked) {
            setSelectedSubCategories((prev) => {
                const updated = { ...prev };
                delete updated[product];
                return updated;
            });
        }
    };

    const handleSubCategoryChange = (product: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const subCategory = e.target.value;
        setSelectedSubCategories((prev) => {
            const currentSubCategories = prev[product] || [];
            return {
                ...prev,
                [product]: e.target.checked
                    ? [...currentSubCategories, subCategory]
                    : currentSubCategories.filter((sc) => sc !== subCategory),
            };
        });
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
        if (selectedProducts.length === 0) newErrors.products = 'Please select at least one product';
        // Fix subcategory validation syntax
        selectedProducts.forEach((product) => {
            if (selectedSubCategories[product]?.length === 0) {
                newErrors[`subCategories-${product}`] = `Please select at least one subcategory for ${product}`;
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        const submissionData = {
            ...formData,
            products: selectedProducts.map((product) => ({
                name: product,
                subCategories: selectedSubCategories[product] || [],
            })),
            createdAt: new Date().toISOString(),
        };

        console.log('Form Submission Data:', submissionData);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setShowAlert(true);
        setFormData({ name: '', email: '', phone: '', business: '', country: '', whatsapp: '' });
        setSelectedProducts([]);
        setSelectedSubCategories({});
    };

    const closeAlert = () => {
        setShowAlert(false);
    };

    return (
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(126,217,87,0.1)_0%,_rgba(44,62,80,0.3)_70%)] animate-gradient-shift" />
            <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm text-gray-900 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border-4 border-[linear-gradient(to_right,#7ed957,#a4e67a,#7ed957)] relative z-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8 md:mb-10 text-center text-gray-800" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Request a Quote
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
                        />
                        {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-3 sm:mb-4 md:mb-6">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full p-2 sm:p-3 md:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957] transition-all duration-300 bg-white shadow-sm ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            placeholder="Your Phone Number"
                        />
                        {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div className="mb-3 sm:mb-4 md:mb-6">
                        <input
                            type="text"
                            name="business"
                            value={formData.business}
                            onChange={handleInputChange}
                            className="w-full p-2 sm:p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957] transition-all duration-300 bg-white shadow-sm"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            placeholder="Your Business"
                        />
                    </div>
                    <div className="mb-3 sm:mb-4 md:mb-6">
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full p-2 sm:p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957] transition-all duration-300 bg-white shadow-sm"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            placeholder="Your Country"
                        />
                    </div>
                    <div className="mb-3 sm:mb-4 md:mb-6">
                        <input
                            type="tel"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleInputChange}
                            className="w-full p-2 sm:p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957] transition-all duration-300 bg-white shadow-sm"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            placeholder="Your WhatsApp Number"
                        />
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-base sm:text-lg md:text-lg font-semibold text-gray-800 mb-2 sm:mb-4">
                            Product * {errors.products && <span className="text-red-500 text-sm ml-2">{errors.products}</span>}
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                            {menuStructure.map((product, index) => (
                                <div key={index} className="p-2 sm:p-3 md:p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <label className="flex items-center space-x-2 sm:space-x-3">
                                        <input
                                            type="checkbox"
                                            value={product.label}
                                            checked={selectedProducts.includes(product.label)}
                                            onChange={handleProductChange}
                                            className="h-4 sm:h-5 w-4 sm:w-5 text-[#7ed957] focus:ring-[#7ed957] rounded"
                                        />
                                        <span className="text-sm sm:text-base md:text-lg font-medium text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                            {product.label}
                                        </span>
                                    </label>
                                    {selectedProducts.includes(product.label) && (
                                        <div className="ml-4 sm:ml-6 md:ml-8 mt-2 sm:mt-3 space-y-2 sm:space-y-3">
                                            {product.subItems.map((subItem, subIndex) => (
                                                <label key={subIndex} className="flex items-center space-x-2 sm:space-x-3">
                                                    <input
                                                        type="checkbox"
                                                        value={subItem.label}
                                                        onChange={(e) => handleSubCategoryChange(product.label, e)}
                                                        className="h-4 sm:h-5 w-4 sm:w-5 text-[#7ed957] focus:ring-[#7ed957] rounded"
                                                    />
                                                    <span className="text-xs sm:text-sm md:text-base text-gray-700" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                        {subItem.label}
                                                    </span>
                                                </label>
                                            ))}
                                            {errors[`subCategories-${product.label}`] && (
                                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors[`subCategories-${product.label}`]}</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
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
                            <p className="mt-4 text-lg sm:text-xl">Your quote request has been submitted successfully!</p>
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

// CSS for animations and border (add to globals.css or a stylesheet)
const styles = `
    @keyframes slideIn {
        from {
            transform: translateY(100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    .animate-slide-in {
        animation: slideIn 0.3s ease-out forwards;
    }
    @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    .animate-gradient-shift {
        background-size: 200% 200%;
        animation: gradientShift 15s ease infinite;
    }
    .border-[linear-gradient(to_right,#7ed957,#a4e67a,#7ed957)] {
        border-image: linear-gradient(to right, #7ed957, #a4e67a, #7ed957) 1;
    }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);