"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowDown, BookOpen, Send } from "lucide-react";
import ComplianceSection from "@/components/legal/ComplianceSection";
import Image from "next/image";

const FEATURED_ASSETS = [
  { src: "/1.jpg", alt: "Bhakti Comic Preview 1", size: "lg" },
  { src: "/2.jpg", alt: "Bhakti Comic Preview 2", size: "sm" },
  { src: "/3.png", alt: "Bhakti Comic Preview 3", size: "sm" },
  { src: "/4.jpg", alt: "Bhakti Comic Preview 4", size: "md" },
  { src: "/5.jpg", alt: "Bhakti Comic Preview 5", size: "lg" },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden selection:bg-saffron/10 selection:text-earth">
      <div className="grain-overlay" />
      
      {/* Decorative Saffron Ornament */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-saffron/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 glass-nav px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <BookOpen size={20} className="text-saffron" />
          <span className="font-bold text-earth text-lg tracking-tighter uppercase">Bhakti Comics</span>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-earth/50">
          <a href="#vision" className="hover:text-saffron transition-colors">Our Vision</a>
          <a href="#previews" className="hover:text-saffron transition-colors">Previews</a>
          <a href="#legal" className="hover:text-saffron transition-colors">Legal & Terms</a>
        </div>
        <button className="bg-earth text-surface px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-earth/10">
          Stay Updated
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-saffron/10 text-saffron text-[10px] font-bold uppercase tracking-[0.3em] mb-12 border border-saffron/5"
          >
            <Sparkles size={12} />
            The Divine Comic Series
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-9xl font-bold tracking-tighter text-earth mb-8 leading-[0.9] font-serif"
          >
            Holy Stories <br /> 
            <span className="italic font-normal text-saffron opacity-90 underline decoration-saffron/20 underline-offset-8">Drawn for Devotion.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="max-w-xl mx-auto text-lg md:text-xl text-earth/60 leading-relaxed mb-16 font-medium italic"
          >
            Experience timeless Bhakti wisdom through high-fidelity digital comics and hand-illustrated ebooks. Sacred storytelling, reimagined for the modern screen.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col items-center gap-8">
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter email for early access"
                className="w-80 px-8 py-5 rounded-3xl bg-surface border-2 border-accent/5 focus:border-saffron/20 transition-all outline-none text-earth font-medium"
              />
              <button className="absolute right-2 top-2 p-3 bg-saffron text-white rounded-2xl shadow-lg shadow-saffron/10 hover:bg-earth transition-colors">
                <Send size={18} />
              </button>
            </div>
            
            <div className="flex items-center gap-4 text-earth/30">
              <div className="w-12 h-px bg-current" />
              <div className="text-[10px] font-bold uppercase tracking-widest text-saffron/40">Official Storefront Opening Soon</div>
              <div className="w-12 h-px bg-current" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20"
        >
          <ArrowDown size={32} className="text-earth" />
        </motion.div>
      </section>

      {/* Image Showcase Gallery */}
      <section id="previews" className="py-32 px-6 bg-[#FDFBF7] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-12 mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-earth font-serif">
              The <span className="italic">Bhakti Panels.</span>
            </h2>
            <div className="w-24 h-1 bg-saffron/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { src: "/1.jpg", title: "THE SACRED FOREST", tag: "PANEL 01" },
              { src: "/2.jpg", title: "THE DIVINE FLUTE", tag: "PANEL 02" },
              { src: "/3.png", title: "ETERNAL WISDOM", tag: "PANEL 03" },
              { src: "/4.jpg", title: "THE AWAKENING", tag: "PANEL 04" },
              { src: "/5.jpg", title: "DIVINE GATHERING", tag: "PANEL 05" },
            ].map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Comic Panel Container */}
                <div className="sacred-card relative overflow-hidden bg-earth/[0.02] border border-earth/5">
                  <div className="aspect-[3/4] relative w-full overflow-hidden">
                    <img 
                      src={asset.src} 
                      alt={asset.title}
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    
                    {/* Comic Wording / Overlays */}
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-earth/90 via-earth/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-0.5 bg-saffron text-surface text-[8px] font-bold tracking-[0.2em] uppercase rounded-sm">
                          {asset.tag}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white tracking-widest uppercase font-serif">
                        {asset.title}
                      </h4>
                      <p className="text-[9px] text-white/50 font-bold uppercase tracking-[0.2em] mt-1">
                        Comic-Bhakti Edition
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Comic Shadow */}
                <div className="absolute -bottom-2 -right-2 w-full h-full border-r border-b border-earth/5 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Information for Stripe Verification */}
      <section id="legal">
        <ComplianceSection />
      </section>
    </main>
  );
}
