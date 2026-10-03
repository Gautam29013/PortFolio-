"use client";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // gsap ticker gives time in seconds, lenis.raf expects ms
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    // Disable lag smoothing so fast scrolls don't skip frames
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false}
      options={{
        lerp: 0.12,           // snappier response (was 0.08 — too slow)
        duration: 1.2,        // shorter scroll animation (was 1.5)
        smoothWheel: true,
        wheelMultiplier: 1.0, // natural scroll speed
        touchMultiplier: 1.8, // smooth on touch/trackpad
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      }}
    >
      {children}
    </ReactLenis>
  );
}
