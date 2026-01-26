'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export function TestimonialsSection() {
  const { t } = useTranslation('home');

  const testimonials = [
    { index: 0, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
    { index: 1, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
    { index: 2, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
  ];

  return (
    <section className="section-padding relative bg-slate-50 dark:bg-slate-900/50">
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
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-8 relative"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary-200 dark:text-primary-800 absolute top-6 right-6" />

              {/* Quote */}
              <p className="text-slate-700 dark:text-slate-300 mb-6 relative z-10 italic">
                &ldquo;{t(`testimonials.items.${item.index}.quote`)}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <Image
                    src={item.avatar}
                    alt={t(`testimonials.items.${item.index}.author`)}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{t(`testimonials.items.${item.index}.author`)}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t(`testimonials.items.${item.index}.role`)}, {t(`testimonials.items.${item.index}.company`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
