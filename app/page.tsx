import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { CommunityFeatures } from "@/components/sections/CommunityFeatures";
import { EventsSection } from "@/components/sections/Events";
import { Hero } from "@/components/sections/Hero";
import { JoinSection } from "@/components/sections/JoinSection";
import { StatsBar } from "@/components/sections/StatsBar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-noise" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-gradient-to-b from-accent/20 to-transparent" />

      <Navbar />
      <main className="relative flex flex-col gap-20 pb-24">
        <Hero />
        <StatsBar />
        <EventsSection />
        <CommunityFeatures />
        <AboutSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
