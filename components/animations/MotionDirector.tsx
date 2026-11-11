"use client";

import { useEffect } from "react";

export function MotionDirector() {
  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return;

    let disposed = false;
    let cleanup = () => {};

    const initialize = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);
      if (disposed) return;

      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        // Intro choreography: reveal textual hierarchy before the original brand carousel.
        gsap.fromTo(
          "[data-hero-animate]",
          { y: 31, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.1, delay: 0.08, clearProps: "transform,opacity" }
        );

        // Section transitions stay readable with JS disabled and never lock scrolling.
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element, index) => {
          gsap.fromTo(
            element,
            { y: 30, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.88, ease: "power2.out",
              delay: index % 3 === 1 ? 0.08 : 0,
              clearProps: "transform,opacity",
              scrollTrigger: { trigger: element, start: "top 94%", once: true }
            }
          );
        });

        // Image choreography has a different tempo from the text.
        gsap.utils.toArray<HTMLElement>(".luxe-editorial-panel img").forEach((element) => {
          gsap.fromTo(
            element,
            { scale: 1.09 },
            {
              scale: 1, duration: 1.7, ease: "power3.out",
              clearProps: "scale",
              scrollTrigger: { trigger: element, start: "top 96%", once: true }
            }
          );
        });
      }, document.body);

      cleanup = () => context.revert();
    };

    initialize().catch(() => { /* CSS and controls remain usable if optional motion fails. */ });
    return () => { disposed = true; cleanup(); };
  }, []);
  return null;
}
