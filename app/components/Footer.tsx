"use client";

import Link from "next/link";
import { IconRainbowBrand, IconInstagram, IconFacebook, IconWhatsApp, IconButterfly, IconHeart, IconMapPin, IconMail, IconPhone } from "./Icons";

const navCol = [
    { href: "/",         label: "Accueil" },
    { href: "/#mission", label: "Notre mission" },
    { href: "/#histoire",label: "Notre histoire" },
    { href: "/#hommage", label: "Hommage" },
    { href: "/actualites", label: "Actualités" },
];

const actCol = [
    { href: "/don",     label: "Faire un don" },
    { href: "/#actions",label: "Nos actions" },
    { href: "/contact", label: "Bénévolat" },
    { href: "/contact", label: "Partenariats" },
    { href: "/contact", label: "Devenez partenaire" },
];

export default function Footer() {
    return (
        <footer style={{ background: "var(--navy-deep)", color: "#fff", padding: "clamp(64px, 10vw, 100px) 0 0" }}>
            <div className="container">
                <div className="footer-grid-mb" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.4fr", gap: "clamp(32px, 4vw, 56px)", marginBottom: 64, alignItems: "start" }}>

                    {/* Brand */}
                    <div>
                        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                            <IconRainbowBrand size={30} />
                            <div>
                                <span className="font-script" style={{ fontSize: "1.5rem", color: "#fff", lineHeight: 1, display: "block" }}>Eliana</span>
                                <span style={{ fontSize: "0.5rem", letterSpacing: "0.26em", color: "rgba(255,255,255,.4)", textTransform: "uppercase", marginTop: -1, display: "block" }}>Foundation</span>
                            </div>
                        </Link>

                        <p className="font-serif" style={{ fontStyle: "italic", color: "rgba(255,255,255,.65)", fontSize: "0.95rem", lineHeight: 1.85, maxWidth: 300, marginBottom: 28 }}>
                            &ldquo;Que chaque enfant que nous aidons porte en lui la même lumière, la même force et les mêmes couleurs.&rdquo;
                        </p>

                        <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                            {[
                                { href: "#", Icon: IconInstagram, label: "Instagram" },
                                { href: "#", Icon: IconFacebook,  label: "Facebook" },
                                { href: "#", Icon: IconWhatsApp,  label: "WhatsApp" },
                            ].map(({ href, Icon, label }) => (
                                <a key={label} href={href} aria-label={label} style={{
                                    width: 40, height: 40, borderRadius: "50%",
                                    border: "1px solid rgba(255,255,255,.18)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "rgba(255,255,255,.55)", transition: "all 0.2s",
                                }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.6)"; (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.08)"; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.18)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.55)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                                    <Icon size={16} color="currentColor" />
                                </a>
                            ))}
                        </div>
                        <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,.28)" }}>@elianafoundation · Reconnue d&apos;utilité publique</p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: 20, fontWeight: 600 }}>Navigation</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                            {navCol.map(l => (
                                <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,.55)", fontSize: "0.85rem", transition: "color 0.2s" }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.55)")}>
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Agir */}
                    <div>
                        <p style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: 20, fontWeight: 600 }}>Agir</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                            {actCol.map(l => (
                                <Link key={l.label} href={l.href} style={{ color: "rgba(255,255,255,.55)", fontSize: "0.85rem", transition: "color 0.2s" }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.55)")}>
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <p style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: 20, fontWeight: 600 }}>Contact</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
                            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                <IconMapPin size={15} color="var(--gold)" style={{ marginTop: 3, flexShrink: 0 }} />
                                <p style={{ color: "rgba(255,255,255,.55)", fontSize: "0.82rem", lineHeight: 1.65 }}>Kinshasa, République Démocratique du Congo</p>
                            </div>
                            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                                <IconMail size={15} color="var(--gold)" style={{ flexShrink: 0 }} />
                                <a href="mailto:contact@elianafoundation.org" style={{ color: "rgba(255,255,255,.55)", fontSize: "0.82rem", transition: "color 0.2s" }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.55)")}>
                                    contact@elianafoundation.org
                                </a>
                            </div>
                            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                                <IconPhone size={15} color="var(--gold)" style={{ flexShrink: 0 }} />
                                <span style={{ color: "rgba(255,255,255,.55)", fontSize: "0.82rem" }}>+243 XXX XXX XXX</span>
                            </div>
                        </div>
                        <Link href="/don" className="btn btn-gold" style={{ padding: "11px 22px", fontSize: "0.78rem", gap: 7 }}>
                            <IconHeart size={13} color="#fff" />
                            Faire un don
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", padding: "24px 0" }}>
                <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                    <div>
                        <p style={{ color: "rgba(255,255,255,.28)", fontSize: "0.72rem" }}>
                            © {new Date().getFullYear()} Fondation Eliana. Tous droits réservés.
                        </p>
                        <p style={{ color: "rgba(255,255,255,.16)", fontSize: "0.68rem", marginTop: 4 }}>
                            Développé & designé par{" "}
                            <a href="https://vibewebagency.fr" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,.28)" }}>
                                Vibe Web Agency
                            </a>
                        </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,.2)" }}>Pour nos enfants, pour leur avenir.</span>
                        <IconButterfly size={13} color="rgba(255,255,255,.22)" />
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 860px) {
                    footer .container > div:first-child { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 560px) {
                    footer .container > div:first-child { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </footer>
    );
}
