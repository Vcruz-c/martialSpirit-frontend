"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BackButton from "@/components/ui/BackButton";
import Link from "next/link";

type News = {
    title: string;
    content: string;
    date: string;
};

export default function NewsDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const [news, setNews] = useState<News | null>(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/news/${slug}`)
            .then((res) => res.json())
            .then(setNews);
    }, [slug]);

    if (!news) return null;

    return (
        <main className="bg-black min-h-screen px-6 py-24 text-white">
            <BackButton fallback="/news" />

            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">{news.title}</h1>
                <p className="text-gray-400 mb-12">{news.date}</p>

                <div className="text-gray-300 leading-relaxed">
                    {news.content}
                </div>
            </div>

            {/* Botón ver otras */}
            <div className="mt-24 flex justify-center">
                <Link
                    href="/news"
                    className="group inline-flex items-center gap-3 uppercase tracking-widest text-sm text-white"
                >
                    <span className="relative">
                        Ver otras noticias
                        <span className="absolute left-0 -bottom-1 h-px w-full bg-white scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                    </span>
                    <span className="opacity-0 translate-x-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                        →
                    </span>
                </Link>
            </div>
        </main>
    );
}