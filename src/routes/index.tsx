import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { IntroLogo } from "@/components/landing/IntroLogo";
import { Hero } from "@/components/landing/Hero";
import { FeaturedDishes } from "@/components/landing/FeaturedDishes";
import { MenuPreview } from "@/components/landing/MenuPreview";
import { ContactStrip } from "@/components/landing/ContactStrip";
import { Footer } from "@/components/landing/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Baba Food Inn",
  servesCuisine: ["Indian", "South Indian", "Street Food", "Chaat"],
  priceRange: "₹",
  telephone: "+91-80808-09889",
  url: "/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 10, Venus Apartment, opp. Joggers Park Road, Chikoowadi",
    addressLocality: "Borivali West",
    addressRegion: "Maharashtra",
    postalCode: "400092",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 13:00-23:00",
  sameAs: [
    "https://www.instagram.com/babafoodinn/",
    "https://www.zomato.com/mumbai/baba-food-inn-borivali-west",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Baba Food Inn — Dosas, Sandwiches & Chaat in Borivali West" },
      { name: "description", content: "Family-friendly corner restaurant in Borivali West, Mumbai serving great dosas, sandwiches and chaat. Agla stop hamare corner pe." },
      { property: "og:title", content: "Baba Food Inn — Borivali West" },
      { property: "og:description", content: "Dosas · Sandwiches · Chaat. Family-friendly corner restaurant in Mumbai." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  const [introOpen, setIntroOpen] = useState(true);
  const [revealed, setRevealed] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (introOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [introOpen]);

  const handleEnter = () => {
    setIntroOpen(false);
    setTimeout(() => setRevealed(true), reduce ? 0 : 400);
  };

  return (
    <>
      <IntroLogo open={introOpen} onEnter={handleEnter} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: revealed || !introOpen ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={introOpen}
      >
        <Hero />
        <FeaturedDishes />
        <MenuPreview />
        <ContactStrip />
        <Footer />
      </motion.main>
    </>
  );
}
