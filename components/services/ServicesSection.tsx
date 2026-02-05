import { services , type Service } from "@/lib/content/services";

export default function ServicesSection() {
    return (
        <section className="bg-black py-24 px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
                Programas
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="border border-white/20 p-8 hover:border-white transition-colors"
                    >
                        <h3 className="text-2xl font-semibold mb-4">
                            {service.title}
                        </h3>
                        <p className="text-gray-400">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}