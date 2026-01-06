import ellipseGlow from "../assets/image/ellipse-glow.png";
import HeroSection from "../components/HeroSection";
import SuccessStoriesSection from "../components/SuccessStoriesSection";

export default function Home() {
  return (
    <main>
      <div className="absolute top-0 bg-black w-full h-[80vh] -z-1">
        <div className="flex w-full justify-center">
          <img src={ellipseGlow} alt="header-ellipse" draggable={false} />
        </div>
      </div>
      <HeroSection />
      <SuccessStoriesSection />
    </main>
  );
}
