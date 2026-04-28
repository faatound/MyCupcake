"use client";

import React from "react";
import Link from "next/link";
import { Camera, Globe, X, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-chocolate text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <Link href="/" className="font-serif text-3xl font-bold mb-6 inline-block">
            MyCupcake
          </Link>
          <p className="text-cream/60 max-w-sm mb-8 leading-relaxed">
            Créer des moments de douceur avec amour et les meilleurs ingrédients.
            Rejoignez nos ventes flash et succombez à la perfection.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full border border-cream/10 hover:bg-cream hover:text-chocolate transition-all">
              <Camera size={20} />
            </a>
            <a href="#" className="p-2 rounded-full border border-cream/10 hover:bg-cream hover:text-chocolate transition-all">
              <Globe size={20} />
            </a>
            <a href="#" className="p-2 rounded-full border border-cream/10 hover:bg-cream hover:text-chocolate transition-all">
              <X size={20} />
            </a>
          </div>


        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Liens Rapides</h4>
          <ul className="space-y-4 text-cream/60 text-sm">
            <li><Link href="#" className="hover:text-rose transition-colors">Accueil</Link></li>
            <li><Link href="#shop" className="hover:text-rose transition-colors">Boutique</Link></li>
            <li><Link href="#about" className="hover:text-rose transition-colors">À Propos</Link></li>
            <li><Link href="#contact" className="hover:text-rose transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Contact</h4>
          <ul className="space-y-4 text-cream/60 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} /> +221 77 616 28 20
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} /> hello@mycupcake.com
            </li>
            <li className="flex items-center gap-3">
              <span>Dakar, Sénégal</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-cream/30">
        <p>© 2026 MyCupcake. Tous droits réservés.</p>
        <div className="flex gap-8">
          <Link href="#">Politique de Confidentialité</Link>
          <Link href="#">Conditions d'Utilisation</Link>
        </div>

      </div>
    </footer>
  );
}
