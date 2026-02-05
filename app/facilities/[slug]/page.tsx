import Image from "next/image";
import BackButton from "@/components/ui/BackButton";
import { facilities } from "@/lib/content/facilities";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function FacilityDetailPage({ params }: Props) {
    const { slug } = await params;

    const facility = facilities.find((f) => f.slug === slug);

    if (!facility) {
        return (
            <div className="bg-black min-h-screen">
                <BackButton fallback="/facilities" />
                <div className="flex items-center justify-center py-32">
                    <p className="text-gray-400">Instalación no encontrada</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen">
            <BackButton fallback="/facilities" />

            <section className="pt-32 pb-40 px-6">
                <div className="max-w-6xl mx-auto space-y-20">
                    <div className="relative w-full h-[520px]">
                        <Image
                            src={facility.image}
                            alt={facility.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl mb-8">
                            {facility.title}
                        </h1>

                        <p className="text-gray-400 text-lg">
                            {facility.description}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}