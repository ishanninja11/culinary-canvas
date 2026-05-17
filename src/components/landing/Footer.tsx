import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-[var(--ink)] text-[var(--cream)] py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-10 md:grid-cols-3 items-center">
        <img src={logo} alt="Baba Food Inn" width={120} height={120} loading="lazy" className="w-24 h-auto" />
        <p className="font-display text-lg italic text-center text-[var(--cream)]/80">
          "Agla stop hamare corner pe."
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--cream)]/60 md:text-right">
          © {new Date().getFullYear()} Baba Food Inn · Borivali West
        </p>
      </div>
    </footer>
  );
}
