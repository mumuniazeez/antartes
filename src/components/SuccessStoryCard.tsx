import { ArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";

export default function SuccessStoryCard({
  story,
}: {
  story: { image: string; title: string; description: string };
}) {
  return (
    <div className="flex flex-col">
      <img src={story.image} alt={story.title} className="rounded-2xl" />
      <div className="bg-white -mt-20 mx-4 rounded-2xl p-3">
        <h3 className="text-2xl">{story.title}</h3>
        <p className="text-[13px] my-4">{story.description}</p>
        <Link to={"#"} className="flex items-center">
          Learn more <HugeiconsIcon icon={ArrowRight} />
        </Link>
      </div>
    </div>
  );
}
