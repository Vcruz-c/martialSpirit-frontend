import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { facilities } from "@/lib/content/facilities";

export default function FacilitiesSection() {
    return (
        <section className="bg-black py-32 px-6">
            {/* TÍTULO */}
            <h2 className="text-4xl md:text-5xl font-medium tracking-wide text-center mb-24">
                Instalaciones
            </h2>

            <div className="max-w-5xl mx-auto space-y-12">
                {facilities.map((facility, index) => (
                    <Reveal key={facility.slug} delay={index * 100}>
                        <Link
                            href={`/facilities/${facility.slug}`}
                            className="
                group flex flex-col md:flex-row items-center gap-8
                border border-white/20 p-6 md:p-8
                transition-colors duration-500
                hover:border-white
              "
                        >
                            {/* IMAGEN */}
                            <div className="relative w-full md:w-64 h-40 flex-shrink-0 overflow-hidden">
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
                                <h3 className="text-2xl md:text-3xl font-medium tracking-wide mb-3">
                                    {facility.title}
                                </h3>

                                <p className="text-gray-400 max-w-xl leading-relaxed">
                                    {facility.description}
                                </p>
                            </div>

                            {/* INDICADOR */}
                            <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                →
              </span>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}