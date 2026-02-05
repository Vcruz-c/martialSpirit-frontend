export interface Service {
    title: string;
    description: string;
    image?: string;
}

export const services: Service[] = [
    {
        title: "Kickboxing",
        description: "Entrenamiento de combate y acondicionamiento físico",
        image: "/martialSpiritMedia/kickboxing.jpg",
    },
    {
        title: "Muay Thai",
        description: "Arte marcial tailandés tradicional",
    },
    {
        title: "MMA",
        description: "Artes marciales mixtas",
    },
    {
        title: "Boxeo",
        description: "Técnica, resistencia y disciplina",
    },
    {
        title: "Sanda",
        description: "Arte marcial chino tradicional",
    },
];