import { HoverEffect } from "../ui/HoverEffect";

export function CardHoverEffectDemo() {
  return (
    <section
      id="services"
      className="bg-black min-h-screen flex justify-center items-center"
    >
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}

// Projects Array
export const projects = [
  {
    id: 1,
    title: "Portfolio Development",
    description: "Custom portfolios to showcase your work beautifully.",
    link: "",
  },
  {
    id: 2,
    title: "Business Websites",
    description: "Professional websites tailored to your needs.",
    link: "",
  },
  {
    id: 3,
    title: "Presentation Design",
    description: "Engaging presentations that make an impact.",
    link: "",
  },
  {
    id: 4,
    title: "Design Logos",
    description: "Making logos that show what you need.",
    link: "",
  },
  {
    id: 5,
    title: "Organizing Documents",
    description:
      "Efficiently structuring and designing your documents to ensure clarity, professionalism, and ease of use.",
    link: "",
  },
  {
    id: 6,
    title: "Design Banners",
    description:
      "Creating visually striking banners tailored to captivate audiences and effectively convey your message across digital and print platforms.",
    link: "",
  },
];
