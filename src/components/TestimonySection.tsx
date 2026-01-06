import TestimonyCard from "./TestimonyCard";

const testimonials: {
  name: string;
  position: string;
  testimonial: string;
}[] = [
  {
    name: "Mumuni Abdulazeez",
    position: "CEO, Ideaout",
    testimonial:
      "We tried multiple digital marketing strategies in the past, but none delivered the results we were aiming for. After just one session with Antartes, our online presence and engagement improved significantly. The difference was clear almost immediately, and the impact exceeded our expectations.",
  },
  {
    name: "Akalugwu Chidebere",
    position: "Product Designer",
    testimonial:
      "Working with Antartes brought clarity to our digital strategy. Their approach was structured, thoughtful, and focused on real results. We saw noticeable improvements in performance and engagement shortly after implementation.",
  },
  {
    name: "Edunfunke Sunshine",
    position: "CEO, TechFirm Tech Agency",
    testimonial:
      "Antartes took the time to understand our goals before offering solutions. The outcome was a well-designed digital system that improved our workflow and strengthened our online presence.",
  },
];

export default function TestimonySection() {
  return (
    <div className="py-20 px-20">
      <h1 className="text-4xl md:text-5xl font-bold font-poppins leading-tight">
        Testimonials
      </h1>
      <p className="text-black/60">
        Hear from clients who’ve worked with us and experienced the impact of
        our solutions.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <TestimonyCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
