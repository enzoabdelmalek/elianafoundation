"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconRainbow } from "./Icons";

const navLinks = [
    { href: "/#mission", label: "Notre Mission" },
    { href: "/#histoire", label: "Notre Histoire" },
    { href: "/#actions", label: "Nos Actions" },
    { href: "/#hommage", label: "Hommage" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => { setMenuOpen(false); }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <header style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
                background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled ? "1px solid #E5E7EB" : "none",
                transition: "all 0.3s",
                height: 72,
                display: "flex", alignItems: "center",
            }}>
                <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    {/* Logo */}
                    <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
                        <div className="float">
                            <IconRainbow size={32} />
                        </div>
                        <div>
                            <span className="font-script" style={{ fontSize: "1.4rem", color: "var(--purple)", lineHeight: 1 }}>Eliana</span>
                            <span style={{ display: "block", fontSize: "0.58rem", letterSpacing: "0.22em", color: "var(--muted)", textTransform: "uppercase", marginTop: -2 }}>Foundation</span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hide-mobile">
                        {navLinks.map(l => (
                            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
                        ))}
                        <Link href="/contact" className="btn-gold" style={{ padding: "10px 24px", fontSize: "0.8rem" }}>
                            Soutenir la fondation
                        </Link>
                    </nav>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                        style={{ background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 4 }}
                        className="show-mobile-flex"
                    >
                        {[0,1,2].map(i => (
                            <span key={i} style={{
                                display: "block", width: 22, height: 2,
                                background: "var(--purple)",
                                borderRadius: 2,
                                transition: "all 0.3s",
                                transform: menuOpen
                                    ? i === 0 ? "translateY(7px) rotate(45deg)"
                                    : i === 2 ? "translateY(-7px) rotate(-45deg)"
                                    : "scaleX(0)"
                                    : "none",
                                opacity: menuOpen && i === 1 ? 0 : 1,
                            }} />
                        ))}
                    </button>
                </div>
            </header>

            {/* Mobile menu */}
            {menuOpen && (
                <div style={{
                    position: "fixed", inset: 0, zIndex: 40,
                    background: "#fff",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    gap: 32,
                    animation: "fadeIn 0.2s both",
                }}>
                    {navLinks.map(l => (
                        <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                            style={{ fontSize: "1.5rem", fontFamily: "'Playfair Display', serif", color: "var(--navy)", textDecoration: "none" }}>
                            {l.label}
                        </Link>
                    ))}
                    <Link href="/contact" className="btn-gold" onClick={() => setMenuOpen(false)}>
                        Soutenir la fondation
                    </Link>
                </div>
            )}

            {/* Spacer */}
            <div style={{ height: 72 }} />

            <style>{`
                @media (max-width: 768px) {
                    .hide-mobile { display: none !important; }
                    .show-mobile-flex { display: flex !important; }
                }
                @media (min-width: 769px) {
                    .show-mobile-flex { display: none !important; }
                }
            `}</style>
        </>
    );
}
