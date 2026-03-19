import React, { useState, useRef } from "react";
import { motion, useMotionValue, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Twitter } from "lucide-react";

const BehanceIcon = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.22 10.96c1.11 0 1.9-.3 2.37-.88.47-.59.71-1.39.71-2.4 0-1.01-.24-1.81-.71-2.4-.47-.59-1.26-.88-2.37-.88H2v7.44h6.22zm-3.6-5.04h2.7c.6 0 1.05.12 1.35.36.3.24.45.63.45 1.17 0 .54-.15.93-.45 1.17-.3.24-.75.36-1.35.36H4.62V5.92zm4.32 12.6c1.2 0 2.07-.33 2.61-.99.54-.66.81-1.56.81-2.7 0-1.14-.27-2.04-.81-2.7-.54-.66-1.41-.99-2.61-.99H2v7.38h6.94zm-4.32-5.1h3.3c.72 0 1.23.15 1.53.45.3.3.45.75.45 1.35 0 .6-.15 1.05-.45 1.35-.3.3-.81.45-1.53.45H4.62v-3.6zm13.68-1.8c-1.14 0-2.04.36-2.7 1.08-.66.72-.99 1.68-.99 2.88 0 1.2.33 2.16.99 2.88.66.72 1.56 1.08 2.7 1.08 1.14 0 2.04-.36 2.7-1.08.66-.72.99-1.68.99-2.88 0-1.2-.33-2.16-.99-2.88-.66-.72-1.56-1.08-2.7-1.08zm-1.08 3.24c.18-.36.48-.54.9-.54.42 0 .72.18.9.54.18.36.27.84.27 1.44h-2.34c0-.6.09-1.08.27-1.44zm3.42-7.56h-4.68v1.44h4.68V7.32z" />
    </svg>
);

const DiscordIcon = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
);

interface iNavItem {
    heading: string;
    href: string;
    subheading?: string;
    imgSrc?: string;
}

interface iNavLinkProps extends iNavItem {
    setIsActive: (isActive: boolean) => void;
    index: number;
}

interface iCurvedNavbarProps {
    setIsActive: (isActive: boolean) => void;
    navItems: iNavItem[];
}

interface iHeaderProps {
    navItems?: iNavItem[];
    footer?: React.ReactNode;
}

const MENU_SLIDE_ANIMATION = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: {
        x: "calc(100% + 100px)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
};

const defaultNavItems: iNavItem[] = [
    {
        heading: "Home",
        href: "#",
        subheading: "Welcome to our website",
    },
    {
        heading: "Work",
        href: "#work",
        subheading: "View our components",
    },
    {
        heading: "Experience",
        href: "#experience",
        subheading: "What we offer",
    },
    {
        heading: "About",
        href: "#about",
        subheading: "Who we are",
    },
    {
        heading: "Contact",
        href: "#contact",
        subheading: "Get in touch with us",
    },
];

const CustomFooter: React.FC = () => {
    return (
        <div className="flex w-full text-sm justify-between text-black px-10 md:px-24 py-5">
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                <BehanceIcon size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter size={24} />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <DiscordIcon size={24} />
            </a>
            <div className="w-6 h-6"></div> {/* Blank icon */}
        </div>
    );
};

const NavLink: React.FC<iNavLinkProps> = ({
    heading,
    href,
    setIsActive,
    index,
}) => {
    const ref = useRef<HTMLAnchorElement | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        const rect = ref.current!.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / rect.width - 0.5);
        y.set(mouseY / rect.height - 0.5);
    };

    const handleClick = () => {
        return setIsActive(false);
    };

    return (
        <motion.div
            onClick={handleClick}
            initial="initial"
            whileHover="whileHover"
            className="group relative flex items-center justify-between border-b border-black/30 py-4 transition-colors duration-500 md:py-8 uppercase"
        >
            <a ref={ref} onMouseMove={handleMouseMove} href={href}>
                <div className="relative flex items-start">
                    <span className="text-black transition-colors duration-500 text-4xl font-thin mr-2">
                        {index}.
                    </span>
                    <div className="flex flex-row gap-2">
                        <motion.span
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: -16 },
                            }}
                            transition={{
                                type: "spring",
                                staggerChildren: 0.075,
                                delayChildren: 0.25,
                            }}
                            className="relative z-10 block text-4xl font-extralight text-black transition-colors duration-500 md:text-4xl"
                        >
                            {heading.split("").map((letter, i) => {
                                return (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            initial: { x: 0 },
                                            whileHover: { x: 16 },
                                        }}
                                        transition={{ type: "spring" }}
                                        className="inline-block"
                                    >
                                        {letter}
                                    </motion.span>
                                );
                            })}
                        </motion.span>
                    </div>
                </div>
            </a>
        </motion.div>
    );
};

