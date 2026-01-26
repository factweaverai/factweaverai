'use client';

import { useEffect, useRef } from 'react';

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvasWidth) this.x = 0;
    if (this.x < 0) this.x = canvasWidth;
    if (this.y > canvasHeight) this.y = 0;
    if (this.y < 0) this.y = canvasHeight;
  }

  draw(drawCtx: CanvasRenderingContext2D, isDark: boolean) {
    drawCtx.fillStyle = isDark
      ? `rgba(99, 102, 241, ${this.opacity})`
      : `rgba(99, 102, 241, ${this.opacity * 0.5})`;
    drawCtx.beginPath();
    drawCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    drawCtx.fill();
  }
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const ctx = canvasEl.getContext('2d');
    if (!ctx) return;

    // Store references to avoid null checks
    const canvas = canvasEl;
    const context = ctx;

    let animationId: number;
    let particles: Particle[] = [];


    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    }

    function initParticles() {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    }

    function connectParticles(drawCtx: CanvasRenderingContext2D, isDark: boolean) {
      const maxDistance = 150;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.2;
            drawCtx.strokeStyle = isDark
              ? `rgba(99, 102, 241, ${opacity})`
              : `rgba(99, 102, 241, ${opacity * 0.5})`;
            drawCtx.lineWidth = 0.5;
            drawCtx.beginPath();
            drawCtx.moveTo(particles[a].x, particles[a].y);
            drawCtx.lineTo(particles[b].x, particles[b].y);
            drawCtx.stroke();
          }
        }
      }
    }

    function animate() {
      const isDark = document.documentElement.classList.contains('dark');
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update(canvas.width, canvas.height);
        particle.draw(context, isDark);
      }

      connectParticles(context, isDark);
      animationId = requestAnimationFrame(animate);
    }

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
