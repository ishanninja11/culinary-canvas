import { Reveal } from "./motion-primitives";

const blocks = [
  { label: "Visit", body: "Shop No. 10, Venus Apartment\nopp. Joggers Park Road\nChikoowadi, Borivali West\nMumbai 400092" },
  { label: "Hours", body: "Every day\n1:00 PM — 11:00 PM" },
  { label: "Call", body: "080808 09889", href: "tel:+918080809889" },
];

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/babafoodinn/" },
  { name: "Zomato", href: "https://www.zomato.com/mumbai/baba-food-inn-borivali-west" },
];

export function ContactStrip() {
  return (
    <section className="relative py-24 md:py-40" id="visit">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1] tracking-tight max-w-3xl">
            Find the corner.<br />
            <span className="italic text-[var(--chaat)]">Pull up a chair.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {blocks.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.08}>
              <div className="border-t border-foreground/15 pt-6">
                <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50 mb-4">{b.label}</p>
                {b.href ? (
                  <a href={b.href} className="font-display text-2xl md:text-3xl hover:text-[var(--chaat)] transition-colors">
                    {b.body}
                  </a>
                ) : (
                  <p className="font-display text-xl md:text-2xl whitespace-pre-line leading-snug">{b.body}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 flex flex-wrap items-center gap-6 border-t border-foreground/15 pt-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Follow</span>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative font-display text-2xl md:text-3xl"
              >
                <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                  {s.name}
                </span>
                <span className="ml-1 text-[var(--chaat)]">↗</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
