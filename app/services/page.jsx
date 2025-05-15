import React from 'react'
import FeaturedProducts from '../../components/FeaturedProducts';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import OurProducts from '../../components/OurProducts';


const page = () => {
    return (
        <>
            <FeaturedProducts />
            <HowItWorks />
            <WhyChooseUs />
            <OurProducts />
            <Testimonials />
        </>
    )
}

export default page