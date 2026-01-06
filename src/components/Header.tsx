import { Link } from "react-router-dom";
import { ButtonBG } from "./ui/button";

export default function Header() {
  return (
    <header className="px-20 py-10 text-white fixed top-0 w-full z-100!">
      <div className="flex items-center justify-between">
        <Link to="#" className="text-3xl font-raleway font-bold">
          Antartes
        </Link>
        <nav>
          <ul className="flex gap-10">
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
