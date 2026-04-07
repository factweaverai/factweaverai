"use client";
import Link from "next/link";
import { useTranslation } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 pt-16 pb-8 mt-auto transition-colors duration-300">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h4 className="font-extrabold text-2xl mb-6 text-gray-900 dark:text-white">{t.hero.title}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">{t.footer.links}</h4>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
            <li><Link href="/" className="hover:text-primary transition-colors">{t.common.home}</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">{t.common.about}</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">{t.common.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">{t.footer.legal}</h4>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
            <li><Link href="/impressum" className="hover:text-primary transition-colors">{t.common.impressum}</Link></li>
            <li><Link href="/privacy" className="hover:text-primary transition-colors">{t.common.privacy}</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} {t.hero.title}. {t.footer.rights}
      </div>
    </footer>
  );
}
