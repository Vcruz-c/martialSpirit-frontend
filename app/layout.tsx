import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
    title: "Martial Spirit Academy",
    description:
        "Martial Spirit Academy - Academia de deportes de combate de alto rendimiento",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
        <body className="bg-black text-white antialiased">
        {/* NAVBAR FIJA */}
        <Navbar />

        {/* CONTENIDO DE LA PÁGINA */}
        <main className="relative">
            {children}

        </main>
        {/* Flecha volver arriba */}
        <ScrollToTop />
        </body>
        </html>
    );
}