'use client';

import { useEffect, useState } from 'react';

export default function HeroGlow({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointerDevice, setIsPointerDevice] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for pointer device (desktop)
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    setIsPointerDevice(hasPointer);

    // Check for reduced motion preference
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setPrefersReducedMotion(reducedMotion);

    // Only track mouse if it's a pointer device and user doesn't prefer reduced motion
    if (hasPointer && !reducedMotion) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  const shouldShowGlow = isPointerDevice && !prefersReducedMotion;

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Static radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(140, 130, 90, 0.15), rgba(20, 20, 25, 1) 70%)',
        }}
      />

      {/* Mouse-follow glow for desktop (hero only) */}
      {shouldShowGlow && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(180, 160, 110, 0.10) 0%, rgba(180, 160, 110, 0.04) 20%, transparent 60%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
