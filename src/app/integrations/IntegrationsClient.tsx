'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AbstractShapes } from '@/components/AbstractShapes';
import {
  ArrowRight,
  Mail,
  FileText,
  Workflow,
  DollarSign,
  Shield,
  Building2,
  AlertTriangle,
  Globe,
  Check,
  Plug,
  Puzzle,
} from 'lucide-react';

export default function IntegrationsPage() {
  const { t } = useTranslation('integrations');

  const categories = [
    {
      key: 'sourceControl',
      icon: Mail,
      color: 'from-orange-500 to-red-500',
      integrations: [
        { name: 'PST Files', status: 'available' },
        { name: 'MBOX', status: 'available' },
        { name: 'EML', status: 'available' },
        { name: 'Gmail Export', status: 'available' },
        { name: 'Outlook 365', status: 'coming' },
        { name: 'Exchange Server', status: 'coming' },
      ],
    },
    {
      key: 'cloud',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      integrations: [
        { name: 'PDF', status: 'available' },
        { name: 'Word (.docx)', status: 'available' },
        { name: 'Scanned Images', status: 'available' },
        { name: 'OCR Engine', status: 'available' },
        { name: 'Handwriting', status: 'coming' },
        { name: 'Audio Transcripts', status: 'coming' },
      ],
    },
    {
      key: 'documentation',
      icon: DollarSign,
      color: 'from-emerald-500 to-teal-500',
      integrations: [
        { name: 'CSV Import', status: 'available' },
        { name: 'Excel (.xlsx)', status: 'available' },
        { name: 'Bank Statements', status: 'available' },
        { name: 'SWIFT Messages', status: 'available' },
        { name: 'QuickBooks', status: 'coming' },
        { name: 'SAP Export', status: 'coming' },
      ],
    },
    {
      key: 'projectManagement',
      icon: Building2,
      color: 'from-violet-500 to-purple-500',
      integrations: [
        { name: 'OpenCorporates', status: 'available' },
        { name: 'Court Records', status: 'available' },
        { name: 'Land Registry', status: 'available' },
        { name: 'Patent Databases', status: 'coming' },
        { name: 'SEC Filings', status: 'coming' },
        { name: 'Charity Registers', status: 'coming' },
      ],
    },
    {
      key: 'communication',
      icon: AlertTriangle,
      color: 'from-pink-500 to-rose-500',
      integrations: [
        { name: 'OFAC SDN', status: 'available' },
        { name: 'EU Sanctions', status: 'available' },
        { name: 'UN Sanctions', status: 'available' },
        { name: 'Interpol Notices', status: 'available' },
        { name: 'PEP Lists', status: 'coming' },
        { name: 'Adverse Media', status: 'coming' },
      ],
    },
    {
      key: 'observability',
      icon: Globe,
      color: 'from-amber-500 to-orange-500',
      integrations: [
        { name: 'HTML Archives', status: 'available' },
        { name: 'Wayback Machine', status: 'available' },
        { name: 'Twitter/X Export', status: 'available' },
        { name: 'Facebook Export', status: 'coming' },
        { name: 'LinkedIn', status: 'coming' },
        { name: 'Telegram', status: 'coming' },
      ],
    },
  ];

  const features = [
    { key: 'bidirectional', icon: ArrowRight },
    { key: 'realtime', icon: Workflow },
    { key: 'secure', icon: Shield },
    { key: 'extensible', icon: Puzzle },
  ];

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
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-full mb-6">
              <Plug className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/features" className="btn-secondary">
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{t(`features.${feature.key}.title`)}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {t(`features.${feature.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('categories.title')}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t('categories.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-12">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {t(`categories.items.${category.key}.title`)}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {t(`categories.items.${category.key}.description`)}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.integrations.map((integration) => (
                    <div
                      key={integration.name}
                      className="relative flex flex-col items-center justify-center p-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group"
                    >
                      {/* Placeholder logo */}
                      <div className="w-12 h-12 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center mb-2 shadow-sm">
                        <span className="text-lg font-bold text-slate-400">
                          {integration.name.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-center">{integration.name}</span>
                      {integration.status === 'coming' && (
                        <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full">
                          {t('comingSoon')}
                        </span>
                      )}
                      {integration.status === 'available' && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integrations */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 text-sm font-medium rounded-full mb-4">
                <Puzzle className="w-4 h-4" />
                {t('custom.badge')}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('custom.title')}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                {t('custom.description')}
              </p>

              <ul className="space-y-3 mb-8">
                {Array.isArray(t('custom.features')) && (t('custom.features') as unknown as string[]).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary">
                {t('custom.cta')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Code block mockup */}
              <div className="rounded-2xl bg-slate-900 p-6 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm text-slate-500">plugin.config.ts</span>
                </div>
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code>{`import { definePlugin } from '@codegraft/sdk';

export default definePlugin({
  name: 'custom-scanner',
  version: '1.0.0',

  async onIngest(context) {
    // Your custom ingestion logic
    const data = await fetchCustomSource();

    return context.addNodes(
      data.map(item => ({
        type: 'CustomEntity',
        properties: item,
      }))
    );
  },

  async onAnalyze(graph) {
    // Custom analysis rules
    return graph.findPatterns({
      type: 'Violation',
      rule: 'custom-policy',
    });
  },
});`}</code>
                </pre>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-700 bg-white hover:bg-primary-50 rounded-xl transition-all duration-200 shadow-lg"
              >
                {t('cta.button')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white/30 hover:bg-white/10 rounded-xl transition-all duration-200"
              >
                {t('cta.buttonSecondary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
