"use client";

import { motion } from "framer-motion";
import { Mail, ShieldCheck, RefreshCcw, FileText, MapPin } from "lucide-react";
import Link from "next/link";

const policies = [
  {
    id: "refund",
    title: "Refund & Dispute Policy",
    icon: <RefreshCcw size={18} />,
    content: "Since our products are digital ebooks and comics, we generally do not offer refunds once the content has been downloaded. However, if you experience technical issues or accidental duplicate purchases, please contact us within 14 days and we will review your request for a full refund or credit."
  },
  {
    id: "fulfillment",
    title: "Delivery & Fulfillment",
    icon: <FileText size={18} />,
    content: "Our digital comics and ebooks are delivered instantly via email upon successful payment. You will receive a secure link to download your content in high-definition formats (PDF/EPUB)."
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    icon: <ShieldCheck size={18} />,
    content: "Subscription-based services (if any) can be cancelled at any time through your customer portal or by contacting support. One-time digital purchases cannot be cancelled after the download link has been accessed."
  }
];

export default function ComplianceSection() {
  return (
    <footer className="mt-32 pt-20 pb-16 border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Business Info for Stripe Compliance */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <img src="/logo.png" alt="Bhakti Comics Logo" className="h-20 w-auto mb-6" />
              <p className="text-foreground/60 text-sm leading-relaxed max-w-xs">
                Spreading timeless spiritual wisdom through high-fidelity digital art and storytelling.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <Mail size={16} className="text-saffron" />
                <span>hello@bhakticomics.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-foreground/70">
                <MapPin size={16} className="text-saffron mt-0.5" />
                <span>Bhakti Comics Global Rights & Distribution <br />Dedicated Digital Experience HQ</span>
              </div>
            </div>
          </div>

          {/* Policy Overviews for Stripe Verification */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {policies.map((policy) => (
              <motion.div 
                key={policy.id}
                whileHover={{ y: -2 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-earth font-bold uppercase text-[10px] tracking-widest opacity-80">
                  {policy.icon}
                  {policy.title}
                </div>
                <p className="text-foreground/60 text-xs leading-relaxed">
                  {policy.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Legal Credits */}
        <div className="mt-20 pt-8 border-t border-accent/5 flex flex-col md:flex-row justify-between gap-6">
          <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/30">
            © {new Date().getFullYear()} Bhakti Comics. Dedicated to the Divine.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-foreground/40">
            <Link href="/legal/distribution" className="hover:text-saffron transition-colors">Digital Distribution Terms</Link>
            <Link href="/legal/privacy" className="hover:text-saffron transition-colors">Privacy Principles</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
