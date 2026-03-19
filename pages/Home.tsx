import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Work } from "../components/Work";
import { Experience } from "../components/Experience";
import { About } from "../components/About";
import { Logos } from "../components/Logos";
import { Contact } from "../components/Contact";

export function Home() {
    return (
        <main className="bg-black text-white min-h-screen font-sans overflow-hidden">
            <Header />
            <Hero />
            <Work />
            <Experience />
            <About />
            <Contact />
            <Logos />

            <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-neutral-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
                    © {new Date().getFullYear()} JP Studio. All rights reserved.
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
                    Designed in the void.
                </p>
            </footer>
        </main>
    );
}
