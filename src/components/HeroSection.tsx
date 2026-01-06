import heroSectionImg from "../assets/image/hero-section-img.png";
import getStartedImg from "../assets/image/get-started-img.png";
import { ButtonBG } from "./ui/button";

export default function HeroSection() {
  return (
    <>
      <img
        src={heroSectionImg}
        alt="hero-section-img"
        className="absolute top-0 right-0 pe-20 z-1"
        draggable={false}
      />
      <div className="flex items-center justify-between px-20 text-white py-20 mt-20">
        <div className="w-[50%] space-y-5">
          <h1 className="text-4xl font-bold font-poppins">
            Building Digital Solutions That Actually Work.
          </h1>
          <p className="text-white">
            At Antartes, we design and develop scalable digital products — from
            school portals and management systems to custom web platforms and
            apps. Every solution is built to solve real problems, streamline
            operations, and grow with your organization.
          </p>

          {/* To reuse the button with the image, copy the div below */}
          <div className="w-fit">
            <ButtonBG>Get Started</ButtonBG>
            <img
              src={getStartedImg}
              alt="get-started-img"
              className="relative left-[calc(100%-50px)]"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
