"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const PRODUCTS = [
  { name: "Krishna Leela", slug: "krishna-leela" },
  { name: "Geeta Updesh", slug: "geeta-updesh" },
  { name: "Mahabharat Comics", slug: "mahabharat-comics" },
  { name: "Ramayan Comics", slug: "ramayan-comics" }
];

export default function Navigation() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav px-8 py-6 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-3 group">
        <img src="/logo.png" alt="Bhakti Comics Logo" className="h-20 w-auto group-hover:scale-110 transition-transform" />
      </Link>
      
      <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-earth/50">
        <Link href="/products" className="hover:text-saffron transition-colors">Products</Link>
        <a href="/#vision" className="hover:text-saffron transition-colors">Our Vision</a>
        <a href="/#legal" className="hover:text-saffron transition-colors">Legal & Terms</a>
      </div>

      <button className="bg-earth text-surface px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-earth/10">
        Stay Updated
      </button>
    </nav>
  );
}
