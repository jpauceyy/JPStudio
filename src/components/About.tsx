import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-12 lg:px-24 bg-black relative"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="font-display text-5xl md:text-8xl uppercase tracking-tighter mb-24 border-b border-neutral-800 pb-12">
            About Me
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="md:col-span-5 relative">
            <FadeIn>
              <motion.div
                className="aspect-[3/4] overflow-hidden border border-neutral-800 relative group"
                whileHover="hover"
              >
                <motion.img
                  src="/aboutme.png"
                  alt="Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 ease-out"
                  variants={{
                    hover: { scale: 1.05, filter: "grayscale(0%)", opacity: 1 },
                  }}
                />
                <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none" />
              </motion.div>
            </FadeIn>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center">
            <FadeIn delay={0.2}>
              <p className="font-sans text-2xl md:text-4xl leading-tight font-light mb-12 text-neutral-300">
                I believe in stripping away the unnecessary. My design
                philosophy is rooted in brutalism and minimalism—focusing on raw
                content, stark contrasts, and intentional typography.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-neutral-500 mb-12">
                Every pixel serves a purpose.
                When I'm not designing, I'm probably gaming or curating obscure playlists.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col gap-4 font-mono text-sm uppercase tracking-widest text-neutral-400">
                <div className="flex justify-between border-b border-neutral-800 pb-4">
                  <span>Location</span>
                  <span className="text-white">Digital Void</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-4">
                  <span>Focus</span>
                  <span className="text-white">UI/UX, eSports designs</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-4">
                  <span>Status</span>
                  <span className="text-brand-blue">
                    Available for freelance
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
