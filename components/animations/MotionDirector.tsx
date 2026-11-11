"use client";

import { useEffect } from "react";

export function MotionDirector() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let disposed = false;
    let cleanup = () => {};
    const start = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        gsap.fromTo("[data-hero-animate]",
          { y: 38, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.3, ease: "power3.out", stagger: .13, delay: .12, clearProps: "transform,opacity" }
        );
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.fromTo(element,
            { y: 32, opacity: 0 },
            { y: 0, opacity: 1, duration: .9, ease: "power2.out", clearProps: "transform,opacity", scrollTrigger: { trigger: element, start: "top 94%", once: true } }
          );
        });
        const mediaElement = document.querySelector("[data-parallax]");
        if (mediaElement && window.innerWidth >= 1024) {
          gsap.to(mediaElement, { yPercent: 7, ease: "none", scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: 1 } });
        }
      }, document.body);
      cleanup = () => context.revert();
    };

    start().catch(() => { /* Optional animation may fail without affecting content. */ });
    return () => { disposed = true; cleanup(); };
  }, []);
  return null;
}
