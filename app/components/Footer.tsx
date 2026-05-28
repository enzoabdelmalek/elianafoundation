import Link from "next/link";
import { IconRainbow, IconInstagram, IconFacebook, IconWhatsApp, IconButterfly } from "./Icons";

export default function Footer() {
    return (
        <footer style={{ background: "var(--navy)", color: "#fff", padding: "clamp(48px, 8vw, 80px) 0 32px" }}>
            <style>{`
                .footer-link { color: rgba(255,255,255,0.6); font-size: 0.88rem; text-decoration: none; transition: color 0.2s; }
                .footer-link:hover { color: #fff; }
                .footer-social { width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); text-decoration: none; transition: all 0.2s; }
                .footer-social:hover { border-color: rgba(255,255,255,0.6); color: #fff; }
            `}</style>
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "clamp(32px, 5vw, 64px)", marginBottom: 56 }}>

                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                            <IconRainbow size={32} />
                            <div>
                                <span className="font-script" style={{ fontSize: "1.5rem", color: "#fff", lineHeight: 1 }}>Eliana</span>
                                <span style={{ display: "block", fontSize: "0.58rem", letterSpacing: "0.22em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginTop: -2 }}>Foundation</span>
                            </div>
                        </div>
                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: 320, marginBottom: 24 }}>
                            Ensemble contre le cancer pédiatrique en République Démocratique du Congo. Pour nos enfants. Pour leur avenir. Pour la RDC.
                        </p>
                        <div style={{ display: "flex", gap: 12 }}>
                            <a href="#" className="footer-social" aria-label="Instagram">
                                <IconInstagram size={16} color="currentColor" />
                            </a>
                            <a href="#" className="footer-social" aria-label="Facebook">
                                <IconFacebook size={16} color="currentColor" />
                            </a>
                            <a href="#" className="footer-social" aria-label="WhatsApp">
                                <IconWhatsApp size={16} color="currentColor" />
                            </a>
                        </div>
                        <p style={{ marginTop: 16, fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>@elianafoundation</p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>Navigation</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {[
                                { href: "/#mission", label: "Notre Mission" },
                                { href: "/#histoire", label: "Notre Histoire" },
                                { href: "/#actions", label: "Nos Actions" },
                                { href: "/#hommage", label: "Hommage" },
                                { href: "/contact", label: "Contact" },
                            ].map(l => (
                                <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <p style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>Contact</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem" }}>République Démocratique du Congo</p>
                            <a href="mailto:contact@elianafoundation.org" className="footer-link">
                                contact@elianafoundation.org
                            </a>
                        </div>
                        <div style={{ marginTop: 28 }}>
                            <Link href="/contact" className="btn-gold" style={{ padding: "10px 20px", fontSize: "0.8rem" }}>
                                Nous soutenir
                            </Link>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem" }}>
                            © {new Date().getFullYear()} Eliana Foundation. Tous droits réservés.
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.72rem" }}>
                            Développé & designé par{" "}
                            <a href="https://vibewebagency.fr" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>
                                Vibe Web Agency
                            </a>
                        </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.25)" }}>
                        <span style={{ fontSize: "0.72rem" }}>Chaque enfant compte.</span>
                        <IconButterfly size={14} color="rgba(255,255,255,0.3)" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
