import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";

const projects = [
  {
    id: 1,
    title: "IXO eSports Revamp",
    tags: ["Branding", "Graphic Design"],
    image: "/IXO.jpg",
    aspectRatio: "aspect-[4/5]",
    offset: "mt-0",
    link: "https://www.behance.net/gallery/185491745/IXO-eSports-Graphics", // Add your link here
  },
  {
    id: 2,
    title: "LF Coaching",
    tags: ["Web Design", "UI/UX"],
    image: "/LF.jpg",
    aspectRatio: "aspect-square",
    offset: "md:mt-32",
    link: "www.lukefenners.com/", // Add your link here
  },
  {
    id: 3,
    title: "OBN",
    tags: ["Branding", "Graphic Design"],
    image: "/obn.jpg",
    aspectRatio: "aspect-[2/3]",
    offset: "mt-0",
    link: "https://www.behance.net/gallery/169496687/OXC-eSports-Graphics", // Add your link here
  },
  {
    id: 4,
    title: "ACCL",
    tags: ["Branding", "Graphic Design"],
    image: "/accl.jpg",
    aspectRatio: "aspect-[4/3]",
    offset: "md:mt-32",
    link: "https://www.behance.net/gallery/137788177/ACCL-Revamp-Graphics", // Add your link here
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
              {/* Wrapped the motion div in an anchor tag */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
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
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}