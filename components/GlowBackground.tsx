'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function GlowBackground({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointerDevice, setIsPointerDevice] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Enable glow on all pages sitewide
  const isGlowRoute = true;

  useEffect(() => {
    // Check for pointer device (desktop)
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    setIsPointerDevice(hasPointer);

    // Check for reduced motion preference
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setPrefersReducedMotion(reducedMotion);

    // Only track mouse if it's a pointer device and user doesn't prefer reduced motion
    if (hasPointer && !reducedMotion && isGlowRoute) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isGlowRoute]);

  const shouldShowGlow = isPointerDevice && !prefersReducedMotion && isGlowRoute;

  return (
    <>
      {/* Mouse-follow glow for desktop (sitewide) */}
      {shouldShowGlow && (
        <div
          className="fixed inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(220, 190, 100, 0.28) 0%, rgba(200, 175, 110, 0.15) 25%, rgba(180, 160, 110, 0.06) 45%, transparent 70%)`,
            mixBlendMode: 'soft-light',
            zIndex: 1,
          }}
        />
      )}

      {/* Content */}
      {children}
    </>
  );
}
