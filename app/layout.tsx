import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export const metadata: Metadata = {
    title: "Eliana Foundation — Ensemble contre le cancer pédiatrique en RDC",
    description: "La Fondation Eliana œuvre pour améliorer la prise en charge des cancers pédiatriques en République Démocratique du Congo : diagnostic précoce, soutien aux familles, sensibilisation et accès aux soins.",
    openGraph: {
        title: "Eliana Foundation",
        description: "Ensemble contre le cancer pédiatrique en RDC",
        type: "website",
        locale: "fr_FR",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" data-scroll-behavior="smooth">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
                <ScrollReveal />
            </body>
        </html>
    );
}
