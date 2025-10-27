"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import * as React from "react";
import { Globe2, Medal, Users2 } from "lucide-react";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    title: "Vision",
    description:
      "Empower the global eFootball ecosystem with a unified platform that blends competition, education, and community-driven growth.",
    icon: Globe2,
    accent: "Future Ready",
  },
  {
    title: "Mission",
    description:
      "Provide structured leagues, scouting pathways, and collaborative tools that help players evolve from casual to pro-ready.",
    icon: Medal,
    accent: "Player First",
  },
  {
    title: "Community",
    description:
      "Led by veteran coaches, analysts, shoutcasters, and club partners from 12+ countries, creating bridges for every playstyle.",
    icon: Users2,
    accent: "Global Squad",
  },
];

const partners = [
  "Konami E-Football",
  "Vanguard FC",
  "Atlas Lions",
  "NeonDrift Studios",
];

export function AboutSection() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="mx-auto mt-24 w-full max-w-6xl px-6"
    >
      <SectionHeading
        eyebrow="About EFOHub"
        title="Pioneering competitive eFootball experiences since 2018"
        description="EFOHub started as a grassroots league and evolved into a powerhouse platform connecting thousands of driven competitors, coaches, and brands across the world."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-8"
        >
          <Badge variant="outline">EFOHub Story</Badge>
          <h3 className="mt-6 font-display text-2xl text-white">
            From local LAN nights to cross-continent leagues
          </h3>
          <p className="mt-4 text-base text-white/70">
            What began as weekend LAN parties in Southeast Asia has scaled into
            beloved seasonal events and scouting combines in Europe, North
            America, and MENA. The EFOHub network now supports academy
            pipelines, dedicated talent coaches, and production crews to bring
            every highlight to life.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-accent/20 bg-accent/10 p-5 text-sm text-white">
              <p className="text-xs uppercase tracking-widest text-white/50">
                Coaching Collective
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                35+ licensed coaches sharing tactical playbooks weekly.
              </p>
            </div>
            <div className="rounded-2xl border border-neon/30 bg-neon/10 p-5 text-sm text-white">
              <p className="text-xs uppercase tracking-widest text-white/50">
                Broadcasting
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Studio-grade coverage with 4 simultaneous language feeds.
              </p>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
            <Image
              src="/images/player-silhouette.svg"
              alt="Community highlight"
              width={96}
              height={96}
              className="rounded-2xl border border-white/10 bg-white/5"
            />
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50">
                Community Spotlight
              </p>
              <p className="text-base text-white">
                &ldquo;EFOHub elevated our academy prospects with world-class
                coaching access and global sparring partners.&rdquo; — NeoWave
                Captain
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 * index }}
            >
              <Card className="h-full bg-slate-900/80 p-6 ring-1 ring-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-accent">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline">{pillar.accent}</Badge>
                </div>
                <CardTitle className="mt-5 text-xl text-white">
                  {pillar.title}
                </CardTitle>
                <CardDescription className="mt-3 text-white/70">
                  {pillar.description}
                </CardDescription>
              </Card>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-900/60 p-6 text-white"
          >
            <p className="text-xs uppercase tracking-widest text-white/50">
              Strategic partners
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-white/80">
              {partners.map((partner) => (
                <li key={partner} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                  {partner}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
