import type { Metadata } from "next";
import { Figtree, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.elianafoundation.org"),
    title: "Eliana Foundation — Ensemble contre le cancer pédiatrique en RDC",
    description: "La Fondation Eliana œuvre pour améliorer la prise en charge des cancers pédiatriques en République Démocratique du Congo : diagnostic précoce, soutien aux familles, sensibilisation et accès aux soins.",
    openGraph: {
        title: "Eliana Foundation",
        description: "Ensemble contre le cancer pédiatrique en RDC",
        type: "website",
        locale: "fr_FR",
    },
};

// Polices servies par le site (next/font) : l'@import Google Fonts du CSS était écarté par Tailwind 4.
const serif = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif" });
const sans  = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" data-scroll-behavior="smooth" className={`${serif.variable} ${sans.variable}`}>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
                <ScrollReveal />
            </body>
        </html>
    );
}
