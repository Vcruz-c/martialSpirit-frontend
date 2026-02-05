"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
    children: React.ReactNode;
    delay?: number;
};

export default function Reveal({ children, delay = 0 }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setVisible(true), delay);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-[1200ms] ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
        >
            {children}
        </div>
    );
}