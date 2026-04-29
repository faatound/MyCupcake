"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CartModal from "@/components/CartModal";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MessageCircle, Star, Heart, Clock } from "lucide-react";

const products = [
  {
    id: "cupcake-4",
    name: "Boîte de 4 Cupcakes",
    price: 2500,
    image: "/images/hero-cupcakes.png",
    category: "Cupcakes",
  },
  {
    id: "cupcake-6",
    name: "Boîte de 6 Cupcakes",
    price: 3500,
    image: "/images/hero-cupcakes.png",
    category: "Cupcakes",
  },
  {
    id: "muffin",
    name: "Muffin Gourmand",
    price: 700,
    image: "/images/hero-muffins.png",
    category: "Muffins",
  },
  {
    id: "brownie",
    name: "Brownie Fondant",
    price: 1000,
    image: "/images/hero-brownies.png",
    category: "Brownies",
  },
];

const testimonials = [
  {
    name: "Adja Khady",
    quote: "Les meilleurs cupcakes que j'ai goûtés à Dakar. Petit tips le lendemain ils sont encore meilleur !",
    role: "Cliente Fidèle",
  },
  {
    name: "Mamadou",
    quote: "Ces brownies sont addictifs. J'adore le goût du chocolat noir en bouche.",
    role: "Amateur de Chocolat",
  },
  {
    name: "Mahmoud",
    quote: "Commande rapide service client réactif , j'adore ces cupcakes.",
    role: "Client Régulier",
  },
];

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <main className="relative bg-cream">
      <Navbar onCartOpen={() => setIsCartOpen(true)} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <Hero />

      {/* Featured Section */}
      <section id="shop" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-berry mb-4 block"
          >
            Fraîchement Cuit
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-chocolate"
          >
            Succombez à Nos Délices Quotidiens
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[40px] overflow-hidden shadow-premium"
          >
            <Image
              src="/images/bakery-workspace.png"
              alt="Notre Pâtisserie"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-berry block">
              Notre Histoire
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-chocolate leading-tight">
              Créer de la Joie, <br /> un Cupcake à la Fois.
            </h2>
            <p className="text-chocolate/70 leading-relaxed text-lg">
              Chez MyCupcake, nous pensons que les meilleures choses de la vie sont simples, fraîches et partagées.
              Notre aventure a commencé dans une petite cuisine avec la passion de perfectionner l'art du cupcake.
              Aujourd'hui, nous apportons ce même amour à chaque fournée.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-rose flex items-center justify-center text-berry">
                  <Heart size={20} />
                </div>
                <h4 className="font-bold text-chocolate uppercase tracking-widest text-xs">Fait avec Amour</h4>
                <p className="text-sm text-chocolate/60">Ingrédients de qualité et passion.</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-sky flex items-center justify-center text-berry">
                  <Clock size={20} />
                </div>
                <h4 className="font-bold text-chocolate uppercase tracking-widest text-xs">Ventes Flash</h4>
                <p className="text-sm text-chocolate/60">Temps limité, saveur maximum.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-cream px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-chocolate">Avis de nos Clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-gold mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-chocolate italic mb-6">"{t.quote}"</p>
                </div>
                <div>
                  <p className="font-bold text-chocolate uppercase tracking-widest text-xs">{t.name}</p>
                  <p className="text-[10px] text-chocolate/40 uppercase tracking-widest">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto bg-chocolate rounded-[40px] p-12 text-center text-cream relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-berry/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-berry/20 rounded-full blur-3xl -ml-32 -mb-32" />

          <h2 className="text-4xl md:text-5xl font-serif mb-6 relative z-10">Une Question ?</h2>
          <p className="text-cream/70 mb-10 text-lg relative z-10">
            Nous sommes là pour adoucir votre journée. Discutez avec nous sur WhatsApp pour vos commandes personnalisées ou toute information.
          </p>
          <motion.a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+221776162820"}`}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-12 py-5 bg-white text-chocolate rounded-full font-bold uppercase tracking-widest hover:bg-rose transition-all relative z-10 shadow-lg"
          >
            <MessageCircle size={24} />
            Discuter sur WhatsApp
          </motion.a>
        </div>
      </section>


      <Footer />
    </main>
  );
}
