import BackButton from "@/components/ui/BackButton";
import { events } from "@/lib/content/events";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function EventDetailPage({ params }: Props) {
    const { slug } = await params;

    const event = events.find((e) => e.slug === slug);

    if (!event) {
        return (
            <div className="bg-black min-h-screen">
                <BackButton fallback="/events" />
                <div className="flex items-center justify-center py-32">
                    <p className="text-gray-400">Evento no encontrado</p>
                </div>
            </div>
        );
    }

    return (
        <article className="bg-black min-h-screen">
            <BackButton fallback="/events" />

            {/* HERO */}
            <div
                className="relative h-[70vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center px-6">
                    <p className="text-gray-300 mb-4">{event.date}</p>
                    <h1 className="text-5xl md:text-6xl font-bold">
                        {event.title}
                    </h1>
                </div>
            </div>

            {/* CONTENIDO */}
            <div className="max-w-3xl mx-auto py-24 px-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                    Aquí irá el contenido completo del evento.
                </p>
            </div>
        </article>
    );
}