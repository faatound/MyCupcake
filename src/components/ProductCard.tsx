"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ id, name, price, image, category }: ProductProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ id, name, price, image }, quantity);
    setQuantity(1); // Reset quantity after adding
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-widest font-bold text-chocolate rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl text-chocolate mb-2">{name}</h3>
        <p className="text-berry font-bold text-lg mb-6">
          {price.toLocaleString()} F CFA
        </p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center border border-cream bg-soft-gray rounded-full px-2 py-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1 hover:text-berry transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center text-sm font-bold text-chocolate">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-1 hover:text-berry transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="flex-1 flex items-center justify-center gap-2 bg-chocolate text-white py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-berry transition-all shadow-sm"
          >
            <ShoppingCart size={14} />
            Ajouter au Panier
          </button>

        </div>
      </div>
    </motion.div>
  );
}
