"use client";
import Link from "next/link";
import { useTranslation } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
      className="border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="logo" className="w-8 h-8" />
              {t.hero.title}
            </Link>
            <p className="text-gray-400">{t.footer.tagline}</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">{t.footer.links}</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-primary transition-colors">{t.common.home}</Link>
              <Link href="/about" className="block text-gray-400 hover:text-primary transition-colors">{t.common.about}</Link>
              <Link href="/contact" className="block text-gray-400 hover:text-primary transition-colors">{t.common.contact}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">{t.footer.legal}</h4>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-gray-400 hover:text-primary transition-colors">{t.common.privacy}</Link>
              <Link href="/impressum" className="block text-gray-400 hover:text-primary transition-colors">{t.common.impressum}</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} {t.hero.title}. {t.footer.rights}
        </div>
      </div>
    </motion.footer>
  );
}

