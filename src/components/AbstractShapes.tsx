'use client';

import { cn } from '@/lib/utils';

interface AbstractShapesProps {
  variant?: 'hero' | 'section' | 'corner';
  className?: string;
}

export function AbstractShapes({ variant = 'hero', className }: AbstractShapesProps) {
  if (variant === 'hero') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        {/* Large gradient orb - top right */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-400/30 to-accent-400/30 rounded-full blur-3xl animate-pulse-slow" />

        {/* Medium orb - bottom left */}
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-accent-400/20 to-primary-400/20 rounded-full blur-3xl animate-pulse-slow animate-delay-200" />

        {/* Floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-500/40 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent-500/30 rounded-full animate-float animate-delay-300" />
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-primary-400/50 rounded-full animate-float animate-delay-500" />

        {/* Geometric lines */}
        <svg className="absolute top-20 right-20 w-32 h-32 text-primary-200/30 dark:text-primary-500/10 animate-rotate-slow" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      </div>
    );
  }

  if (variant === 'section') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-200/20 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent-200/20 to-transparent rounded-full blur-2xl" />
      </div>
    );
  }

  if (variant === 'corner') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        <svg className="absolute -top-10 -right-10 w-40 h-40 text-primary-100 dark:text-primary-900/30" viewBox="0 0 100 100">
          <polygon points="50,0 100,100 0,100" fill="currentColor" />
        </svg>
      </div>
    );
  }

  return null;
}
