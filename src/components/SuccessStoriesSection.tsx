import SuccessStoryCard from "./SuccessStoryCard";
import { ButtonBG } from "./ui/button";
import storyImg1 from "../assets/image/story1-img.png";
import storyImg2 from "../assets/image/story2-img.png";
import storyImg3 from "../assets/image/story3-img.png";

const stories: { image: string; title: string; description: string }[] = [
  {
    title: "Revolutionizing Logistics",
    description:
      "We partnered with a global shipping firm to automate their supply chain, reducing delivery times by 30% through advanced AI routing and real-time tracking systems.",
    image: storyImg1,
  },
  {
    title: "Scaling SaaS Infrastructure",
    description:
      "Our team helped a growing startup transition to a microservices architecture, enabling them to handle 10x more traffic with zero downtime during peak periods.",
    image: storyImg2,
  },
  {
    title: "Sustainable Tech Solutions",
    description:
      "Implementing green computing practices, we reduced a client's data center energy consumption by 40% while maintaining top-tier performance benchmarks.",
    image: storyImg3,
  },
  {
    title: "Empowering FinTech Innovation",
    description:
      "We built a secure, blockchain-based payment gateway that handles thousands of transactions per second, ensuring speed and reliability for global users.",
    image: storyImg1,
  },
  {
    title: "Transforming E-commerce UX",
    description:
      "By redesigning the customer journey and optimizing page loads, we increased conversion rates for a major retailer by 25% across all mobile platforms.",
    image: storyImg1,
  },
];
export default function SuccessStoriesSection() {
  return (
    <div className="py-20" id="cases-section">
      <div className="px-6 md:px-20 mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins leading-tight">
            Compilation of our <br className="hidden md:block" /> Success
            Stories
          </h1>
          <ButtonBG>Read more</ButtonBG>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-8 overflow-x-auto pb-8 px-6 md:px-20 no-scrollbar snap-x snap-mandatory scroll-smooth">
          {stories.map((story, i) => (
            <div key={i} className="snap-center">
              <SuccessStoryCard story={story} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
