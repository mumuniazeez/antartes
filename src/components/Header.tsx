import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonBG } from "./ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // initially check if the user has scrolled
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 z-100! flex justify-center transition-all duration-300 ${
        isScrolled ? "top-5" : "top-0"
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md rounded-full px-10 py-4 w-fit gap-20 shadow-lg border border-white/10"
            : "px-20 py-10 w-full"
        }`}
      >
        <Link to="/" className="text-3xl font-raleway font-bold text-white">
          Antartes
        </Link>
        <nav>
          <ul className="flex gap-10 text-white">
            <li>
              <Link
                to="#home"
                className="nav-active"
                onClick={(e) => scrollToSection(e, "home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#services-section"
                onClick={(e) => scrollToSection(e, "services-section")}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#cases-section"
                onClick={(e) => scrollToSection(e, "cases-section")}
              >
                Cases
              </Link>
            </li>
            <li>
              <Link
                to="#about-section"
                onClick={(e) => scrollToSection(e, "about-section")}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <ButtonBG>Get Started</ButtonBG>
      </div>
    </header>
  );
}
