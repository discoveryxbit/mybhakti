"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, BookOpen, Layers } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import ComplianceSection from "@/components/legal/ComplianceSection";
import { useParams } from "next/navigation";

const PRODUCT_DETAILS = {
  "krishna-leela": {
    title: "Krishna Leela",
    tagline: "The Divine Play of the Supreme",
    description: "A high-fidelity journey through the mystic pastimes of Sri Krishna. Hand-illustrated pieces capturing the essence of Vraja.",
    image: "/krishna/3.png",
    gallery: ["/krishna/1.jpg", "/krishna/2.jpg", "/krishna/3.png", "/krishna/4.jpg", "/krishna/5.jpg"]
  },
  "geeta-updesh": {
    title: "Geeta Updesh",
    tagline: "Eternal Wisdom for the Modern Battlefield",
    description: "The timeless conversation between Krishna and Arjuna, rendered in stunning digital art to bring the song of god to life.",
    image: "/geeta/1.jpg",
    gallery: ["/geeta/1.jpg", "/geeta/2.jpg", "/geeta/3.jpg", "/geeta/4.jpg"]
  },
  "mahabharat-comics": {
    title: "Mahabharat Comics",
    tagline: "The Greatest Epic Ever Told",
    description: "A monumental saga of righteousness, duty, and the ultimate sacrifice. Witness the Kurukshetra war in unprecedented detail.",
    image: "/mahabharata/1.png",
    gallery: ["/mahabharata/1.png", "/mahabharata/2.jpg", "/mahabharata/3.jpg", "/mahabharata/4.png"]
  },
  "ramayan-comics": {
    title: "Ramayan Comics",
    tagline: "The Journey of the Ideal King",
    description: "The heroic tale of Maryada Purushottam Ram. A story of love, honor, and the victory of light over darkness.",
    image: "/ramayan/2.png",
    gallery: ["/ramayan/1.jpg", "/ramayan/2.png"]
  }
};

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug;
  const product = PRODUCT_DETAILS[slug];

  if (!product) return <div className="min-h-screen bg-background flex items-center justify-center text-earth/20 font-serif text-4xl">Sacred Path Not Found.</div>;

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden selection:bg-saffron/10 selection:text-earth">
      <div className="grain-overlay" />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <Link href="/products" className="inline-flex items-center gap-3 text-earth/40 hover:text-saffron transition-colors text-[10px] font-bold uppercase tracking-widest mb-16 group">
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
                  <button className="w-full bg-earth text-surface py-4 rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all outline-none">
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
              className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-earth/90 via-earth/40 to-transparent">
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 italic">Featured Illustration</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sacred Gallery Section */}
      <section className="py-32 px-6 bg-[#FDFBF7] relative border-t border-earth/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-10 mb-20 text-center md:text-left">
            <div className="flex items-center gap-4 text-saffron opacity-40 mb-2">
               <Layers size={16} />
               <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Comprehensive Gallery</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-earth font-serif">
              The <span className="italic font-normal text-saffron tracking-tight">Collection Pieces.</span>
            </h2>
            <div className="w-24 h-px bg-saffron/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {product.gallery.map((imgSrc, imgIndex) => (
              <motion.div
                key={imgSrc}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: imgIndex * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative">
                  <div className="sacred-card relative aspect-[3/4] overflow-hidden bg-earth/[0.02] border border-earth/5 transition-all duration-700">
                    <img 
                      src={imgSrc} 
                      alt={`${product.title} Illustration ${imgIndex + 1}`}
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                    
                    {/* Narrative Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-earth/95 via-earth/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                      <p className="text-[9px] text-white/50 font-bold uppercase tracking-[0.2em] italic">
                        Sacred Art • High Fidelity
                      </p>
                    </div>
                  </div>
                  {/* Decorative Comic Shadow */}
                  <div className="absolute -bottom-2 -right-2 w-full h-full border-r border-b border-earth/10 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ComplianceSection />
    </main>
  );
}
