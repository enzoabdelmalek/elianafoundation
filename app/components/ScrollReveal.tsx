"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
    useEffect(() => {
        if ("scrollRestoration" in history) history.scrollRestoration = "manual";
        window.scrollTo({ top: 0, behavior: "instant" });

        const els = Array.from(document.querySelectorAll<HTMLElement>("[data-sr]"));

        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add("on");
                    observer.unobserve(e.target);
                }
            }),
            { threshold: 0.15 }
        );

        els.forEach(el => {
            const rect = el.getBoundingClientRect();
            const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
            if (!inViewport) {
                el.classList.add("sr-hidden");
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, []);

    return null;
}
