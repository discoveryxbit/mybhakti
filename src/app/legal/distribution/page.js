"use client";

import Navigation from "@/components/layout/Navigation";
import ComplianceSection from "@/components/legal/ComplianceSection";
import { motion } from "framer-motion";

export default function DigitalDistributionTerms() {
  return (
    <main className="min-h-screen bg-background selection:bg-saffron/10 mb-20">
      <Navigation />
      <div className="pt-48 pb-32 px-6 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <h4 className="text-saffron text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Legal Standards</h4>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 text-earth font-serif underline decoration-saffron/20">Digital Distribution Terms.</h1>
          
          <div className="prose prose-lg text-earth/60 font-medium leading-relaxed space-y-10">
            <section className="space-y-4">
              <h3 className="text-earth text-xl font-bold uppercase tracking-widest">Ownership & Copyright</h3>
              <p>All digital products, including comics, illustrations, and ebooks provided by Bhakti Comics, are the intellectual property of the respective creators and Bhakti Comics. Purchase of a digital product grants you a personal, non-exclusive license to view and store the content for personal use only.</p>
            </section>

            <section className="space-y-4">
              <h3 className="text-earth text-xl font-bold uppercase tracking-widest">Fulfillment</h3>
              <p>Delivery is instant and automated. Upon successful verification of payment, a download link will be provided to the email address registered at the time of purchase. Should there be any delay for more than 2 hours, please contact support.</p>
            </section>

            <section className="space-y-4">
              <h3 className="text-earth text-xl font-bold uppercase tracking-widest">Refund Policy</h3>
              <p>Due to the nature of digital goods, all sales are final. Refunds are only issued in cases of accidental duplicate purchases or verified technical failure to deliver the content.</p>
            </section>
          </div>
        </motion.div>
      </div>
      <ComplianceSection />
    </main>
  );
}
