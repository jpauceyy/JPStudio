import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";

const projects = [
  {
    id: 1,
    title: "IXO eSports Revamp",
    tags: ["Branding", "Graphic Design"],
    image: "/ixo.png",
    aspectRatio: "aspect-[4/5]",
    offset: "mt-0",
  },
  {
    id: 2,
    title: "Brutal Architecture",
    tags: ["Web Design", "UI/UX"],
    image: "https://picsum.photos/seed/brutal/800/800?blur=1",
    aspectRatio: "aspect-square",
    offset: "md:mt-32",
  },
  {
    id: 3,
    title: "Silent Echoes",
    tags: ["Typography", "Print"],
    image: "https://picsum.photos/seed/silent/800/1200?blur=3",
    aspectRatio: "aspect-[2/3]",
    offset: "mt-0",
  },
  {
    id: 4,
    title: "Digital Scrapbook",
    tags: ["Interactive", "Development"],
    image: "https://picsum.photos/seed/scrap/800/600?blur=2",
    aspectRatio: "aspect-[4/3]",
    offset: "md:mt-32",
  },
];

export function Work() {
  return (
    <section
      id="work"
      className="py-32 px-6 md:px-12 lg:px-24 bg-black relative"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="font-display text-5xl md:text-8xl uppercase tracking-tighter mb-24 border-b border-neutral-800 pb-12">
            Selected Work
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, index) => (
            <FadeIn
              key={project.id}
              delay={index * 0.1}
              className={project.offset}
            >
              <motion.div
                className="group cursor-pointer relative"
                whileHover="hover"
              >
                <div
                  className={`overflow-hidden border border-neutral-800 ${project.aspectRatio}`}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 ease-out"
                    variants={{
                      hover: {
                        scale: 1.05,
                        filter: "grayscale(0%)",
                        opacity: 1,
                      },
                    }}
                  />
                </div>

                <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-neutral-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
