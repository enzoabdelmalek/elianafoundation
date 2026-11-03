import { IconRainbowBrand } from "./Icons";

export default function Logo() {
    return (
        <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
            <IconRainbowBrand size={40} />
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 27 }}>Eliana</span>
                <span style={{ fontSize: 10, letterSpacing: "0.3em", fontWeight: 600, color: "var(--muted)", marginTop: 5 }}>FONDATION</span>
            </span>
        </span>
    );
}
