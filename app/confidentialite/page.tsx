import { LegalPage, LegalSection } from "../components/LegalPage";
import { CONTACT_EMAIL, fullAddress, getProfile } from "@/lib/profile";

export const revalidate = 3600;

export const metadata = {
    title: "Politique de confidentialité — Eliana Foundation",
    description: "Données recueillies par le site d'Eliana Foundation, leur utilisation et vos droits.",
};

// Texte des sites du monorepo (@vwa/site-kit, privacy.ts) réduit à ce que ce site fait : le formulaire de contact,
// sans mesure d'audience ni cookie. La durée est celle que le dashboard applique : à changer avec lui.
export default async function ConfidentialitePage() {
    const profile = await getProfile();
    const legalName = profile?.legal?.legal_name?.trim();
    const owner = legalName && legalName.toLowerCase() !== "eliana foundation" ? `${legalName} (Eliana Foundation)` : "Eliana Foundation";
    const address = fullAddress(profile);
    const email = profile?.email ?? CONTACT_EMAIL;
    const mail = <a href={`mailto:${email}`} className="link-hover" style={{ textDecoration: "underline" }}>{email}</a>;

    return (
        <LegalPage eyebrow="Vos données" title="Politique de" accent="confidentialité">
            <LegalSection title="Responsable du traitement">
                <p>{owner}{address ? `, ${address}` : ""}. Contact : {mail}.</p>
            </LegalSection>
            <LegalSection title="Données collectées">
                <ul className="dots">
                    <li>Par le formulaire de contact : prénom, nom, email, téléphone (facultatif), l&apos;objet et le contenu de votre message.</li>
                    <li>Votre adresse IP, utilisée seulement pour limiter les envois abusifs, sans être rattachée à votre message.</li>
                </ul>
            </LegalSection>
            <LegalSection title="Pourquoi, sur quelle base, combien de temps">
                <p>Nous ne collectons que ce qui est nécessaire pour vous répondre. Vos données ne sont jamais vendues ni louées.</p>
                <ul className="dots">
                    <li>Finalité : répondre à votre demande (bénévolat, partenariat, don, presse, question).</li>
                    <li>Base légale : intérêt légitime de la fondation à répondre aux personnes qui la contactent.</li>
                    <li>Durée : 3 ans après votre dernière demande, puis anonymisées.</li>
                </ul>
            </LegalSection>
            <LegalSection title="Qui y a accès">
                <ul className="dots">
                    <li>L&apos;équipe d&apos;Eliana Foundation, dans la limite de ses fonctions.</li>
                    <li>Notre prestataire web, Vibe Web Agency, qui héberge le site et l&apos;outil de gestion pour notre compte (sous-traitant, contrat conforme à l&apos;article 28 du RGPD).</li>
                    <li>Nos hébergeurs : Supabase (base de données, serveurs en Irlande) et Vercel (site, serveurs à Dublin).</li>
                    <li>Notre prestataire d&apos;envoi d&apos;emails (Resend), pour l&apos;accusé de réception de votre message.</li>
                </ul>
            </LegalSection>
            <LegalSection title="Transferts hors de l’Union européenne">
                <p>Vos données sont hébergées dans l&apos;Union européenne. Certains prestataires sont des sociétés américaines : les transferts éventuels sont encadrés par le Data Privacy Framework UE–États-Unis ou par les clauses contractuelles types de la Commission européenne.</p>
            </LegalSection>
            <LegalSection title="Cookies">
                <p>Ce site ne dépose aucun cookie de mesure d&apos;audience ou de publicité et n&apos;utilise aucun outil de suivi : aucun accord ne vous est donc demandé.</p>
            </LegalSection>
            <LegalSection title="Vos droits">
                <p>Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilité de vos données, et du droit de définir des directives sur leur sort après votre décès. Vous les exercez en écrivant à {mail} ; nous répondons sous un mois.</p>
                <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (cnil.fr).</p>
            </LegalSection>
        </LegalPage>
    );
}
