'use client';

type BackButtonProps = {
    fallback?: string;
};

export default function BackButton({ fallback = "/" }: BackButtonProps) {
    return (
        <a
            href={fallback}
            onClick={(e) => {
                if (window.history.length > 1) {
                    e.preventDefault();
                    window.history.back();
                }
            }}
            className="fixed top-24 left-6 z-50
                 text-white text-sm uppercase tracking-widest
                 opacity-70 hover:opacity-100 transition"
        >
            ← Volver
        </a>
    );
}