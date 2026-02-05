"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getLatestNews } from "@/lib/api/news";

type NewsItem = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
};

export default function NewsSection() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getLatestNews()
            .then(setNews)
            .catch(() => setError(true));
    }, []);

    if (error) {
        return <p className="text-red-500">Error cargando noticias</p>;
    }

    return (
        <section className="bg-black py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-16">Últimas noticias</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {news.map((item) => (
                        <article key={item.slug} className="border-l-2 pl-8">
                            <p className="text-sm text-gray-400 mb-4">{item.date}</p>
                            <h3 className="text-3xl mb-6">{item.title}</h3>
                            <p className="text-gray-400 mb-8">{item.excerpt}</p>

                            <Link href={`/news/${item.slug}`}>Leer más →</Link>
                        </article>
                    ))}
                </div>

                <div className="mt-24 flex justify-center">
                    <Link href="/news">Ver todas las noticias →</Link>
                </div>
            </div>
        </section>
    );
}