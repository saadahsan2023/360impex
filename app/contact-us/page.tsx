// Assuming 'useState' and 'React' are imported correctly, e.g.:
// import React, { useState } from 'react';

// ... (other parts of your component)

// Example state, assuming setSelectedProducts is a state setter
const [selectedProducts, setSelectedProducts] = React.useState<string[]>([]);
const [formData, setFormData] = React.useState({
    // ... other form fields
    whatsapp: '',
});

const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const product = e.target.value;
    // Assuming you want to toggle the product in the selectedProducts array
    setSelectedProducts((prev) =>
        prev.includes(product)
            ? prev.filter((p) => p !== product)
            : [...prev, product]
    );
    // Or if you are setting a single product string:
    // setSelectedProducts(product); // Adjust based on your actual logic for setSelectedProducts
};

// ... (rest of your component)