import BackButton from "@/components/ui/BackButton";

export default function AcademyPage() {
    return (
        <div className="bg-black min-h-screen px-6 py-32">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-8">
                    Martial Spirit Academy
                </h1>
                {/* BOTÓN VOLVER */}
                <BackButton fallback="/academy" />

                <p className="text-gray-300 leading-relaxed text-lg">
                    Aquí va la información completa de la academia.
                    Historia, filosofía, entrenadores, metodología, etc.
                </p>
            </div>
        </div>
    );
}