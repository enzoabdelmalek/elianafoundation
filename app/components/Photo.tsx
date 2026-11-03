import { IconButterfly } from "./Icons";

/** Photo, ou emplacement teinté (papillon et légende) tant que l'association ne l'a pas fournie. */
export default function Photo({ src, alt, label, className = "", style }: {
    src?: string | null;
    alt: string;
    label?: string;
    className?: string;
    style?: React.CSSProperties;
}) {
    if (src) return <div className={`photo ${className}`} style={style}><img src={src} alt={alt} /></div>;
    return (
        <div className={`photo ${className}`} style={style} role="img" aria-label={alt}>
            <IconButterfly size={48} />
            {label && <span>{label}</span>}
        </div>
    );
}
