import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <main className="bg-black text-white min-h-screen font-sans overflow-hidden flex flex-col justify-between">
            {/* Header area (empty or minimal) */}
            <div className="p-6 md:p-12 flex justify-between items-center">
                <div className="w-12 h-12 mix-blend-difference">
                    <Link to="/">
                        <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain hover:opacity-70 transition-opacity" />
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center"
                >
                    <h1 className="text-7xl md:text-[12rem] font-light tracking-tighter mb-8 leading-none">
                        404
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-400 font-light mb-12 tracking-wide">
                        Page not found
                    </p>

                    <Link
                        to="/"
                        className="group flex items-center gap-4 text-sm md:text-base font-mono uppercase tracking-widest hover:text-neutral-300 transition-colors border border-white/20 rounded-full px-8 py-4 hover:bg-white/5"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to main page
                    </Link>
                </motion.div>
            </div>

            {/* Footer area */}
            <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
                    © {new Date().getFullYear()} JP Studio.
                </p>
                <div className="flex gap-6">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors">
                        GitHub
                    </a>
                </div>
            </footer>
        </main>
    );
}
