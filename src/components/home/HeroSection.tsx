'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { WordRotator } from '@/components/WordRotator';
import { AbstractShapes } from '@/components/AbstractShapes';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { ArrowRight, Play, Building2, TrendingDown, Zap } from 'lucide-react';


export function HeroSection() {
  const { t } = useTranslation('home');

  const stats = [
    { icon: Building2, label: t('hero.stats.companies') },
    { icon: TrendingDown, label: t('hero.stats.reduction') },
    { icon: Zap, label: t('hero.stats.faster') },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <AnimatedBackground />
      <AbstractShapes variant="hero" />

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                {t('hero.tagline')}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              {t('hero.titlePrefix')}{' '}
              <WordRotator
                words={t('hero.rotatingWords') as string[]}
                className="min-w-[200px]"
              />{' '}
              <br className="hidden md:block" />
              {t('hero.titleSuffix')}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-xl"
            >
              {t('hero.description')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/contact" className="btn-primary">
                {t('hero.cta.primary')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="btn-secondary">
                <Play className="w-5 h-5 mr-2" />
                {t('hero.cta.secondary')}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <stat.icon className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/20">
              {/* Placeholder for dashboard mockup */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
                {/* Mock dashboard UI */}
                <div className="h-full flex flex-col gap-4">
                  {/* Header bar */}
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-4 flex-1 h-6 bg-slate-700/50 rounded" />
                  </div>

                  {/* Main content area */}
                  <div className="flex-1 grid grid-cols-3 gap-4">
                    {/* Sidebar */}
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="h-8 bg-slate-700/30 rounded animate-pulse"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* Graph visualization */}
                    <div className="col-span-2 relative rounded-lg bg-slate-800/50 overflow-hidden">
                      {/* Animated nodes */}
                      <svg className="absolute inset-0 w-full h-full">
                        <defs>
                          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                        {/* Lines */}
                        <line x1="30%" y1="30%" x2="60%" y2="50%" stroke="#6366f1" strokeWidth="1" opacity="0.5" />
                        <line x1="60%" y1="50%" x2="80%" y2="30%" stroke="#6366f1" strokeWidth="1" opacity="0.5" />
                        <line x1="60%" y1="50%" x2="50%" y2="75%" stroke="#6366f1" strokeWidth="1" opacity="0.5" />
                        <line x1="30%" y1="30%" x2="20%" y2="60%" stroke="#6366f1" strokeWidth="1" opacity="0.5" />
                        <line x1="20%" y1="60%" x2="50%" y2="75%" stroke="#6366f1" strokeWidth="1" opacity="0.5" />
                        {/* Nodes */}
                        <circle cx="30%" cy="30%" r="12" fill="url(#nodeGradient)" className="animate-pulse" />
                        <circle cx="60%" cy="50%" r="16" fill="url(#nodeGradient)" className="animate-pulse animate-delay-100" />
                        <circle cx="80%" cy="30%" r="10" fill="url(#nodeGradient)" className="animate-pulse animate-delay-200" />
                        <circle cx="50%" cy="75%" r="14" fill="url(#nodeGradient)" className="animate-pulse animate-delay-300" />
                        <circle cx="20%" cy="60%" r="8" fill="url(#nodeGradient)" className="animate-pulse animate-delay-400" />
                      </svg>

                      {/* Floating labels */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                        Live
                      </div>
                    </div>
                  </div>

                  {/* Bottom stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {['Entities: 12.4K', 'Connections: 847', 'Alerts: 3'].map((stat, i) => (
                      <div
                        key={i}
                        className="px-4 py-3 bg-slate-700/30 rounded-lg text-center"
                      >
                        <span className="text-sm text-primary-400">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 blur-3xl -z-10" />
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-4 top-1/4 glass p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">New Connection</p>
                  <p className="text-xs text-slate-500">Shell Corp → Senator X</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -right-4 bottom-1/4 glass p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">Contradiction Found</p>
                  <p className="text-xs text-slate-500">Source: Panama_04.pdf</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
