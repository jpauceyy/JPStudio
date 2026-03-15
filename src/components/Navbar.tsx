import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? "p-4" : "p-6 mix-blend-difference"
        }`}
    >
      <div
        className={`flex justify-between items-center w-full transition-all duration-500 ${isScrolled
            ? "max-w-4xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-2xl"
            : "max-w-full py-0 px-0"
          }`}
      >
        <div className={`transition-all duration-500 ${isScrolled ? "w-8 h-8" : "w-12 h-12"}`}>
          <img src="/jplogo.png" alt="Logo" className="w-full h-full object-contain" />
        </div>
        <button className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">
          <span className={isScrolled ? "hidden sm:inline" : ""}>Menu</span>
          <Menu size={isScrolled ? 18 : 20} className="transition-all duration-500" />
        </button>
      </div>
    </motion.nav>
  );
}
