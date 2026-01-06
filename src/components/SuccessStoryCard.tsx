import { ArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";

export default function SuccessStoryCard({
  story,
}: {
  story: { image: string; title: string; description: string };
}) {
  return (
    <div className="flex flex-col min-w-[350px] md:min-w-[450px]">
      <div className="relative">
        <img
          src={story.image}
          alt={story.title}
          className="rounded-2xl w-full h-[300px] object-cover"
        />
      </div>
      <div className="bg-white -mt-20 mx-4 rounded-2xl p-6 shadow-lg z-10 relative">
        <h3 className="text-2xl font-semibold">{story.title}</h3>
        <p className="text-[14px] text-gray-600 my-4 leading-relaxed line-clamp-3">
          {story.description}
        </p>
        <Link
          to={"#"}
          className="flex items-center gap-2 text-primary font-medium hover:underline"
        >
          Learn more <HugeiconsIcon icon={ArrowRight} size={20} />
        </Link>
      </div>
    </div>
  );
}
