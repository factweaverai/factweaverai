"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { useTranslation } from "../context/LanguageContext";
import { ArrowRight, Zap, Users, ShieldCheck, BarChart3, Globe } from "lucide-react";
import { Button, Chip } from "@mui/material";

export default function Home() {
  const { t } = useTranslation();

  const stats = [
    { value: "10M+", label: "Facts Tracked" },
    { value: "100K+", label: "Sources" },
    { value: "99.2%", label: "Accuracy" },
    { value: "<100ms", label: "Query Time" },
  ];

  const features = [
    { icon: <Zap className="w-8 h-8" />, title: t.capabilities.innovation, desc: t.capabilities.innovation_desc },
    { icon: <Users className="w-8 h-8" />, title: t.capabilities.community, desc: t.capabilities.community_desc },
    { icon: <ShieldCheck className="w-8 h-8" />, title: t.capabilities.sustainability, desc: t.capabilities.sustainability_desc },
  ];

  return (
    <div className="flex-1 transition-colors duration-300">
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <AnimatedSection className="flex-1 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <Chip icon={<Globe className="w-4 h-4" />} label="Open Source" sx={{ mb: 3, bgcolor: "primary.main", color: "#fff", fontWeight: 700, px: 1 }} />
              </motion.div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-300 animate-gradient-shift">
                  {t.hero.title}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a href="https://github.com/factweaverai" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="contained" size="large" endIcon={<ArrowRight />} sx={{ px: 4, py: 2, fontSize: "1.1rem", boxShadow: "0 8px 32px primary.main + "40"" }}>
                    {t.hero.cta_github}
                  </Button>
                </motion.a>
                <motion.a href="/about" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outlined" size="large" sx={{ px: 4, py: 2, fontSize: "1.1rem", borderColor: "primary.main", color: "primary.main" }}>
                    {t.hero.cta_learn_more}
                  </Button>
                </motion.a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="flex-1 w-full max-w-2xl">
              <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-50 animate-pulse-glow"></div>
                <img src="/images/hero.jpg" alt={t.hero.title} className="relative rounded-[2rem] shadow-2xl border border-white/10 w-full object-cover aspect-[4/3]" />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/10 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ scale: 1.1 }} className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border-white/10 border">
                  <div className="text-3xl font-extrabold text-primary">{s.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{s.label}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6 text-white">Knowledge That Adapts</h2>
            <p className="text-xl text-gray-400">From unstructured documents to living knowledge graphs, we make every fact traceable and verifiable.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={0.1 + i * 0.1}>
                <motion.div whileHover={{ y: -8, boxShadow: "0 20px 60px -10px " + "#F59E0B" + "30" }} transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white/5 backdrop-blur-md p-10 rounded-3xl shadow-sm border-white/10 border hover:border-primary/30 transition-all group">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary w-fit mb-8 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{f.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Image Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <AnimatedSection className="flex-1 w-full max-w-2xl order-2 lg:order-1">
              <motion.div className="relative" whileHover={{ scale: 1.02 }}>
                <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-50 animate-pulse-glow"></div>
                <img src="/images/feature.jpg" alt="Feature preview" className="relative rounded-[2rem] shadow-2xl border border-white/10 w-full object-cover aspect-[4/3]" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="flex-1 text-center lg:text-left order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Chip icon={<BarChart3 className="w-4 h-4" />} label="Built for Scale" sx={{ mb: 3, bgcolor: "primary.main", color: "#fff", fontWeight: 700 }} />
              </motion.div>
              <h2 className="text-4xl font-bold mb-6 text-white">Living Knowledge Graphs</h2>
              <p className="text-xl text-gray-400 leading-relaxed">factweaver AI combines natural language understanding with symbolic reasoning to extract structured facts from unstructured documents. Our provenance engine tracks every assertion back to its primary source.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white">Build Knowledge You Can Trust</h2>
            <p className="text-xl text-gray-400 mb-10">Join organizations that rely on factweaver AI for mission-critical decision intelligence.</p>
            <motion.a href="https://github.com/factweaverai" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="contained" size="large" endIcon={<ArrowRight />} sx={{ px: 6, py: 2, fontSize: "1.2rem" }}>
                View on GitHub
              </Button>
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
