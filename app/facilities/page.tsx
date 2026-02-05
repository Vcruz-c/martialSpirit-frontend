import Image from "next/image";
import Link from "next/link";
import { facilities } from "@/lib/content/facilities";

export default function FacilitiesPage() {
    return (

        <section className="bg-black pt-32 pb-40 px-6">
            {/* CABECERA */}
            <div className="max-w-5xl mx-auto mb-24 text-center">
                <h1 className="text-4xl md:text-5xl font-medium tracking-wide mb-6">
                    Nuestras instalaciones
                </h1>

                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Conoce los distintos centros y espacios de Martial Spirit Academy,
                    diseñados para ofrecer un entorno óptimo de entrenamiento y desarrollo.
                </p>
            </div>

            {/* LISTADO */}
            <div className="max-w-5xl mx-auto space-y-12">
                {facilities.map((facility) => (
                    <Link
                        key={facility.slug}
                        href={`/facilities/${facility.slug}`}
                        className="
              group flex flex-col md:flex-row items-center gap-8
              border border-white/20 p-6 md:p-8
              transition-colors duration-500
              hover:border-white
            "
                    >
                        {/* IMAGEN */}
                        <div className="relative w-full md:w-72 h-44 flex-shrink-0 overflow-hidden">
                            <Image
                                src={facility.image}
                                alt={facility.title}
                                fill
                                className="
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                "
                            />
                        </div>

                        {/* TEXTO */}
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-medium tracking-wide mb-3">
                                {facility.title}
                            </h2>

                            <p className="text-gray-400 max-w-xl leading-relaxed">
                                {facility.description}
                            </p>
                        </div>

                        {/* INDICADOR */}
                        <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              →
            </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}