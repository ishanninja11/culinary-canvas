import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import logo from "@/assets/logo.png";

export function IntroLogo({ open, onEnter }: { open: boolean; onEnter: () => void }) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-50 grain overflow-hidden"
          style={{ background: "var(--gradient-warm)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* curtain wipes */}
          <motion.div
            className="absolute inset-0 bg-[var(--chaat)]"
            initial={{ y: "100%" }}
            exit={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-0 bg-[var(--mustard)]"
            initial={{ y: "100%" }}
            exit={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
          />

          <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
            <motion.button
              type="button"
              onClick={onEnter}
              aria-label="Enter Baba Food Inn"
              className="group relative flex flex-col items-center gap-6 outline-none"
              initial={{ opacity: 0, scale: reduce ? 1 : 0.85, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.2, y: -40, filter: "blur(8px)" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={reduce ? {} : { y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={logo}
                  alt="Baba Food Inn"
                  width={420}
                  height={420}
                  className="w-[60vw] max-w-[420px] drop-shadow-[0_20px_60px_rgba(224,67,43,0.25)] transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </motion.div>
              <motion.span
                className="text-[10px] uppercase tracking-[0.4em] text-ink/60"
                animate={reduce ? {} : { opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                Tap to enter
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
