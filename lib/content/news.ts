export type NewsItem = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
};

export const news: NewsItem[] = [
    {
        slug: "torneo-regional-2024",
        title: "Gran actuación en el Torneo Regional",
        excerpt:
            "Nuestros atletas lograron resultados destacados en el último torneo regional, demostrando el alto nivel de la academia.",
        date: "10 · 11 · 2024",
    },
    {
        slug: "nuevo-horario-invierno",
        title: "Nuevo horario de invierno",
        excerpt:
            "Actualizamos los horarios de entrenamiento para adaptarnos a la temporada de invierno.",
        date: "28 · 10 · 2024",
    },
];