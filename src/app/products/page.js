"use client";

import { motion } from "framer-motion";
import { Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import ComplianceSection from "@/components/legal/ComplianceSection";

const PRODUCT_LIST = [
  { id: "krishna", src: "/krishna/3.png", title: "Krishna Leela", slug: "krishna-leela", desc: "A high-fidelity journey through the mystic pastimes of Sri Krishna. Hand-illustrated panels capturing the essence of Vraja." },
  { id: "geeta", src: "/geeta/1.jpg", title: "Geeta Updesh", slug: "geeta-updesh", desc: "The timeless conversation between Krishna and Arjuna, rendered in stunning digital art to bring the song of god to life." },
  { id: "mahabharata", src: "/mahabharata/1.png", title: "Mahabharat Comics", slug: "mahabharat-comics", desc: "A monumental saga of righteousness, duty, and the ultimate sacrifice. Witness the Kurukshetra war in unprecedented detail." },
  { id: "ramayan", src: "/ramayan/2.png", title: "Ramayan Comics", slug: "ramayan-comics", desc: "The heroic tale of Maryada Purushottam Ram. A story of love, honor, and the victory of light over darkness." },
];

export default function ProductsIndex() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden selection:bg-saffron/10 selection:text-earth">
      <div className="grain-overlay" />
      <Navigation />

      <section className="pt-48 pb-32 px-6 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="text-center md:text-left mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-saffron/10 text-saffron text-[10px] font-bold uppercase tracking-[0.3em] mb-10 border border-saffron/5">
            <Sparkles size={12} />
            The Catalog
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-earth mb-8 leading-[0.9] font-serif">
            Divine <span className="italic font-normal text-saffron">Collections.</span>
          </h1>
          <p className="max-w-xl text-lg text-earth/60 italic font-medium">Explore our primary comic series, each crafted for spiritual depth and visual excellence.</p>
        </motion.div>

        <div className="columns-1 md:columns-2 gap-12 space-y-12">
          {PRODUCT_LIST.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group block break-inside-avoid"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="sacred-card relative overflow-hidden bg-earth/[0.02] border border-earth/5 transition-all duration-700 hover:scale-[1.01]"
              >
                <div className="relative w-full overflow-hidden">
                  <img 
                    src={product.src} 
                    alt={product.title}
                    className="w-full h-auto object-contain transition-all duration-1000 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-earth/95 via-earth/60 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase font-serif">
                          {product.title}
                        </h4>
                        <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.3em] mt-3 italic">
                           Full Digital Series • Hand-Illustrated
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-earth transition-all duration-500">
                          <BookOpen size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="mt-8 px-2">
                 <p className="text-earth/50 text-sm leading-relaxed mb-4 italic font-medium">{product.desc}</p>
                 <span className="text-saffron text-[10px] font-bold uppercase tracking-[0.3em] group-hover:underline underline-offset-8 transition-all">Explore Collection →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ComplianceSection />
    </main>
  );
}
