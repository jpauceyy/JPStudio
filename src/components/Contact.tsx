import { useState } from "react";
import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";
import { LiquidButton } from "./ui/liquid-glass-button";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    
    const formData = new FormData(e.currentTarget);
    
    try {
      // Using FormData without explicit Content-Type header often avoids CORS issues 
      // where the preflight request for JSON might fail in some local environments.
      const response = await fetch("https://formsubmit.co/ajax/j.paul2000@outlook.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
        // Keep success message visible
      } else {
        const result = await response.json().catch(() => ({ message: "Unknown error from server" }));
        console.error("FormSubmit Error:", result);
        setErrorMessage(result.message || "Submission failed. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission Error Details:", err);
      // If the email was actually sent but we hit this block, it's likely a CORS error on the response.
      setErrorMessage("The request failed, but please check your inbox (it may have still sent). If the error persists, ensure you have activated your form via the FormSubmit email.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 lg:px-24 bg-black relative"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="font-display text-5xl md:text-8xl uppercase tracking-tighter mb-24 border-b border-neutral-800 pb-12">
            Let's Talk
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-5">
            <FadeIn delay={0.1}>
              <p className="font-sans text-2xl md:text-4xl leading-tight font-light mb-12 text-neutral-300">
                Have a project in mind? Let's build something brutal together.
              </p>

              <div className="flex flex-col gap-6 font-mono text-sm uppercase tracking-widest text-neutral-400">
                <a
                  href="mailto:j.paul2000@outlook.com"
                  className="hover:text-white transition-colors"
                >
                  j.paul2000@outlook.com
                </a>
                <a href="https://x.com/JSPaul00" className="hover:text-white transition-colors">
                  Twitter / X
                </a>
                <a href="https://www.instagram.com/jpaui00" className="hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="https://www.behance.net/jpaul00" className="hover:text-white transition-colors">
                  Behance
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-7">
            <FadeIn delay={0.2}>
              {status === "success" ? (
                <div className="flex flex-col gap-8 items-start py-12">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-4"
                  >
                    <h3 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-none">
                      Message<br />Received.
                    </h3>
                    <div className="h-1 w-24 bg-white mt-4"></div>
                  </motion.div>
                  
                  <p className="font-mono text-sm uppercase tracking-widest text-neutral-400 mt-8 max-w-md leading-relaxed">
                    Thank you for reaching out. I've received your inquiry and will get back to you as soon as possible.
                  </p>
                  
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors border-b border-neutral-800 pb-2 flex items-center gap-4 group"
                  >
                    <span>Send another message</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-8"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New submission from your Brutalist Portfolio!" />
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-mono text-xs uppercase tracking-widest text-neutral-500"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="bg-transparent border-b border-neutral-800 pb-4 font-sans text-xl focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-mono text-xs uppercase tracking-widest text-neutral-500"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-transparent border-b border-neutral-800 pb-4 font-sans text-xl focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="project"
                      className="font-mono text-xs uppercase tracking-widest text-neutral-500"
                    >
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      className="bg-transparent border-b border-neutral-800 pb-4 font-sans text-xl focus:outline-none focus:border-white transition-colors appearance-none text-neutral-300"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a project type
                      </option>
                      <option value="branding">Branding</option>
                      <option value="web">Web Design</option>
                      <option value="app">eSports Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="font-mono text-xs uppercase tracking-widest text-neutral-500"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="bg-transparent border-b border-neutral-800 pb-4 font-sans text-xl focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <LiquidButton
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-8 font-display text-2xl uppercase tracking-tighter py-6 px-12 w-full md:w-auto self-start disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : status === "error" ? "Error! Try Again" : "Submit"}
                  </LiquidButton>
                  
                  {status === "error" && (
                    <div className="mt-4">
                      <p className="text-red-500 font-mono text-sm uppercase tracking-widest">
                        Something went wrong.
                      </p>
                      <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest mt-1 italic">
                        {errorMessage}
                      </p>
                    </div>
                  )}
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
