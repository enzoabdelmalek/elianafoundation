import Link from "next/link";
import Logo from "./Logo";

const COLUMNS = [
    { title: "La fondation", links: [
        { href: "/#mission",   label: "Notre mission" },
        { href: "/#histoire",  label: "Notre histoire" },
        { href: "/#hommage",   label: "Hommage" },
        { href: "/actualites", label: "Actualités" },
    ] },
    { title: "Agir", links: [
        { href: "/don",     label: "Faire un don" },
        { href: "/contact", label: "Bénévolat" },
        { href: "/contact", label: "Devenir partenaire" },
    ] },
];

const titleStyle: React.CSSProperties = { fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 6 };

export default function Footer() {
    return (
        <footer style={{ borderTop: "1px solid var(--line)" }}>
            <div className="container" style={{ paddingTop: 72, paddingBottom: 32 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 56px" }}>
                    <div style={{ flex: "2 1 300px" }}>
                        <Logo />
                        <p className="muted" style={{ marginTop: 20, maxWidth: 340, fontSize: 15 }}>
                            Ensemble contre le cancer pédiatrique en République Démocratique du Congo.
                        </p>
                    </div>
                    {COLUMNS.map(c => (
                        <nav key={c.title} aria-label={c.title} style={{ flex: "1 1 160px", display: "flex", flexDirection: "column", gap: 10, fontSize: 15 }}>
                            <p style={titleStyle}>{c.title}</p>
                            {c.links.map(l => <Link key={l.label} href={l.href} className="link-hover">{l.label}</Link>)}
                        </nav>
                    ))}
                    <div style={{ flex: "1 1 220px", display: "flex", flexDirection: "column", gap: 10, fontSize: 15 }}>
                        <p style={titleStyle}>Contact</p>
                        <span>Kinshasa, République Démocratique du Congo</span>
                        <a href="mailto:contact@elianafoundation.org" className="link-hover" style={{ textDecoration: "underline" }}>contact@elianafoundation.org</a>
                    </div>
                </div>
                <div className="muted" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, marginTop: 56, paddingTop: 24, borderTop: "1px solid var(--line)", fontSize: 13 }}>
                    <span>© {new Date().getFullYear()} Fondation Eliana</span>
                    <span>Site réalisé par <a href="https://vibewebagency.fr" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Vibe Web Agency</a></span>
                </div>
            </div>
        </footer>
    );
}
