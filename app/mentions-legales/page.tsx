import Link from "next/link";
import { LegalPage, LegalSection, ToFill } from "../components/LegalPage";
import { CONTACT_EMAIL, fullAddress, getProfile } from "@/lib/profile";

export const revalidate = 3600;

export const metadata = {
    title: "Mentions légales — Fondation Eliana",
    description: "Éditeur, hébergeur et conception du site de la Fondation Eliana.",
};

// Même texte que les sites du monorepo (@vwa/site-kit, legal.ts), adapté à une association : les champs viennent du
// dashboard (Paramètres → Établissement) ; le numéro RNA se saisit dans « Mentions complémentaires ».
const siretText = (s: string) => (s.length === 14 ? `SIRET : ${s.slice(0, 3)} ${s.slice(3, 6)} ${s.slice(6, 9)} ${s.slice(9)}` : `SIREN : ${s}`);

export default async function MentionsLegalesPage() {
    const profile = await getProfile();
    const l = profile?.legal ?? {};
    const name = l.legal_name?.trim() || "Fondation Eliana";
    const address = fullAddress(profile);

    return (
        <LegalPage eyebrow="Informations légales" title="Mentions" accent="légales">
            <LegalSection title="Éditeur du site">
                <p>{name}, {l.legal_form?.trim() || <ToFill what="forme juridique (ex. association loi 1901)" />}</p>
                {l.siret?.trim() || l.mentions?.trim()
                    ? <>{l.siret?.trim() && <p>{siretText(l.siret.trim())}</p>}{l.mentions?.trim() && <p>{l.mentions.trim()}</p>}</>
                    : <p><ToFill what="numéro RNA ou SIREN" /></p>}
                <p>{address ? `Siège : ${address}` : <ToFill what="adresse du siège" />}</p>
                <p>Email : <a href={`mailto:${profile?.email ?? CONTACT_EMAIL}`} className="link-hover" style={{ textDecoration: "underline" }}>{profile?.email ?? CONTACT_EMAIL}</a></p>
            </LegalSection>
            <LegalSection title="Directeur de la publication">
                <p>{l.publisher?.trim() || <ToFill what="nom du président ou de la présidente" />}</p>
            </LegalSection>
            <LegalSection title="Hébergement">
                <p>Site : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (serveurs à Dublin, Irlande).</p>
                <p>Données : Supabase Inc., serveurs à Dublin (Irlande).</p>
            </LegalSection>
            <LegalSection title="Conception et développement">
                <p>Vibe Web Agency · 142 rue de Rivoli, 75001 Paris · <a href="https://vibewebagency.fr" target="_blank" rel="noopener noreferrer" className="link-hover" style={{ textDecoration: "underline" }}>vibewebagency.fr</a></p>
            </LegalSection>
            <LegalSection title="Propriété intellectuelle">
                <p>Les textes, photos, logos et éléments graphiques de ce site appartiennent à {l.legal_name?.trim() || "la Fondation Eliana"} ou à leurs auteurs. Toute reproduction sans autorisation écrite est interdite.</p>
            </LegalSection>
            <LegalSection title="Données personnelles et cookies">
                <p>Les données recueillies par ce site, leurs finalités, leurs durées de conservation et vos droits sont décrits dans la <Link href="/confidentialite" className="link-hover" style={{ textDecoration: "underline" }}>politique de confidentialité</Link>.</p>
            </LegalSection>
            <LegalSection title="Droit applicable">
                <p>Ce site est soumis au droit français.</p>
            </LegalSection>
        </LegalPage>
    );
}
