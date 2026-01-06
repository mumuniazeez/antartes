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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <Link to="#" className="text-3xl font-raleway font-bold text-white">
          Antartes
        </Link>
        <nav>
          <ul className="flex gap-10 text-white">
            <li>
              <Link to="#" className="nav-active">
                Home
              </Link>
            </li>
            <li>
              <Link to="#">Services</Link>
            </li>
            <li>
              <Link to="#">Cases</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
          </ul>
        </nav>
        <ButtonBG>Get Started</ButtonBG>
      </div>
    </header>
  );
}
