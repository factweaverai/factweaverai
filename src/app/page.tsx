"use client";
import React from 'react';
import AnimatedSection from "../components/AnimatedSection";
import { useTranslation } from "../context/LanguageContext";
import { ArrowRight, Zap, Users, ShieldCheck } from "lucide-react";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <AnimatedSection className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 text-gray-900 dark:text-white leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://github.com/factweaverai" className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-primary/20 group">
                  {t.hero.cta_github}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/about" className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700">
                  {t.hero.cta_learn_more}
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="flex-1 w-full max-w-2xl">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format\&fit=crop\&q=80\&w=1600" 
                  alt="Organization Vision"
                  className="relative rounded-[2rem] shadow-2xl border border-gray-200 dark:border-gray-800 w-full object-cover aspect-[4/3]"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{t.capabilities.title}</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <AnimatedSection delay={0.1} className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary/20 transition-all group">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary w-fit mb-8 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t.capabilities.innovation}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{t.capabilities.innovation_desc}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary/20 transition-all group">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary w-fit mb-8 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t.capabilities.community}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{t.capabilities.community_desc}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary/20 transition-all group">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary w-fit mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t.capabilities.sustainability}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{t.capabilities.sustainability_desc}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
