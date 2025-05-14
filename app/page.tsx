import FeaturedProducts from '../components/FeaturedProducts';
import HeroSection from '../components/HeroSlides';
import HowItWorks from '../components/HowItWorks';
import Section from '../components/Section';

export default function Home() {
  return (
    <main>

      <HeroSection />
      <FeaturedProducts />
      <Section />
      <HowItWorks />
    </main>
  );
}
