"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
    { href: "/#mission",   label: "Notre mission" },
    { href: "/#histoire",  label: "Notre histoire" },
    { href: "/actualites", label: "Actualités" },
    { href: "/contact",    label: "Contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const close = () => setMenuOpen(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    // Les ancres de l'accueil (/#mission) ne marquent pas de page courante.
    const current = (href: string) => (!href.startsWith("/#") && pathname.startsWith(href) ? "page" : undefined);

    return (
        <header style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--ground)", borderBottom: "1px solid var(--line)" }}>
            <div className="container" style={{ minHeight: 76, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
                <Link href="/" onClick={close} aria-label="Fondation Eliana, accueil"><Logo /></Link>

                <nav aria-label="Navigation principale" className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 28 }}>
                    {navLinks.map(l => (
                        <Link key={l.href} href={l.href} className="nav-link" aria-current={current(l.href)}>{l.label}</Link>
                    ))}
                    <Link href="/don" className="btn btn-primary btn-sm">Faire un don</Link>
                </nav>

                <button type="button" className="show-mobile" onClick={() => setMenuOpen(o => !o)}
                    aria-expanded={menuOpen} aria-controls="menu-mobile" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    style={{ width: 44, height: 44, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, background: "none", border: 0, cursor: "pointer" }}>
                    {[0, 1, 2].map(i => (
                        <span key={i} style={{
                            display: "block", width: 24, height: 2, borderRadius: 2, background: "var(--ink)",
                            transition: "transform 0.3s, opacity 0.3s",
                            transform: menuOpen ? (i === 0 ? "translateY(7px) rotate(45deg)" : i === 2 ? "translateY(-7px) rotate(-45deg)" : "none") : "none",
                            opacity: menuOpen && i === 1 ? 0 : 1,
                        }} />
                    ))}
                </button>
            </div>

            {menuOpen && (
                <nav id="menu-mobile" aria-label="Menu" className="show-mobile" style={{
                    position: "fixed", top: 77, left: 0, right: 0, bottom: 0, background: "var(--ground)",
                    display: "flex", flexDirection: "column", gap: 8, padding: "32px 24px",
                }}>
                    {navLinks.map(l => (
                        <Link key={l.href} href={l.href} onClick={close} aria-current={current(l.href)}
                            style={{ fontFamily: "var(--font-serif)", fontSize: 30, padding: "8px 0", borderBottom: "1px solid var(--line)" }}>
                            {l.label}
                        </Link>
                    ))}
                    <Link href="/don" onClick={close} className="btn btn-primary" style={{ marginTop: 24 }}>Faire un don</Link>
                </nav>
            )}
        </header>
    );
}