const Curve: React.FC = () => {
    const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
    const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

    const curve = {
        initial: { d: initialPath },
        enter: {
            d: targetPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: initialPath,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        },
    };

    return (
        <svg
            className="absolute top-0 -left-[99px] w-[100px] stroke-none h-full"
            style={{ fill: "#ffffff" }}
        >
            <motion.path
                variants={curve}
                initial="initial"
                animate="enter"
                exit="exit"
            />
        </svg>
    );
};

const CurvedNavbar: React.FC<
    iCurvedNavbarProps & { footer?: React.ReactNode }
> = ({ setIsActive, navItems, footer }) => {
    return (
        <motion.div
            variants={MENU_SLIDE_ANIMATION}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-[100dvh] w-screen max-w-screen-sm fixed right-0 top-0 z-40 bg-white"
        >
            <div className="h-full pt-11 flex flex-col justify-between">
                <div className="flex flex-col text-5xl gap-3 mt-0 px-10 md:px-24">
                    <div className="text-black border-b border-black/30 uppercase text-sm mb-0">
                        <p>Navigation</p>
                    </div>
                    <section className="bg-transparent mt-0">
                        <div className="mx-auto max-w-7xl">
                            {navItems.map((item, index) => {
                                return (
                                    <NavLink
                                        key={item.href}
                                        {...item}
                                        setIsActive={setIsActive}
                                        index={index + 1}
                                    />
                                );
                            })}
                        </div>
                    </section>
                </div>
                {footer}
            </div>
            <Curve />
        </motion.div>
    );
};

export const Header: React.FC<iHeaderProps> = ({
    navItems = defaultNavItems,
    footer = <CustomFooter />,
}) => {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const openAudioRef = useRef<HTMLAudioElement | null>(null);
    const closeAudioRef = useRef<HTMLAudioElement | null>(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const handleClick = () => {
        if (isActive) {
            closeAudioRef.current?.play();
        } else {
            openAudioRef.current?.play();
        }
        setIsActive(!isActive);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? "p-4" : "p-4 md:p-6 mix-blend-difference"
                    }`}
            >
                <div
                    className={`flex justify-between items-center w-full transition-all duration-500 border ${isScrolled
                            ? "max-w-4xl bg-black/40 backdrop-blur-xl border-white/10 rounded-full py-3 px-4 md:px-6 shadow-2xl"
                            : "max-w-full bg-transparent border-white/0 rounded-full py-3 px-4 md:px-6"
                        }`}
                >
                    <div className={`transition-all duration-500 ${isScrolled ? "w-8 h-8" : "w-12 h-12"}`}>
                        <img src="/jplogo-header.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>

                    <div
                        onClick={handleClick}
                        className={`flex items-center justify-center cursor-pointer transition-all duration-500 ${isScrolled ? "w-10 h-10 bg-white rounded-full" : "w-12 h-12 bg-white rounded-none"
                            }`}
                    >
                        <div className={`relative flex flex-col justify-between items-center ${isScrolled ? "w-5 h-4" : "w-8 h-6"}`}>
                            <span
                                className={`block bg-black transition-transform duration-300 ${isScrolled ? "h-[2px] w-5" : "h-1 w-7"} ${isActive ? (isScrolled ? "rotate-45 translate-y-1.5" : "rotate-45 translate-y-2.5") : ""
                                    }`}
                            ></span>
                            <span
                                className={`block bg-black transition-opacity duration-300 ${isScrolled ? "h-[2px] w-5" : "h-1 w-7"} ${isActive ? "opacity-0" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block bg-black transition-transform duration-300 ${isScrolled ? "h-[2px] w-5" : "h-1 w-7"} ${isActive ? (isScrolled ? "-rotate-45 -translate-y-2" : "-rotate-45 -translate-y-2.5") : ""
                                    }`}
                            ></span>
                        </div>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence mode="wait">
                {isActive && (
                    <CurvedNavbar
                        setIsActive={setIsActive}
                        navItems={navItems}
                        footer={footer}
                    />
                )}
            </AnimatePresence>
        </>
    );
};
