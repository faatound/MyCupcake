"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero-muffins.png",
    tagline: "Le Bonheur Matinal",
    sub: "Des muffins fraîchement sortis du four, livrés chez vous.",
  },
  {
    image: "/images/hero-brownies.png",
    tagline: "Fondant, Riche, Irrésistible",
    sub: "Brownies gourmands préparés avec le meilleur chocolat.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-cream">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt="Pâtisserie"
            fill
            className="object-cover brightness-95"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/40 via-transparent to-black/10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.div
          key={`text-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] uppercase tracking-[0.3em] font-bold bg-white/30 backdrop-blur-sm rounded-full text-chocolate">
            Vente Flash à Durée Limitée
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white drop-shadow-lg mb-6 leading-[1.1]">
            {slides[current].tagline}
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium mb-10 max-w-2xl mx-auto drop-shadow-md">
            {slides[current].sub}
          </p>
          <motion.a
            href="#shop"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-berry text-white text-sm font-bold uppercase tracking-widest rounded-full shadow-premium hover:bg-berry/90 transition-all"
          >
            Découvrir la Boutique
          </motion.a>
        </motion.div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        <button
          onClick={prev}
          className="p-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-chocolate transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                i === current ? "w-6 bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-chocolate transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

