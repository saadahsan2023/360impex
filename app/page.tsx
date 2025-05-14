import FeaturedProducts from '../components/FeaturedProducts';
import HeroSection from '../components/HeroSlides';
import HowItWorks from '../components/HowItWorks';
import Section from '../components/Section';
import OurProducts from '../components/OurProducts';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

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
