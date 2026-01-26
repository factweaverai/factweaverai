'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AbstractShapes } from '@/components/AbstractShapes';
import {
  Brain,
  Eye,
  Database,
  Shield,
  Users,
  Clock,
  GitBranch,
  Search,
  Bell,
  BarChart3,
  Workflow,
  Lock,
  Zap,
  Globe,
  Code2,
  FileCode,
  ArrowRight,
  Check,
} from 'lucide-react';
import Image from 'next/image';

export default function FeaturesPage() {
  const { t } = useTranslation('features');

  const mainFeatures = [
    {
      key: 'graphRag',
      icon: Brain,
      color: 'from-violet-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop',
    },
    {
      key: 'visualization',
      icon: Eye,
      color: 'from-cyan-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    },
    {
      key: 'ingestion',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    },
    {
      key: 'governance',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
    },
  ];

  const additionalFeatures = [
    { key: 'timeMachine', icon: Clock },
    { key: 'personas', icon: Users },
    { key: 'search', icon: Search },
    { key: 'alerts', icon: Bell },
    { key: 'analytics', icon: BarChart3 },
    { key: 'workflows', icon: Workflow },
    { key: 'security', icon: Lock },
    { key: 'performance', icon: Zap },
  ];

  const capabilities = [
    { key: 'codeAnalysis', icon: Code2 },
    { key: 'docSync', icon: FileCode },
    { key: 'multiRepo', icon: GitBranch },
    { key: 'globalScale', icon: Globe },
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
              <Zap className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                {t('featuresPage.hero.badge')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('featuresPage.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8">
              {t('featuresPage.hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                {t('featuresPage.hero.cta')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/pricing" className="btn-secondary">
                {t('featuresPage.hero.ctaSecondary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Features - Alternating Layout */}
      <section className="pb-20">
        <div className="container-custom">
          {mainFeatures.map((feature, index) => {
             const benefits = t(`featuresPage.main.${feature.key}.benefits`) as unknown as string[];
             return (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 ${
                index !== mainFeatures.length - 1 ? 'border-b border-slate-200 dark:border-slate-800' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t(`featuresPage.main.${feature.key}.title`)}
                </h2>

                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                  {t(`featuresPage.main.${feature.key}.description`)}
                </p>

                <ul className="space-y-3 mb-8">
                  {Array.isArray(benefits) && benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-400">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:gap-3 gap-2 transition-all"
                >
                  {t('featuresPage.learnMore')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={feature.image}
                    alt={t(`featuresPage.main.${feature.key}.title`)}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${feature.color} opacity-10`} />
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('featuresPage.additional.title')}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t('featuresPage.additional.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-hover p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(`featuresPage.additional.features.${feature.key}.title`)}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {t(`featuresPage.additional.features.${feature.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('featuresPage.capabilities.title')}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t('featuresPage.capabilities.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50 flex items-center justify-center mx-auto mb-4">
                  <cap.icon className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(`featuresPage.capabilities.items.${cap.key}.title`)}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t(`featuresPage.capabilities.items.${cap.key}.description`)}
                </p>
              </motion.div>
            ))}
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
              {t('featuresPage.cta.title')}
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              {t('featuresPage.cta.subtitle')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-700 bg-white hover:bg-primary-50 rounded-xl transition-all duration-200 shadow-lg"
            >
              {t('featuresPage.cta.button')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
