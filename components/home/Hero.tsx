"use client";

import { useRef, useState } from "react";

export default function Hero() {
    /* Referencia directa al elemento <video> */
    const videoRef = useRef<HTMLVideoElement>(null);

    /* Estados */
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(0.7);

    /**
     * Click global sobre el hero
     * - Si está parado → play
     * - Si está reproduciendo → pause
     */
    const togglePlay = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.volume = volume;
            videoRef.current.play();
            setPlaying(true);
        } else {
            videoRef.current.pause();
            setPlaying(false);
        }
    };

    /**
     * Mute / Unmute
     * - No propaga el click para no pausar el vídeo
     */
    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoRef.current) return;

        const newMuted = !muted;
        videoRef.current.muted = newMuted;
        setMuted(newMuted);
    };

    /**
     * Control de volumen (vertical invertido)
     * Arriba = más volumen
     * Abajo = menos volumen
     */
    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        if (!videoRef.current) return;

        const value = 1 - Number(e.target.value);
        videoRef.current.volume = value;
        setVolume(value);

        if (value === 0) {
            videoRef.current.muted = true;
            setMuted(true);
        } else {
            videoRef.current.muted = false;
            setMuted(false);
        }
    };

    return (
        <section
            className={`relative h-screen overflow-hidden ${
                playing ? "cursor-default" : "cursor-pointer"
            }`}
            onClick={togglePlay}
        >
            {/* VIDEO */}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="/martialSpiritMedia/hero.mp4"
                playsInline
                disablePictureInPicture
                onEnded={() => {
                    if (!videoRef.current) return;
                    videoRef.current.currentTime = 0;
                    videoRef.current.play();
                }}
            />

            {/* OVERLAY DE TEXTO (solo cuando NO está reproduciendo) */}
            <div
                className={`absolute inset-0 flex items-center justify-center bg-black/60
        transition-all duration-[2000ms] ease-out
        ${
                    playing
                        ? "opacity-0 translate-y-6 pointer-events-none"
                        : "opacity-100 translate-y-0"
                }`}
            >
                <div className="text-center">
                    <p className="text-sm md:text-base tracking-[0.3em] uppercase text-gray-300 mb-6">
                        Nuestro legado
                    </p>

                    <h1 className="text-6xl md:text-8xl font-extrabold uppercase leading-tight">
                        Forma parte
                    </h1>

                    <h2 className="text-6xl md:text-8xl font-extrabold uppercase leading-tight text-red-600 md:-ml-16">
                        de él
                    </h2>
                </div>
            </div>

            {/* CONTROLES DE SONIDO (solo cuando está reproduciendo) */}
            {playing && (
                <div
                    className="absolute right-8 top-1/2 -translate-y-1/2
                     flex flex-col items-center gap-10 z-20
                     opacity-10 hover:opacity-100
                     transition-opacity duration-500
                     pointer-events-auto"
                >
                    {/* BOTÓN SONIDO */}
                    <button
                        onClick={toggleMute}
                        onMouseDown={(e) => e.stopPropagation()}
                        className="text-white opacity-80 hover:opacity-100 transition-opacity"
                        aria-label="Toggle sound"
                    >
                        {muted ? (
                            /* ICONO MUTE */
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8"
                            >
                                <path d="M16.5 12l4.5 4.5-1.5 1.5L15 13.5l-4.5 4.5H7.5v-6H3v-3h4.5V3h3L15 7.5l4.5-4.5L21 4.5 16.5 9z" />
                            </svg>
                        ) : (
                            /* ICONO SOUND ON */
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8"
                            >
                                <path d="M3 9v6h4.5L12 19.5v-15L7.5 9H3zm13.5 3c0-1.77-.77-3.29-2-4.29v8.58c1.23-1 2-2.52 2-4.29zm2 0c0 3.04-1.64 5.64-4 7.03v-14c2.36 1.39 4 3.99 4 6.97z" />
                            </svg>
                        )}
                    </button>

                    {/* SLIDER DE VOLUMEN */}
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={1 - volume}
                        onChange={changeVolume}
                        onClick={(e) => e.stopPropagation()}
                        className="w-20 rotate-90 accent-red-600 opacity-80 hover:opacity-100 transition-opacity"
                    />
                </div>
            )}
        </section>
    );
}