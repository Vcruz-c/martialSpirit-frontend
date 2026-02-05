const API_URL = "http://localhost:8080/api";

export async function apiFetch<T>(path: string): Promise<T> {
    const res = await fetch(`${API_URL}${path}`);

    if (!res.ok) {
        throw new Error("API error");
    }

    return res.json();
}