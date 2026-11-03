import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const SUBJECT_LABELS: Record<string, string> = {
    don: "Faire un don",
    partenariat: "Devenir partenaire",
    benevolat: "Bénévolat",
    presse: "Presse & médias",
    autre: "Autre",
};

// Les champs du visiteur partent dans du HTML (dont l'accusé de réception envoyé à l'adresse saisie) : on échappe tout.
const esc = (v: unknown) => String(v ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(req: NextRequest) {
    const body = await req.json();
    const name = esc(body.name), email = esc(body.email), message = esc(body.message), subject = String(body.subject ?? "");

    if (!name || !message) {
        return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json({ error: "Service email non configuré" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const subjectLabel = esc(SUBJECT_LABELS[subject] || subject || "Contact");

    const { error: notifError } = await resend.emails.send({
        from: "Eliana Foundation <noreply@elianafoundation.org>",
        to: "contact@elianafoundation.org",
        subject: `Nouveau message - ${subjectLabel}`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
                <h2 style="font-size: 20px; margin-bottom: 24px;">Nouveau message de contact</h2>

                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 140px;">Nom</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
                    </tr>
                    ${email ? `<tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">Email</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #1a1a1a;">${email}</a></td>
                    </tr>` : ""}
                    ${subject ? `<tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">Objet</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${subjectLabel}</td>
                    </tr>` : ""}
                </table>

                <div style="margin-top: 24px;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Message</p>
                    <p style="background: #f5f5f5; padding: 16px; border-radius: 4px; white-space: pre-wrap; margin: 0;">${message}</p>
                </div>

                <p style="margin-top: 32px; font-size: 12px; color: #999;">
                    Ce message a été envoyé via le formulaire de contact du site Eliana Foundation.
                </p>
            </div>
        `,
    });

    if (notifError) {
        return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
    }

    if (email) {
        await resend.emails.send({
            from: "Eliana Foundation <noreply@elianafoundation.org>",
            to: String(body.email),
            subject: "Nous avons bien reçu votre message - Eliana Foundation",
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
                    <h2 style="font-size: 20px; margin-bottom: 8px;">Merci pour votre message, ${name}.</h2>
                    <p style="color: #666; margin-top: 0;">Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais.</p>

                    <div style="margin: 32px 0; padding: 20px; background: #f9f9f9; border-left: 3px solid #5B21B6;">
                        ${subject ? `<p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #999; margin: 0 0 8px 0;">Objet</p>
                        <p style="margin: 0 0 16px 0; font-weight: 600;">${subjectLabel}</p>` : ""}
                        <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #999; margin: 0 0 8px 0;">Votre message</p>
                        <p style="margin: 0; white-space: pre-wrap; color: #444;">${message}</p>
                    </div>

                    <p style="color: #666;">À très bientôt,<br/><strong>La Fondation Eliana</strong></p>

                    <p style="margin-top: 40px; font-size: 11px; color: #bbb;">
                        Cet email est un accusé de réception automatique, merci de ne pas y répondre directement.
                    </p>
                </div>
            `,
        });
    }

    return NextResponse.json({ success: true });
}
