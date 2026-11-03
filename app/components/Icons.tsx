interface IconProps {
    size?: number;
    color?: string;
    style?: React.CSSProperties;
    className?: string;
}

const base = (size: number): React.CSSProperties => ({
    width: size, height: size, display: "inline-block", flexShrink: 0,
});

export function IconRibbon({ size = 24, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" style={{ ...base(size), ...style }} className={className}>
            <path d="M12 2C9.79 2 8 3.79 8 6c0 1.5.82 2.81 2.04 3.53L7 22h10l-3.04-12.47A4 4 0 0 0 16 6c0-2.21-1.79-4-4-4z" fill={color} opacity="0.15"/>
            <path d="M12 2C9.79 2 8 3.79 8 6c0 1.5.82 2.81 2.04 3.53L7 22h10l-3.04-12.47A4 4 0 0 0 16 6c0-2.21-1.79-4-4-4z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M10.04 9.53L7 22M13.96 9.53L17 22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    );
}

export function IconSearch({ size = 24, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size), ...style }} className={className}>
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
            <path d="M11 8v6M8 11h6" />
        </svg>
    );
}

export function IconHeart({ size = 24, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill={color} style={{ ...base(size), ...style }} className={className}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
    );
}

export function IconHeartOutline({ size = 24, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size), ...style }} className={className}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
    );
}

export function IconUsers({ size = 24, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size), ...style }} className={className}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

export function IconMegaphone({ size = 24, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size), ...style }} className={className}>
            <path d="M3 11l19-9-9 19-2-8-8-2z" />
        </svg>
    );
}

export function IconCross({ size = 24, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" style={{ ...base(size), ...style }} className={className}>
            <rect x="9" y="2" width="6" height="20" rx="2" />
            <rect x="2" y="9" width="20" height="6" rx="2" />
        </svg>
    );
}

export function IconRainbow({ size = 24, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" style={{ ...base(size), ...style }} className={className}>
            <path d="M3 17a9 9 0 0 1 18 0" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
            <path d="M5.5 17a6.5 6.5 0 0 1 13 0" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 17a4 4 0 0 1 8 0" stroke="#EAB308" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10.5 17a1.5 1.5 0 0 1 3 0" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    );
}

/** Le papillon bleu d'Eliana : contour `color`, ailes remplies de `fill` (aucun remplissage par défaut). */
export function IconButterfly({ size = 24, color = "currentColor", fill = "none", style, className }: IconProps & { fill?: string }) {
    return (
        <svg viewBox="0 0 64 52" fill="none" aria-hidden="true" style={{ ...base(size), ...style }} className={className}>
            <g stroke={color} strokeWidth="1.6" strokeLinejoin="round" fill={fill}>
                <path d="M32 22C24 6 8 2 6 12s12 14 26 12Z"/>
                <path d="M32 22C40 6 56 2 58 12s-12 14-26 12Z"/>
                <path d="M32 26c-10 0-20 6-18 14s14 2 18-10Z" fillOpacity="0.55"/>
                <path d="M32 26c10 0 20 6 18 14s-14 2-18-10Z" fillOpacity="0.55"/>
            </g>
            <path d="M32 12v26M31 12c-2-5-5-7-8-8M33 12c2-5 5-7 8-8" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
    );
}

export function IconInstagram({ size = 18, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size), ...style }} className={className}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill={color} stroke="none"/>
        </svg>
    );
}

export function IconFacebook({ size = 18, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill={color} style={{ ...base(size), ...style }} className={className}>
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
    );
}

export function IconWhatsApp({ size = 18, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill={color} style={{ ...base(size), ...style }} className={className}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.12 1.527 5.845L.057 23.25l5.565-1.457A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.67-.512-5.195-1.407l-.372-.22-3.304.866.88-3.22-.242-.38A9.934 9.934 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
    );
}

export function IconArrow({ size = 16, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size), ...style }} className={className}>
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}

export function IconStar({ size = 16, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill={color} style={{ ...base(size), ...style }} className={className}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
    );
}

export function IconPlus({ size = 20, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" style={{ ...base(size), ...style }} className={className}>
            <path d="M12 5v14M5 12h14" />
        </svg>
    );
}

export function IconPhone({ size = 20, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size), ...style }} className={className}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

export function IconMapPin({ size = 20, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size), ...style }} className={className}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

export function IconMail({ size = 20, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size), ...style }} className={className}>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    );
}

export function IconCheck({ size = 20, color = "currentColor", style, className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size), ...style }} className={className}>
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

/** Signature de la fondation : trois arcs (soleil, accent, ciel). */
export function IconRainbowBrand({ size = 40, style, className }: IconProps) {
    return (
        <svg viewBox="0 0 40 24" fill="none" aria-hidden="true" style={{ width: size, height: size * 0.6, flexShrink: 0, ...style }} className={className}>
            <path d="M3 22a17 17 0 0 1 34 0" stroke="var(--sun)" strokeWidth="3" strokeLinecap="round"/>
            <path d="M8.5 22a11.5 11.5 0 0 1 23 0" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round"/>
            <path d="M14 22a6 6 0 0 1 12 0" stroke="var(--sky)" strokeWidth="3" strokeLinecap="round"/>
        </svg>
    );
}
