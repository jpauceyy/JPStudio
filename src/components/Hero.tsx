import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function Hero() {
  const words = [
    { text: "Sup," },
    { text: "I'm" },
    { text: "Joe.", newline: true },
    { text: "I", className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500" },
    { text: "Design", className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500" },
    { text: "Visuals.", className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <FadeIn delay={0.1}>
          <TypewriterEffect
            words={words}
            className="font-display text-[12vw] md:text-[8vw] leading-[100] tracking-tighter uppercase mb-8 text-left"
            cursorClassName="h-[10vw] md:h-[7vw] bg-white ml-2"
          />
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16">
            <div className="md:col-span-5 md:col-start-8">
              <p className="font-sans text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
                I craft digital experiences that are brutal, minimal, and
                unforgettable. Currently based in the digital void, building
                things that matter.
              </p>

              <div className="mt-12 flex gap-6 items-center">
                <a
                  href="#work"
                  className="font-mono text-sm uppercase tracking-widest border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-colors"
                >
                  View Work
                </a>
                <a
                  href="#contact"
                  className="font-mono text-sm uppercase tracking-widest border-b border-transparent pb-1 hover:border-white transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Decorative brutalist elements */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="absolute bottom-12 left-0 w-full h-[1px] bg-neutral-800 origin-left"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 right-6 md:right-12 font-mono text-[10px] text-neutral-600 uppercase tracking-widest"
      >
        Scroll to explore ↓
      </motion.div>
    </section>
  );
}
