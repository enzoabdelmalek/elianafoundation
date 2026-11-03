"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconRainbowBrand, IconHeart } from "./Icons";

const navLinks = [
    { href: "/",        label: "Accueil" },
    { href: "/#mission", label: "Notre mission" },
    { href: "/actualites", label: "Actualités" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Pages with dark (navy) hero — header starts transparent with white text
    const isDark = pathname === "/" || pathname === "/don" || pathname.startsWith("/actualites");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => { setMenuOpen(false); }, [pathname]);
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        if (href.startsWith("/#")) return pathname === "/";
        return pathname.startsWith(href);
    };

    const textColor = !scrolled && isDark ? "rgba(255,255,255,0.88)" : "var(--navy)";
    const logoColor = !scrolled && isDark ? "#fff" : "var(--purple)";
    const subColor  = !scrolled && isDark ? "rgba(255,255,255,0.45)" : "var(--muted)";

    return (
        <>
            <header style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
                height: scrolled ? 74 : 92,
                background: scrolled ? "rgba(255,251,245,.96)" : "transparent",
                backdropFilter: scrolled ? "blur(18px)" : "none",
                borderBottom: scrolled ? "1px solid var(--border)" : "none",
                transition: "height 0.4s cubic-bezier(.16,1,.3,1), background 0.35s, border-color 0.35s, backdrop-filter 0.35s",
                display: "flex", alignItems: "center",
            }}>
                <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>

                    {/* Logo */}
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div className="float-slow" style={{ lineHeight: 0 }}>
                            <IconRainbowBrand size={32} />
                        </div>
                        <div>
                            <span className="font-script" style={{ fontSize: "1.4rem", color: logoColor, lineHeight: 1, display: "block", transition: "color 0.35s" }}>Eliana</span>
                            <span style={{ fontSize: "0.52rem", letterSpacing: "0.26em", color: subColor, textTransform: "uppercase", display: "block", marginTop: -1, transition: "color 0.35s" }}>Foundation</span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="hide-mobile">
                        {navLinks.map(l => (
                            <Link key={l.href} href={l.href}
                                className={`nav-link${isActive(l.href) ? " nav-link-active" : ""}`}
                                style={{ color: isActive(l.href) ? "var(--gold)" : textColor, transition: "color 0.35s" }}>
                                {l.label}
                            </Link>
                        ))}
                        <Link href="/don" className="btn btn-gold" style={{ padding: "10px 24px", fontSize: "0.8rem", gap: 7 }}>
                            <IconHeart size={13} color="#fff" />
                            Faire un don
                        </Link>
                    </nav>

                    {/* Burger */}
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
                        className="show-mobile-flex"
                        style={{ background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 6 }}>
                        {[0, 1, 2].map(i => (
                            <span key={i} style={{
                                display: "block", width: 24, height: 2,
                                background: !scrolled && isDark ? "#fff" : "var(--navy)",
                                borderRadius: 2, transition: "all 0.3s cubic-bezier(.16,1,.3,1)",
                                transform: menuOpen
                                    ? i === 0 ? "translateY(7px) rotate(45deg)"
                                    : i === 2 ? "translateY(-7px) rotate(-45deg)" : "scaleX(0)"
                                    : "none",
                                opacity: menuOpen && i === 1 ? 0 : 1,
                            }} />
                        ))}
                    </button>
                </div>
            </header>

            {/* Mobile menu — full screen navy */}
            <div style={{
                position: "fixed", inset: 0, zIndex: 40,
                background: "var(--navy-deep)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: 40,
                transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
                transition: "transform 0.45s cubic-bezier(.16,1,.3,1)",
                pointerEvents: menuOpen ? "auto" : "none",
            }}>
                {/* Logo in menu */}
                <div style={{ position: "absolute", top: 24, left: 24, display: "flex", alignItems: "center", gap: 10 }}>
                    <IconRainbowBrand size={28} />
                    <span className="font-script" style={{ color: "#fff", fontSize: "1.3rem" }}>Eliana</span>
                </div>

                {navLinks.map((l, i) => (
                    <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "clamp(1.6rem, 6vw, 2.2rem)",
                            color: isActive(l.href) ? "var(--gold)" : "rgba(255,255,255,0.85)",
                            transition: "color 0.2s",
                            transitionDelay: menuOpen ? `${i * 0.06}s` : "0s",
                        }}>
                        {l.label}
                    </Link>
                ))}

                <Link href="/don" onClick={() => setMenuOpen(false)}
                    className="btn btn-gold"
                    style={{ marginTop: 8, fontSize: "0.95rem", padding: "14px 40px", gap: 9 }}>
                    <IconHeart size={16} color="#fff" />
                    Faire un don
                </Link>
            </div>

            {/* Spacer — matches header height to avoid gap on scroll */}
            <div style={{ height: scrolled ? 74 : 92, transition: "height 0.4s cubic-bezier(.16,1,.3,1)" }} />
        </>
    );
}
