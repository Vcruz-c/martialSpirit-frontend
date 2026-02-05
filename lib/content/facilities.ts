export type Facility = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const facilities: Facility[] = [
  {
    slug: "centro-ventas",
    title: "Vísitanos en Ventas",
    description: "Espacio amplio diseñado para entrenamiento técnico y físico...",
    image: "/martialSpiritMedia/academy.jpg",
  },
  {
    slug: "centro-estrecho",
    title: "Visítanos en Estrecho. Cuatro caminos",
    description: "Equipamiento profesional para preparación física y técnica...",
    image: "/martialSpiritMedia/kickboxing.jpg",
  },
  {
    slug: "centro-nuevo",
    title: "Próximamente",
    description: "Nueva apertura en Madrid. Instalaciones profesionales, con áreas de acondicionamiento físico...",
    image: "/martialSpiritMedia/academy.jpg",
  },
];