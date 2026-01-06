import weirdMapImg from "../assets/image/weird-map.png";
import { ButtonBG } from "./ui/button";
export default function ClientGeographySection() {
  return (
    <div
      id="about-section"
      className="px-20 py-20 bg-black text-white flex items-center justify-center gap-y-20 md:gap-y-0 md:gap-x-20 flex-col-reverse md:flex-row "
    >
      <div>
        <img src={weirdMapImg} alt="map" />
      </div>
      <div>
        <h2 className="text-4xl md:text-5xl font-bold font-poppins leading-tight">
          We work for client all over the world.
        </h2>
        <p className="text-[16px] my-4 leading-relaxed">
          Partnering with clients both internationally and locally, we deliver
          thoughtfully built digital solutions designed to perform consistently
          across regions and scales.
        </p>
        <div className="flex items-center gap-x-20">
          <div>
            <h3 className="text-4xl font-bold text-shadow-[0px_0px_7px_#FFFFFFA6]">
              200
            </h3>
            <p className="text-[14px]">International Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-shadow-[0px_0px_7px_#FFFFFFA6]">
              300
            </h3>
            <p className="text-[14px]">Local Clients</p>
          </div>
        </div>
        <ButtonBG className="mt-5">Request a service</ButtonBG>
      </div>
    </div>
  );
}
