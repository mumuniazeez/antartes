import { ArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";

export default function CaseStudyCard({
  caseStudy,
}: {
  caseStudy: {
    image: string;
    title: string;
    description: string;
    link: string;
  };
}) {
  return (
    <Link
      to={caseStudy.link}
      className="flex flex-col min-w-[350px] md:min-w-[450px]"
    >
      <div className="relative">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="rounded-2xl w-full h-[300px] object-cover"
        />
      </div>
      <div className="bg-white -mt-20 mx-4 rounded-2xl p-6 shadow-lg z-10 relative">
        <h3 className="text-2xl font-semibold">{caseStudy.title}</h3>
        <p className="text-[14px] text-gray-600 my-4 leading-relaxed line-clamp-3">
          {caseStudy.description}
        </p>
        <Link
          to={caseStudy.link}
          className="flex items-center gap-2 font-medium"
        >
          View All <HugeiconsIcon icon={ArrowRight} size={20} />
        </Link>
      </div>
    </Link>
  );
}
