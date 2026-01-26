'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import { AbstractShapes } from '@/components/AbstractShapes';
import { Brain, Eye, Database, Shield, Users, Clock } from 'lucide-react';

const featureIcons = {
  graphRag: Brain,
  visualization: Eye,
  ingestion: Database,
  governance: Shield,
  personas: Users,
  timeMachine: Clock,
};

export function FeaturesSection() {
  const { t } = useTranslation('home');

  const features = [
    { key: 'graphRag', icon: featureIcons.graphRag },
    { key: 'visualization', icon: featureIcons.visualization },
    { key: 'ingestion', icon: featureIcons.ingestion },
    { key: 'governance', icon: featureIcons.governance },
    { key: 'personas', icon: featureIcons.personas },
    { key: 'timeMachine', icon: featureIcons.timeMachine },
  ];

  return (
    <section id="features" className="section-padding relative bg-slate-50 dark:bg-slate-900/50">
      <AbstractShapes variant="section" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card-hover p-6 lg:p-8"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">
                {t(`features.list.${feature.key}.title`)}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t(`features.list.${feature.key}.description`)}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
