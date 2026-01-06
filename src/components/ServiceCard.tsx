import { ArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { Link } from "react-router-dom";

export default function ServiceCard({
  service,
}: {
  service: {
    title: string;
    description: string;
    icon: IconSvgElement;
    link: string;
  };
}) {
  return (
    <div className="flex flex-col bg-white group hover:bg-black hover:text-white transition-all duration-300 p-10 rounded-2xl hover:rotate-[-4.34deg]">
      <HugeiconsIcon icon={service.icon} />
      <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
      <p className="text-[14px] transition-all duration-300 text-black/75 group-hover:text-white/75 my-4 leading-relaxed">
        {service.description}
      </p>
      <Link
        to={service.link}
        className="flex items-center gap-2 font-medium transition-all duration-300 group-hover:text-primary mt-auto"
      >
        Learn more <HugeiconsIcon icon={ArrowRight} size={20} />
      </Link>
    </div>
  );
}
