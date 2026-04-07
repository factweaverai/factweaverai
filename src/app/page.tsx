"use client";
import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";
import { useTranslation } from "../context/LanguageContext";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <AnimatedSection className="relative overflow-hidden flex items-center justify-center min-h-[80vh] bg-gray-900 text-white">
        <img 
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt={`${t.hero.title} Hero`} 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 max-w-4xl mx-auto mb-10 drop-shadow-md">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://github.com/codegraftai" className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition-colors shadow-lg">
              {t.hero.cta_github}
            </Link>
            <Link href="/about" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
              {t.hero.cta_learn_more}
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white dark:bg-gray-900 py-24 transition-colors duration-300" delay={0.2}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">{t.capabilities.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-primary">{t.capabilities.innovation}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{t.capabilities.innovation_desc}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-primary">{t.capabilities.community}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{t.capabilities.community_desc}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-primary">{t.capabilities.sustainability}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{t.capabilities.sustainability_desc}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
