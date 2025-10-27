"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { ArrowRight, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[90vh] w-full max-w-6xl flex-col-reverse gap-12 px-6 pb-24 pt-40 md:flex-row md:items-center md:gap-16"
    >
      <div className="absolute inset-0 -z-10 mx-auto max-w-6xl rounded-[32px] bg-slate-900/75 shadow-[0_0_120px_rgba(30,144,255,0.18)] backdrop-blur-2xl" />
      <div className="absolute inset-0 -z-20 bg-hero-grid opacity-60" />
      <div className="absolute -left-10 top-10 -z-10 hidden h-72 w-72 rounded-full bg-accent/25 blur-3xl md:block" />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex-1"
      >
        <Badge variant="neon" className="mb-6">
          E-Football Legendary Plays Await
        </Badge>
        <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
          Where eFootball Community Converges
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/70 md:text-xl">
          Join tournaments, connect with players, and level up your game inside
          the most energetic eFootball hub in the region. Compete, collaborate,
          and celebrate every clutch moment together.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button size="lg" className="rounded-full px-8 shadow-glow" asChild>
            <a href="#join">
              Bergabung Sekarang <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-accent/60 px-6 text-white hover:border-accent hover:bg-accent/10"
            asChild
          >
            <a href="#tournaments">
              <Trophy className="mr-2 h-4 w-4" />
              Lihat Turnamen
            </a>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="rounded-full border border-white/20 bg-white/5 px-6 text-white/80 hover:bg-white/10 hover:text-white"
            asChild
          >
            <a
              href="https://discord.gg/placeholder"
              target="_blank"
              rel="noreferrer"
            >
              <DiscordLogoIcon className="mr-2 h-4 w-4" />
              Join Discord
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="relative flex-1"
      >
        <div className="relative mx-auto h-[360px] w-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-800/80 via-slate-900 to-slate-950 shadow-glow md:w-[360px] lg:h-[420px] lg:w-[380px]">
          <div className="absolute inset-0 bg-radial-glow opacity-70" />
          <Image
            src="/images/player-silhouette.svg"
            alt="Futuristic eFootball player illustration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-6 bottom-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm text-white">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/60">
                Next Tournament
              </p>
              <p className="font-semibold">EFO Master League</p>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
              12 Teams Live
            </span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute -bottom-6 left-1/2 w-full max-w-[260px] -translate-x-1/2 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-center text-sm text-white shadow-glow"
        >
          Trusted by{" "}
          <span className="font-display text-lg text-white">800+ squads</span>{" "}
          across SEA & Europe.
        </motion.div>
      </motion.div>
    </section>
  );
}
