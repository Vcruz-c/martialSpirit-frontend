export type Event = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
};

export const events: Event[] = [
    {
        slug: "nueva-apertura",
        title: "Nuevas instalaciones",
        date: "2026-06-02",
        excerpt: "Anunciamos la apertura de nuevas instalaciones. Un centro de alto rendimiento nunca antes visto en Madrid...",
        image: "/martialSpiritMedia/kickboxing.jpg",
    },
    {
        slug: "open-day-martial-spirit",
        title: "Openmat Martial Spirit",
        date: "2026-03-15",
        excerpt: "Jornada de puertas abiertas con clases y exhibiciones...",
        image: "/martialSpiritMedia/academy.jpg",
    },
    {
        slug: "seminario-kickboxing",
        title: "Seminario de Kickboxing",
        date: "2026-04-02",
        excerpt: "Seminario técnico impartido por entrenadores invitados...",
        image: "/martialSpiritMedia/kickboxing.jpg",
    },
];