import { Reveal, ParallaxImage } from "./motion-primitives";
import bhel from "@/assets/food/cheese-bhel.jpg";
import bowl from "@/assets/food/cheese-bowl.jpg";
import ring from "@/assets/food/cheese-ring.jpg";
import cone from "@/assets/food/cone-dosa.jpg";

const dishes = [
  { img: bhel, name: "Cheese Loaded Bhel", note: "Crunchy. Cheesy. Chaotic.", tag: "Chaat" },
  { img: cone, name: "Cone Dosa", note: "Crisp golden tower, dressed in cheese.", tag: "Dosa" },
  { img: ring, name: "Cheese Ring Special", note: "A circle of indulgence with green chutney.", tag: "Chaat" },
  { img: bowl, name: "Edible Cheese Bowl", note: "Eat the bowl. Then eat the dish.", tag: "House Specials" },
];

export function FeaturedDishes() {
  return (
    <section className="relative py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-16 flex items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1] tracking-tight">
              The corner's<br /><span className="italic text-[var(--chutney)]">greatest hits.</span>
            </h2>
            <p className="hidden md:block max-w-xs text-sm text-foreground/60">
              Dishes our regulars order with their eyes closed.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-x-6 gap-y-20 md:grid-cols-12">
          {dishes.map((d, i) => {
            const isEven = i % 2 === 0;
            return (
              <Reveal
                key={d.name}
                delay={i * 0.05}
                className={`md:col-span-6 ${isEven ? "md:mt-0" : "md:mt-24"}`}
              >
                <div className="group">
                  <ParallaxImage
                    src={d.img}
                    alt={d.name}
                    className="aspect-[4/5] rounded-3xl shadow-[var(--shadow-warm)] transition-transform duration-700 group-hover:-translate-y-1"
                  />
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-foreground/50">{d.tag}</p>
                      <h3 className="font-display text-2xl md:text-3xl mt-1">{d.name}</h3>
                    </div>
                    <p className="text-sm text-foreground/60 sm:max-w-[14rem] sm:text-right">{d.note}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
