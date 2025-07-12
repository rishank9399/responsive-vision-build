import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import ProgramsSection from "@/components/ProgramsSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <FocusAreasSection />
      <ProgramsSection />
      <ServicesSection />
      <PartnersSection />
      <WhyChooseSection />
      <Footer />
    </div>
  );
};

export default Index;
