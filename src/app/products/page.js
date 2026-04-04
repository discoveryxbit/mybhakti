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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCT_LIST.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group block"
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="sacred-card relative overflow-hidden bg-earth/[0.02] border border-earth/5 transition-all duration-700"
                >
                  <div className="aspect-[3/4] relative w-full overflow-hidden">
                    <img 
                      src={product.src} 
                      alt={product.title}
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                    
                    {/* Comic Panels Wording / Overlays */}
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-earth/90 via-earth/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="text-lg font-bold text-white tracking-widest uppercase font-serif">
                        {product.title}
                      </h4>
                      <p className="text-[9px] text-white/50 font-bold uppercase tracking-[0.2em] mt-1">
                        Comic-Bhakti Edition
                      </p>
                    </div>
                  </div>
                </motion.div>
                {/* Decorative Comic Shadow */}
                <div className="absolute -bottom-2 -right-2 w-full h-full border-r border-b border-earth/10 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </div>
              <div className="mt-8 px-1">
                 <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-earth opacity-40 group-hover:opacity-100 transition-opacity mb-4">{product.desc}</p>
                 <span className="text-[9px] font-bold uppercase tracking-widest text-saffron group-hover:underline underline-offset-8 transition-all">Explore Collection →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ComplianceSection />
    </main>
  );
}
