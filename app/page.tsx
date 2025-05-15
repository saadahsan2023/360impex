import FeaturedProducts from '../components/FeaturedProducts';
import HeroSection from '../components/HeroSlides';
import HowItWorks from '../components/HowItWorks';
import Section from '../components/Section';
import OurProducts from '../components/OurProducts';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import AboutUs from '../components/AboutUs';
export default function Home() {
  return (
    <main>

      <HeroSection />
      <FeaturedProducts />
      <Section />
      <HowItWorks />
      <WhyChooseUs />
      <OurProducts />
      <Testimonials />
    </main>
  );
}
