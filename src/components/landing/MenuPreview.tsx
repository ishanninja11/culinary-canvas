import { Reveal } from "./motion-primitives";

const sections = [
  {
    title: "Dosas",
    accent: "var(--mustard)",
    items: [
      { name: "Star Masala Dosa", desc: "Crisp dosa pressed into a star, filled with spiced potato." },
      { name: "Cheese Schezwan Dosa", desc: "Molten cheese meets Indo-Chinese fire." },
    ],
  },
  {
    title: "Sandwiches",
    accent: "var(--chutney)",
    items: [
      { name: "Pizza Sandwich", desc: "Grilled sourdough, marinara, melted mozzarella." },
      { name: "Bombay Chutney Grill", desc: "Mint chutney, veggies and butter — the classic." },
    ],
  },
  {
    title: "Chaat",
    accent: "var(--chaat)",
    items: [
      { name: "Cheese Loaded Bhel", desc: "Puffed rice, tangy chutneys, blanket of cheese." },
      { name: "Sev Puri", desc: "Crisp puris, tamarind, mint, sev — a Mumbai must." },
    ],
  },
];

export function MenuPreview() {
  return (
    <section className="relative py-24 md:py-40 bg-[var(--ink)] text-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--mustard)] mb-6">A taste of the menu</p>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1] tracking-tight max-w-3xl">
            Three categories.<br />
            <span className="italic text-[var(--mustard)]">Endless cravings.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-16 md:grid-cols-3">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="border-t border-[var(--cream)]/15 pt-6">
                <h3 className="font-display text-3xl md:text-4xl mb-8" style={{ color: s.accent }}>
                  {s.title}
                </h3>
                <ul className="space-y-8">
                  {s.items.map((it) => (
                    <li key={it.name} className="group">
                      <p className="font-display text-xl md:text-2xl">{it.name}</p>
                      <p className="mt-2 text-sm text-[var(--cream)]/65 leading-relaxed">{it.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-20 text-sm text-[var(--cream)]/50 max-w-md">
            A small preview — the full menu lives at the corner, written on a board and on every regular's heart.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
