export default function AcademyIntro() {
    return (
        <section className="relative bg-black py-32 px-6">
            <div className="max-w-7xl mx-auto relative">
                {/* IMAGEN DE FONDO */}
                <div className="relative h-[520px] bg-[url('/martialSpiritMedia/academy.jpg')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* CARD DE TEXTO */}
                <div className="relative -mt-48 max-w-xl bg-black p-12 border border-white/20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Martial Spirit Academy
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-8">
                        Bienvenido a Martial Spirit, una academia de deportes de combate de
                        alto rendimiento dedicada a la excelencia física y mental.
                        Entrenamos a personas de todos los niveles, desde principiantes hasta
                        competidores de alto nivel, con una filosofía centrada en la
                        disciplina, el crecimiento y el desarrollo a largo plazo...
                    </p>

                    <a
                        href="/academy"
                        className="group inline-flex items-center gap-3 uppercase tracking-widest text-sm"
                    >
            <span className="relative">
              Leer más
              <span className="absolute left-0 -bottom-1 h-px w-full bg-white scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            </span>
                        <span className="opacity-0 translate-x-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
              →
            </span>
                    </a>
                </div>
            </div>
        </section>
    );
}