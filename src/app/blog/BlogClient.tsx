'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AbstractShapes } from '@/components/AbstractShapes';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Image from 'next/image';
import { getBlogPost, Locale } from '@/lib/translations';

type BlogPostData = {
  slug: string;
  image: string;
  title?: string;
  category?: string;
  date?: string;
  readTime?: string;
  excerpt?: string;
  author?: string;
};

export default function BlogPage() {
  const { t, language } = useTranslation('blog');
  const [postsData, setPostsData] = useState<BlogPostData[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const posts = [
        {
          slug: 'architectural-drift',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
        },
        {
          slug: 'graphrag-architecture',
          image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=400&fit=crop',
        },
      ];

      const loadedPosts = await Promise.all(
        posts.map(async (post) => {
          const data = await getBlogPost(language as Locale, post.slug);
          return { ...post, ...data } as BlogPostData;
        })
      );
      setPostsData(loadedPosts);
    }
    loadPosts();
  }, [language]);

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
              {t('blog.title')}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
              {t('blog.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {postsData.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group card-hover overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title || ''}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-sm font-medium rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author & CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {t('blog.byAuthor')} {post.author}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:gap-2 transition-all"
                    >
                      {t('blog.readMore')}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
