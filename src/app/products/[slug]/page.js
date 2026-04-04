"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import ComplianceSection from "@/components/legal/ComplianceSection";
import { useParams } from "next/navigation";

const PRODUCT_DETAILS = {
  "krishna-leela": {
    title: "Krishna Leela",
    tagline: "The Divine Play of the Supreme",
    description: "A high-fidelity journey through the mystic pastimes of Sri Krishna. Hand-illustrated panels capturing the essence of Vraja.",
    image: "/krishna/3.png"
  },
  "geeta-updesh": {
    title: "Geeta Updesh",
    tagline: "Eternal Wisdom for the Modern Battlefield",
    description: "The timeless conversation between Krishna and Arjuna, rendered in stunning digital art to bring the song of god to life.",
    image: "/geeta/1.jpg"
  },
  "mahabharat-comics": {
    title: "Mahabharat Comics",
    tagline: "The Greatest Epic Ever Told",
    description: "A monumental saga of righteousness, duty, and the ultimate sacrifice. Witness the Kurukshetra war in unprecedented detail.",
    image: "/mahabharata/1.png"
  },
  "ramayan-comics": {
    title: "Ramayan Comics",
    tagline: "The Journey of the Ideal King",
    description: "The heroic tale of Maryada Purushottam Ram. A story of love, honor, and the victory of light over darkness.",
    image: "/ramayan/2.png"
  }
};

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug;
  const product = PRODUCT_DETAILS[slug];

  if (!product) return <div>Product not found</div>;

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden selection:bg-saffron/10 selection:text-earth">
      <div className="grain-overlay" />
      <Navigation />

      <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-3 text-earth/40 hover:text-saffron transition-colors text-[10px] font-bold uppercase tracking-widest mb-16 group">
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
          Back to Collections
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-saffron/10 text-saffron text-[10px] font-bold uppercase tracking-[0.3em] mb-10 border border-saffron/5">
              <Sparkles size={12} />
              Elite Collection
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-earth mb-8 leading-[0.9] font-serif">
               {product.title} <br />
               <span className="italic font-normal text-saffron opacity-90 underline decoration-saffron/20 underline-offset-8">Coming Soon.</span>
            </h1>

            <p className="text-xl text-earth/60 leading-relaxed mb-12 italic max-w-md font-medium">
              {product.description}
            </p>

            <div className="flex flex-col gap-8">
               <div className="p-8 rounded-[2rem] bg-surface border border-earth/5 shadow-premium max-w-sm">
                  <BookOpen size={24} className="text-saffron mb-4" />
                  <h3 className="font-bold text-earth mb-2">Waitlist Open</h3>
                  <p className="text-sm text-earth/40 leading-relaxed mb-6">Join 1,200+ devotees waiting for the high-definition launch.</p>
                  <button className="w-full bg-earth text-surface py-4 rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all">
                    Notify Me at Launch
                  </button>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="sacred-card relative aspect-[3/4] overflow-hidden bg-surface group"
          >
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-earth/5 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      <ComplianceSection />
    </main>
  );
}
