import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ChallengesSection from '@/components/sections/ChallengesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CtaBanner from '@/components/sections/CtaBanner';
import AboutSection from '@/components/sections/AboutSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import CareerSection from '@/components/sections/CareerSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ChallengesSection />
      <ServicesSection />
      <CtaBanner />
      <AboutSection />
      <AdvantagesSection />
      <CareerSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
