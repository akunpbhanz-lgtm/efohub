"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import * as React from "react";
import { ArrowUpRight, Calendar, MapPin, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/sections/SectionHeading";

const events = [
  {
    id: 1,
    name: "EFO Master League Finals",
    date: "Nov 29 – Dec 1, 2024",
    prize: "$12,000 Prize Pool",
    location: "Jakarta / Online Hybrid",
    type: "Pro Series",
    href: "#join",
  },
  {
    id: 2,
    name: "Regional Clash Cup",
    date: "Dec 14, 2024",
    prize: "$5,000 + Bootcamp Slots",
    location: "Singapore",
    type: "Open Tournament",
    href: "#join",
  },
  {
    id: 3,
    name: "EFO Next Gen Invitational",
    date: "Jan 19, 2025",
    prize: "Scholarship Contracts",
    location: "Berlin",
    type: "Academy Showcase",
    href: "#join",
  },
];

export function EventsSection() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="tournaments"
      ref={ref}
      className="mx-auto mt-24 w-full max-w-6xl px-6"
    >
      <SectionHeading
        eyebrow="Upcoming Tournaments"
        title="Compete in electrifying brackets built for top-tier play"
        description="Qualifiers, leagues, and invitationals designed to spotlight the best eFootball talent. Claim your slot and play against the strongest squads across the globe."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 * index }}
          >
            <Card className="h-full bg-slate-900/80 p-6 ring-1 ring-white/5 transition hover:-translate-y-1 hover:bg-slate-900/95 hover:ring-accent/40">
              <div className="flex items-center justify-between">
                <Badge variant="outline">{event.type}</Badge>
                <ArrowUpRight className="h-4 w-4 text-white/40" />
              </div>
              <CardTitle className="mt-6 text-2xl">{event.name}</CardTitle>
              <CardDescription>
                <span className="flex items-center gap-2 text-white">
                  <Calendar className="h-4 w-4 text-accent" /> {event.date}
                </span>
              </CardDescription>
              <CardDescription className="mt-4 flex items-center gap-2">
                <Trophy className="h-4 w-4 text-neon" />
                {event.prize}
              </CardDescription>
              <CardDescription className="mt-2 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white/60" />
                {event.location}
              </CardDescription>
              <Button
                asChild
                className="mt-8 w-full rounded-xl shadow-glow"
              >
                <Link href={event.href}>Register Team</Link>
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
