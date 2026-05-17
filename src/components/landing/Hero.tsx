import { motion, useReducedMotion } from "framer-motion";
import { StaggerWords } from "./motion-primitives";
import hero from "@/assets/food/star-dosa.jpg";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-28 pb-20 md:pt-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-foreground/60"
        >
          <span className="h-px w-10 bg-foreground/40" />
          Borivali West · Mumbai
        </motion.p>

        <h1 className="font-display text-[clamp(2.75rem,9vw,8.5rem)] leading-[0.95] tracking-tight text-foreground">
          <StaggerWords text="Agla stop" />
          <br />
          <span className="italic text-[var(--chaat)]">
            <StaggerWords text="hamare corner pe." />
          </span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4 }}
            className="md:col-span-5 md:col-start-1 text-lg md:text-xl leading-relaxed text-foreground/75 max-w-md"
          >
            A family-friendly corner serving Mumbai's most loved <em className="font-display not-italic text-[var(--chutney)]">dosas, sandwiches and chaat</em> — piled high, dressed loud, and made with love since day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 1.1, clipPath: "inset(15% 15% 15% 15% round 24px)" }}
            animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 24px)" }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-warm)]"
          >
            <img src={hero} alt="Signature star-shaped masala dosa" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--ink)]/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[var(--cream)]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] opacity-80">Signature</p>
                <p className="font-display text-2xl md:text-3xl">Star Masala Dosa</p>
              </div>
              <span className="hidden md:block font-display text-sm opacity-80">— since the corner began</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
