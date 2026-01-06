import ellipseGlow from "../assets/image/ellipse-glow.png";
import ClientGeographySection from "../components/ClientGeographySection";
import FaqsSection from "../components/FaqsSection";
import GetStartedSection from "../components/GetStartedSection";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import SuccessStoriesSection from "../components/SuccessStoriesSection";
import TestimonySection from "../components/TestimonySection";

export default function Home() {
  return (
    <main id="home">
      <div className="absolute top-0 bg-black w-full h-[80vh] -z-1">
        <div className="flex w-full justify-center">
          <img src={ellipseGlow} alt="header-ellipse" draggable={false} />
        </div>
      </div>
      <HeroSection />
      <ServicesSection />
      <SuccessStoriesSection />
      <ClientGeographySection />
      <TestimonySection />
      <FaqsSection />
      <GetStartedSection />
    </main>
  );
}
