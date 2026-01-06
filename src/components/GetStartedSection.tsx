import { ButtonBG } from "./ui/button";
import getStartedImg from "../assets/image/get-started-img.png";

export default function GetStartedSection() {
  return (
    <div className="mx-20 my-20 px-20 py-10 bg-black h-90 relative rounded-4xl flex flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="625"
        height="778"
        viewBox="0 0 625 778"
        fill="none"
        className="absolute bottom-0 left-0"
      >
        <g filter="url(#filter0_f_546_150)">
          <ellipse
            cx="225.681"
            cy="388.87"
            rx="48.5"
            ry="108.777"
            transform="rotate(129.686 225.681 388.87)"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_546_150"
            x="-173.599"
            y="0"
            width="798.56"
            height="777.741"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="155"
              result="effect1_foregroundBlur_546_150"
            />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="604"
        height="770"
        viewBox="0 0 604 770"
        fill="none"
        className="absolute top-0 right-0"
      >
        <g filter="url(#filter0_f_546_149)">
          <ellipse
            cx="402.598"
            cy="384.944"
            rx="48.5"
            ry="108.777"
            transform="rotate(125.92 402.598 384.944)"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_546_149"
            x="0"
            y="0"
            width="805.196"
            height="769.887"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="155"
              result="effect1_foregroundBlur_546_149"
            />
          </filter>
        </defs>
      </svg>
      <div className="text-center text-white z-3">
        <h1 className="text-4xl font-bold">
          Ready to elevate your digital presence? Let’s build something that
          works.
        </h1>
        <p className="text-white/75 mt-3">
          Partner with Antartes to build scalable digital solutions that grow
          with your business.
        </p>
      </div>
      <div className="w-fit mt-auto mx-auto z-3">
        <ButtonBG>Get Started</ButtonBG>
        <img
          src={getStartedImg}
          alt="get-started-img"
          className="relative left-[calc(100%-50px)]"
          draggable={false}
        />
      </div>
    </div>
  );
}
