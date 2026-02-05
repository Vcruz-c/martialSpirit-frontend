import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur">
            <div className="h-20 px-6 flex items-center">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/" aria-label="Ir a inicio">
                    <Image
                        src="/martialSpiritMedia/logo_martial.png"
                        alt="Martial Spirit Academy"
                        width={80}
                        height={48}
                        priority
                        className="object-contain cursor-pointer"
                    />
                </a>
            </div>
        </nav>
    );
}