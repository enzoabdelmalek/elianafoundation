"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Apparition au défilement des éléments [data-sr] sous l'écran, rejouée à chaque page (navigation comprise).
export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
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
    }, [pathname]);

    return null;
}
