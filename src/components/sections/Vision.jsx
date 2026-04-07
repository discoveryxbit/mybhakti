"use client";

import { motion } from "framer-motion";
import { Languages, Heart, Globe, Users } from "lucide-react";

const languages = [
  { name: "English", code: "EN" },
  { name: "Hindi (English)", code: "HI" },
  { name: "Tamil (English)", code: "TA" },
  { name: "Malayalam (English)", code: "ML" },
  { name: "Kannada (English)", code: "KN" },
  { name: "Marathi (English)", code: "MR" },
  { name: "Bengali (English)", code: "BN" },
];

export default function Vision() {
  return (
    <section id="vision" className="py-32 px-6 bg-surface relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-saffron/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-saffron/10 text-saffron text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-saffron/5"
            >
              <Globe size={12} />
              Our Universal Vision
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-earth mb-8 leading-[1.1] font-serif"
            >
              Cultivating Sacred <br />
              <span className="italic font-normal text-saffron">Heritage in Every Tongue.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-earth/60 leading-relaxed mb-12 font-medium italic"
            >
              Our mission is to introduce the wisdom of Indian heritage and ancient history (Itihas) to the next generation through the medium of storytelling and sacred books. We believe that history is best experienced in one's mother tongue.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center shrink-0 border border-saffron/10 text-saffron">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-earth mb-2">Next Generation</h4>
                  <p className="text-xs text-earth/50 leading-relaxed">Tailoring epic narratives for children to build a foundation of culture and character.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center shrink-0 border border-saffron/10 text-saffron">
                  <Languages size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-earth mb-2">Mother Tongue</h4>
                  <p className="text-xs text-earth/50 leading-relaxed">Breaking language barriers by launching in Hindi, Tamil, Malayalam, Kannada, Marathi, English, Bengali along with other languages coming soon</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 rounded-3xl bg-earth/[0.03] border border-earth/5"
            >
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.code}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="aspect-square flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-earth/5 group cursor-default transition-all duration-500 hover:shadow-xl hover:shadow-saffron/5"
                >
                  <span className="text-2xl font-bold font-serif text-earth/20 group-hover:text-saffron transition-colors mb-2">
                    {lang.code}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-earth/40 group-hover:text-earth transition-colors text-center leading-tight">
                    {lang.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Decorative Sparkle */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-saffron/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-saffron/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
