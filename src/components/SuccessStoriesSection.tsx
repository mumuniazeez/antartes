import SuccessStoryCard from "./SuccessStoryCard";
import { ButtonBG } from "./ui/button";
import storyImg1 from "../assets/image/story1-img.png";

const stories: { image: string; title: string; description: string }[] = [
  {
    title: "Turning Vision into Impact",
    description:
      "Every milestone we achieve is powered by commitment, innovation, and trust. These success stories reflect our journey of solving real challenges, creating value, and delivering results that matter.",
    image: storyImg1,
  },
  {
    title: "Turning Vision into Impact",
    description:
      "Every milestone we achieve is powered by commitment, innovation, and trust. These success stories reflect our journey of solving real challenges, creating value, and delivering results that matter.",
    image: storyImg1,
  },
  {
    title: "Turning Vision into Impact",
    description:
      "Every milestone we achieve is powered by commitment, innovation, and trust. These success stories reflect our journey of solving real challenges, creating value, and delivering results that matter.",
    image: storyImg1,
  },
];
export default function SuccessStoriesSection() {
  return (
    <>
      <div className="px-20 py-20">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold font-poppins">
            Compilation of our <br /> Success Stories
          </h1>
          <ButtonBG>Read more</ButtonBG>
        </div>
      </div>
      <div className="flex gap-10 mb-2">
        {stories.map((story, i) => (
          <SuccessStoryCard key={i} story={story} />
        ))}
      </div>
    </>
  );
}
