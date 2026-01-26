'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';

export default function TermsPage() {
  const { t } = useTranslation('common');

  const sections = [
    'acceptance',
    'services',
    'account',
    'usage',
    'data',
    'ip',
    'liability',
    'termination',
    'changes',
    'governing',
  ];

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('terms.title')}</h1>
            <p className="text-slate-500 dark:text-slate-400 mb-12">{t('terms.lastUpdated')}</p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {sections.map((section, index) => (
                <motion.div
                  key={section}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="mb-8"
                >
                  <h2 className="text-xl font-semibold mb-3">
                    {t(`terms.sections.${section}.title`)}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    {t(`terms.sections.${section}.content`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
