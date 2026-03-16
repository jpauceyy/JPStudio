import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";

const experiences = [
  {
    id: 1,
    role: "Esports Teams Revamps",
    date: "2015 - Present",
  },
  {
    id: 2,
    role: "Video Editor",
    date: "2018 - 2020",
  },
  {
    id: 3,
    role: "UI/UX Designer",
    date: "2018 - Present",
  },
  {
    id: 4,
    role: "Graphics",
    date: "2015 - Present",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6 md:px-12 lg:px-24 bg-black relative"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="font-display text-5xl md:text-8xl uppercase tracking-tighter mb-24 border-b border-neutral-800 pb-12">
            Experience
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-0">
          {experiences.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 0.1}>
              <motion.div
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-neutral-800 hover:border-white transition-colors duration-500 cursor-pointer"
                whileHover="hover"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 mb-4 md:mb-0">
                  <h3 className="font-display text-3xl md:text-5xl uppercase tracking-tight group-hover:text-brand-blue transition-colors duration-500">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-col md:items-end gap-1 font-mono text-xs md:text-sm uppercase tracking-widest text-neutral-400">
                  <span>{exp.date}</span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
