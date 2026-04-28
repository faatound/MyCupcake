"use client";

import React from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CartModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, total, removeFromCart, updateQuantity } = useCart();

  const handleOrder = () => {
    const phoneNumber = "+221776162820";
    const itemsList = items
      .map((item) => `${item.name} (x${item.quantity})`)
      .join("\n");

    const message = encodeURIComponent(
      `Bonjour ! Je souhaite passer une commande :\n\n${itemsList}\n\nMontant Total : ${total.toLocaleString()} F CFA\n\nVeuillez confirmer ma commande et me transmettre votre numéro Wave pour le paiement.`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-chocolate/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-cream shadow-2xl z-[101] flex flex-col"
          >
            <div className="p-6 border-b border-chocolate/5 flex items-center justify-between">
              <h2 className="font-serif text-2xl text-chocolate font-bold">Votre Panier</h2>
              <button onClick={onClose} className="p-2 hover:text-berry transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingBag size={64} strokeWidth={1} className="mb-4" />
                  <p className="font-serif text-xl">Votre panier est vide</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="font-medium text-chocolate">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-chocolate/40 hover:text-berry transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-berry font-bold text-sm mb-3">
                        {item.price.toLocaleString()} F CFA
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center bg-soft-gray rounded-full px-2 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:text-berry transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:text-berry transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 bg-white border-t border-chocolate/5 shadow-[0_-10px_40px_-20px_rgba(0,0,0,0.1)]">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-chocolate/60 font-bold mb-1">
                    Montant Total
                  </p>
                  <p className="text-3xl font-serif font-bold text-chocolate">
                    {total.toLocaleString()} F CFA
                  </p>
                </div>
              </div>

              <button
                disabled={items.length === 0}
                onClick={handleOrder}
                className="w-full flex items-center justify-center gap-3 bg-berry text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-berry/90 transition-all shadow-premium disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                Commander sur WhatsApp
              </button>
              <p className="text-[10px] text-center mt-4 text-chocolate/40 uppercase tracking-tighter">
                Les commandes sont finalisées via WhatsApp pour une expérience personnalisée
              </p>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Simple helper to avoid import error in empty cart icon
function ShoppingBag({ size, strokeWidth, className }: { size: number, strokeWidth: number, className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
