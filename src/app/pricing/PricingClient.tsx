'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AbstractShapes } from '@/components/AbstractShapes';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PricingPage() {
  const { t } = useTranslation('pricing');
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = ['starter', 'growth', 'enterprise'] as const;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <AbstractShapes variant="hero" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('pricing.title')}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8">
              {t('pricing.subtitle')}
            </p>

            {/* Billing toggle */}
            <div className="inline-flex items-center gap-4 p-2 bg-slate-100 dark:bg-slate-800 rounded-xl">
              <button
                onClick={() => setIsAnnual(false)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                  !isAnnual
                    ? 'bg-white dark:bg-slate-700 shadow-sm text-primary-600 dark:text-primary-400'
                    : 'text-slate-600 dark:text-slate-400'
                )}
              >
                {t('pricing.monthly')}
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2',
                  isAnnual
                    ? 'bg-white dark:bg-slate-700 shadow-sm text-primary-600 dark:text-primary-400'
                    : 'text-slate-600 dark:text-slate-400'
                )}
              >
                {t('pricing.annually')}
                <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full">
                  {t('pricing.save')}
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const isPopular = plan === 'growth';
              const features = t(`pricing.plans.${plan}.features`) as unknown as string[];

              return (
                <motion.div
                  key={plan}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    'relative rounded-2xl p-8',
                    isPopular
                      ? 'bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-2xl shadow-primary-500/30 scale-105 z-10'
                      : 'card'
                  )}
                >
                  {/* Popular badge */}
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-400 text-accent-900 text-sm font-medium rounded-full">
                      {t(`pricing.plans.${plan}.popular`)}
                    </div>
                  )}

                  {/* Plan name */}
                  <h3 className="text-xl font-semibold mb-2">
                    {t(`pricing.plans.${plan}.name`)}
                  </h3>
                  <p
                    className={cn(
                      'text-sm mb-6',
                      isPopular ? 'text-primary-100' : 'text-slate-600 dark:text-slate-400'
                    )}
                  >
                    {t(`pricing.plans.${plan}.description`)}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      {isAnnual
                        ? t(`pricing.plans.${plan}.priceAnnually`)
                        : t(`pricing.plans.${plan}.priceMonthly`)}
                    </span>
                    {plan !== 'starter' && (
                      <span
                        className={cn(
                          'text-sm ml-2',
                          isPopular ? 'text-primary-100' : 'text-slate-500'
                        )}
                      >
                        {plan === 'enterprise' && isAnnual
                          ? t('pricing.perYear')
                          : t('pricing.perMonth')}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={cn(
                      'block w-full text-center py-3 rounded-lg font-medium transition-all mb-8',
                      isPopular
                        ? 'bg-white text-primary-600 hover:bg-primary-50'
                        : 'btn-primary'
                    )}
                  >
                    {t(`pricing.plans.${plan}.cta`)}
                  </Link>

                  {/* Features */}
                  <ul className="space-y-3">
                    {Array.isArray(features) && features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className={cn(
                            'w-5 h-5 flex-shrink-0 mt-0.5',
                            isPopular ? 'text-accent-300' : 'text-primary-500'
                          )}
                        />
                        <span
                          className={cn(
                            'text-sm',
                            isPopular ? 'text-primary-50' : 'text-slate-600 dark:text-slate-400'
                          )}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">{t('pricing.faq.title')}</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {(() => {
              const faqItems = t('pricing.faq.items') as unknown as Array<{ question: string; answer: string }>;
              if (!Array.isArray(faqItems)) return null;
              return faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-medium">{item.question}</span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 transition-transform flex-shrink-0 ml-4',
                        openFaq === index && 'rotate-180'
                      )}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400">
                      {item.answer}
                    </div>
                  )}
                </motion.div>
              ));
            })()}
          </div>
        </div>
      </section>
    </div>
  );
}
