'use client';

import Hero from "@/components/home/Hero";
import AcademyIntro from "@/components/academy/AcademyIntro";
import ServicesSection from "@/components/services/ServicesSection";
import Reveal from "@/components/ui/Reveal";
import NewsSection from "@/components/news/NewsSection";
import EventsSection from "@/components/events/EventsSection";
import FacilitiesSection from "@/components/facilities/FacilitiesSection";

export default function Home() {
    return (
        <>
            <Hero />

            <Reveal>
                <AcademyIntro />
            </Reveal>

            <Reveal>
                <NewsSection />
            </Reveal>

            <Reveal>
                <EventsSection />
            </Reveal>

            <Reveal>
                <FacilitiesSection />
            </Reveal>

            <Reveal>
                <ServicesSection />
            </Reveal>
        </>
    );
}