import {
  Facebook02Icon,
  InstagramIcon,
  Linkedin02Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full h-[470px] bg-primary/20 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-[90%] border-b border-gray-500 pb-10">
        <div className="flex w-full items-center justify-between">
          <div>
            <h2 className="text-[20px] font-bold text-[#5B5B5B]">Antartes</h2>
            <p className="text-[#5B5B5B] font-normal text-[15px] mt-5">
              We build custom software solutions that <br /> bring your ideas to
              life
            </p>

            <div className="flex space-x-4 mt-10">
              <Link to="#" target="_blank">
                <HugeiconsIcon icon={Linkedin02Icon} />
              </Link>
              <Link to="#" target="_blank">
                <HugeiconsIcon icon={Facebook02Icon} />
              </Link>
              <Link to="#" target="_blank">
                <HugeiconsIcon icon={NewTwitterIcon} />
              </Link>
              <Link to="#" target="_blank">
                <HugeiconsIcon icon={InstagramIcon} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[20px] font-bold">Home</h3>
            <ul className="flex flex-col mt-5">
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Case Studies</Link>
              </li>
              <li>
                <Link to="#">Our Projects</Link>
              </li>
              <li>
                <Link to="#">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[20px] font-bold">About</h3>
            <ul className="flex flex-col mt-5">
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Case Studies</Link>
              </li>
              <li>
                <Link to="#">Our Projects</Link>
              </li>
              <li>
                <Link to="#">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[20px] font-bold">Services</h3>
            <ul className="flex flex-col mt-5">
              <li>
                <Link to="#">SEO</Link>
              </li>
              <li>
                <Link to="#">Project Manager</Link>
              </li>
              <li>
                <Link to="#">Social Media</Link>
              </li>
              <li>
                <Link to="#">See All</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[20px] font-bold">For Companies</h3>
            <ul className="flex flex-col mt-5">
              <li className="text-[#5B5B5B] font-normal text-[20px]">
                Work with us
              </li>
              <li>Contact us</li>
              <li>Contact us</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-[#5B5B5B] font-normal text-[15px] mt-10">
        © 2024 Antartes. All rights reserved.
      </p>
    </footer>
  );
}
