'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import { Building2, Users, Mail, Scale } from 'lucide-react';

export default function ImpressumPage() {
  const { t } = useTranslation('common');

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-12">{t('impressum.title')}</h1>

            <div className="space-y-8">
              {/* Company Info */}
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-primary-500" />
                  <h2 className="text-xl font-semibold">{t('impressum.company.title')}</h2>
                </div>
                <div className="space-y-2 text-slate-600 dark:text-slate-400">
                  <p className="font-medium text-slate-900 dark:text-slate-100">
                    {t('impressum.company.name')}
                  </p>
                  <p>{t('impressum.company.address')}</p>
                  <p>{t('impressum.company.city')}</p>
                  <p>{t('impressum.company.country')}</p>
                  <p className="pt-4">{t('impressum.company.register')}</p>
                  <p>{t('impressum.company.vat')}</p>
                </div>
              </div>

              {/* Representatives */}
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary-500" />
                  <h2 className="text-xl font-semibold">{t('impressum.representatives.title')}</h2>
                </div>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                  {Array.isArray(t('impressum.representatives.list')) && (t('impressum.representatives.list') as unknown as string[]).map((name, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-primary-500" />
                  <h2 className="text-xl font-semibold">{t('impressum.contact.title')}</h2>
                </div>
                <div className="space-y-2 text-slate-600 dark:text-slate-400">
                  <p>
                    Email:{' '}
                    <a
                      href={`mailto:${t('impressum.contact.email')}`}
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {t('impressum.contact.email')}
                    </a>
                  </p>
                  <p>Phone: {t('impressum.contact.phone')}</p>
                </div>
              </div>

              {/* Responsibility */}
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary-500" />
                  <h2 className="text-xl font-semibold">{t('impressum.responsibility.title')}</h2>
                </div>
                <div className="space-y-2 text-slate-600 dark:text-slate-400">
                  <p>{t('impressum.responsibility.name')}</p>
                  <p>{t('impressum.responsibility.address')}</p>
                </div>
              </div>

              {/* Dispute */}
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-primary-500" />
                  <h2 className="text-xl font-semibold">{t('impressum.dispute.title')}</h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400">{t('impressum.dispute.content')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
