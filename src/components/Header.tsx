"use client";
import Link from "next/link";
import { useTranslation } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function Header() {
  const { t, language, setLanguage } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 100 }}
      className="border-b border-white/10 bg-black/30 backdrop-blur-xl sticky top-0 z-40 transition-colors duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          {t.hero.title}
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-primary font-medium transition-colors">{t.common.home}</Link>
          <Link href="/about" className="text-gray-300 hover:text-primary font-medium transition-colors">{t.common.about}</Link>
          <Link href="/contact" className="text-gray-300 hover:text-primary font-medium transition-colors">{t.common.contact}</Link>
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
            <select value={language} onChange={(e) => setLanguage(e.target.value as any)}
              className="bg-transparent text-sm font-medium text-gray-300 focus:outline-none cursor-pointer">
              <option value="en">EN</option>
              <option value="de">DE</option>
              <option value="fr">FR</option>
              <option value="es">ES</option>
            </select>
            <button onClick={toggleTheme} className="text-gray-300 hover:text-primary transition-colors" aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <a href={`https://github.com/factweaverai`} target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors font-medium">{t.common.nav_github}</a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
