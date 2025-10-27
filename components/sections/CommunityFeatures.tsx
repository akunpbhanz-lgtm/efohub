"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { ActivitySquare, Headphones, MessageCircle, Radio, Users } from "lucide-react";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/sections/SectionHeading";

const features = [
  {
    title: "Voice Scrim Rooms",
    description:
      "Drop in to role-based channels for instant scrims, coaching clinics, and live draft rooms.",
    icon: Headphones,
    badge: "Live 24/7",
  },
  {
    title: "Strategy Forums",
    description:
      "Analyze patches, share build orders, and download pro playbooks from top-tier analysts.",
    icon: MessageCircle,
    badge: "New Posts",
  },
  {
    title: "Live Streams & VOD Hub",
    description:
      "Track ongoing tournaments, watch player POVs, and access full VOD breakdowns with timestamps.",
    icon: Radio,
    badge: "Now Streaming",
  },
  {
    title: "Dynamic Leaderboards",
    description:
      "Skill-based ranking with weekly challenges, XP drops, and progression paths for every role.",
    icon: ActivitySquare,
    badge: "Season 4",
  },
];

export function CommunityFeatures() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="community"
      ref={ref}
      className="mx-auto mt-24 w-full max-w-6xl px-6"
    >
      <SectionHeading
        eyebrow="Community Network"
        title="Built for squads, solo grinders, and talent scouts"
        description="EFOHub transforms casual players into championship-ready competitors. Unlock collaborative tools, zero-latency comms, and analytics designed around eFootball meta."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.08 * index }}
          >
            <Card className="h-full bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/40 p-7 ring-1 ring-white/5 transition hover:-translate-y-1 hover:ring-accent/50">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <feature.icon className="h-6 w-6" />
                </div>
                <Badge variant="neon">{feature.badge}</Badge>
              </div>
              <CardTitle className="mt-6 text-2xl font-semibold text-white">
                {feature.title}
              </CardTitle>
              <CardDescription className="mt-3 text-base text-white/70">
                {feature.description}
              </CardDescription>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.4 }}
        className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 lg:flex-row lg:items-center"
      >
        <div>
          <h3 className="font-display text-2xl text-white">
            Activate your squad&apos;s full potential
          </h3>
          <p className="mt-3 max-w-2xl text-white/70">
            Weekly coaching sessions, player discovery spotlights, and
            cross-region matchmaking keep the competition fierce and friendly.
            EFOHub is the fastest way to close the gap between amateur and pro.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-white/70">
          <Users className="h-5 w-5 text-accent" />
          <div>
            <p className="text-sm uppercase tracking-widest text-white/50">
              Trusted teams
            </p>
            <p className="font-semibold text-white">
              Atlas Lions, NeonDrift, Vanguard FC, and more
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
