"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BackButton from "@/components/ui/BackButton";
import { getAllNews } from "@/lib/api/news";

type NewsItem = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
};

export default function NewsPage() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getAllNews()
            .then(setNews)
            .catch(() => setError(true));
    }, []);

    if (error) {
        return <p className="text-red-500">Error cargando noticias</p>;
    }

    return (
        <main className="bg-black min-h-screen py-32 px-6 text-white">
            <BackButton fallback="/" />

            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-20">Noticias</h1>

                {news.map((item) => (
                    <article key={item.slug} className="mb-20 border-l-2 pl-8">
                        <p className="text-sm text-gray-400 mb-4">{item.date}</p>
                        <h2 className="text-3xl mb-6">{item.title}</h2>
                        <p className="text-gray-400 mb-6">{item.excerpt}</p>

                        <Link href={`/news/${item.slug}`}>Leer noticia →</Link>
                    </article>
                ))}
            </div>
        </main>
    );
}