"use client";

import Navigation from "@/components/layout/Navigation";
import ComplianceSection from "@/components/legal/ComplianceSection";
import { motion } from "framer-motion";

export default function PrivacyPrinciples() {
  return (
    <main className="min-h-screen bg-background selection:bg-saffron/10 mb-20">
      <Navigation />
      <div className="pt-48 pb-32 px-6 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <h4 className="text-saffron text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Legal Standards</h4>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 text-earth font-serif underline decoration-saffron/20">Privacy Principles.</h1>
          
          <div className="prose prose-lg text-earth/60 font-medium leading-relaxed space-y-10">
            <section className="space-y-4">
              <h3 className="text-earth text-xl font-bold uppercase tracking-widest">Introduction</h3>
              <p>We take your privacy seriously. This document outlines how Bhakti Comics handles personal information collected during your visit to our website and purchase of our comics.</p>
            </section>

            <section className="space-y-4">
              <h3 className="text-earth text-xl font-bold uppercase tracking-widest">Information We Collect</h3>
              <p>We collect your email address and payment details (processed securely) only to deliver your products and communicate about your orders. No other unnecessary personal information is requested or stored.</p>
            </section>

            <section className="space-y-4">
              <h3 className="text-earth text-xl font-bold uppercase tracking-widest">Security</h3>
              <p>The security of your personal information is a top priority. Our platform uses high-level industrial encryption standards to protect all data transferred through the checkout process.</p>
            </section>
          </div>
        </motion.div>
      </div>
      <ComplianceSection />
    </main>
  );
}
