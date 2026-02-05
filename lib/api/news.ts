import { apiFetch } from "./client";

export type NewsItem = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
};

export type NewsDetail = {
    title: string;
    content: string;
    date: string;
};

export const getAllNews = () =>
    apiFetch<NewsItem[]>("/news");

export const getLatestNews = () =>
    apiFetch<NewsItem[]>("/news/latest");

export const getNewsBySlug = (slug: string) =>
    apiFetch<NewsDetail>(`/news/${slug}`);