"use client";
import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection";
import { useTranslation } from "../../context/LanguageContext";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <AnimatedSection>
          <h1 className="text-5xl font-extrabold mb-10 text-white">About Us</h1>
          <motion.div className="mb-12 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10" whileHover={{ scale: 1.01 }}>
            <img src="/images/about.jpg" alt="About factweaver AI" className="w-full object-cover aspect-[21/9]" />
          </motion.div>
          <p className="text-2xl text-gray-400 mb-8 leading-relaxed font-light">
            Living Knowledge Graphs
          </p>
          <div className="space-y-6">
            <p className="text-lg text-gray-400 leading-relaxed">
              factweaver AI combines natural language understanding with symbolic reasoning to extract structured facts from unstructured documents. Our provenance engine tracks every assertion back to its primary source.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
