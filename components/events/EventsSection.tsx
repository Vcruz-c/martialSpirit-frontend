import Link from "next/link";
import { events } from "@/lib/content/events";

export default function EventsSection() {
    return (
        <section className="bg-black py-32 px-6 relative overflow-hidden">
            {/* TÍTULO */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-24">
                Eventos
            </h2>

            <div className="max-w-5xl mx-auto relative">
                {/* LÍNEA CENTRAL */}
                <div className="absolute left-1/2 top-0 h-full w-px bg-white/20 -translate-x-1/2" />

                <div className="space-y-32">
                    {events.slice(0, 3).map((event, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={event.slug}
                                className={`relative flex ${
                                    isLeft ? "justify-start" : "justify-end"
                                }`}
                            >
                                {/* PUNTO */}
                                <span className="absolute left-1/2 top-8 w-3 h-3 bg-white rounded-full -translate-x-1/2 z-10" />

                                {/* CARD */}
                                <Link
                                    href={`/events/${event.slug}`}
                                    className={`group block w-full max-w-md border border-white/20 bg-black p-8
                    transition-all duration-500 hover:border-white
                    ${isLeft ? "-rotate-2" : "rotate-2"}
                  `}
                                >
                                    <p className="text-sm text-gray-400 mb-2">
                                        {event.date}
                                    </p>

                                    <h3 className="text-2xl font-semibold mb-4">
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6">
                                        {event.excerpt}
                                    </p>

                                    <span className="inline-flex items-center gap-2 uppercase text-sm tracking-widest">
                    Ver evento
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </span>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}