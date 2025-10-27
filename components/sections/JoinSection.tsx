"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Lock, Send, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const levels = [
  { label: "Rookie", value: "rookie" },
  { label: "Semi-Pro", value: "semi-pro" },
  { label: "Pro", value: "pro" },
  { label: "Coach / Analyst", value: "coach" },
];

export function JoinSection() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    password: "",
    discord: "",
    level: levels[0].value,
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitted) return;

    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          password: formState.password,
          skillLevel: formState.level,
          discordUsername: formState.discord,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Gagal mendaftar. Coba lagi.");
        return;
      }

      setSubmitted(true);
      setFormState((prev) => ({
        ...prev,
        name: "",
        email: "",
        password: "",
        discord: "",
        level: levels[0].value,
      }));
    } catch (submitError) {
      console.error(submitError);
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="join"
      ref={ref}
      className="mx-auto mt-24 w-full max-w-6xl px-6 pb-24"
    >
      <SectionHeading
        eyebrow="Join The Hub"
        title="Become a member and unlock pro-level resources"
        description="Sign up to get early access to tournaments, community events, strategy drops, and exclusive scrim pools. We onboard members weekly with personalized guidance."
        align="center"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="mx-auto mt-12 grid max-w-4xl gap-8 rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-glow backdrop-blur"
      >
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Your in-game or real name"
              value={formState.name}
              onChange={(event) =>
                setFormState((prev) => ({ ...prev, name: event.target.value }))
              }
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@efohub.gg"
              value={formState.email}
              onChange={(event) =>
                setFormState((prev) => ({ ...prev, email: event.target.value }))
              }
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                placeholder="Minimal 6 karakter"
                value={formState.password}
                onChange={(event) =>
                  setFormState((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }))
                }
                minLength={6}
                required
                className="pr-11"
              />
              <Lock className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="discord">Username Discord</Label>
            <Input
              id="discord"
              placeholder="contoh: gamer#1234"
              value={formState.discord}
              onChange={(event) =>
                setFormState((prev) => ({
                  ...prev,
                  discord: event.target.value,
                }))
              }
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="level">Skill Level</Label>
            <select
              id="level"
              value={formState.level}
              onChange={(event) =>
                setFormState((prev) => ({ ...prev, level: event.target.value }))
              }
              className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/40"
            >
              {levels.map((level) => (
                <option key={level.value} value={level.value} className="bg-slate-900">
                  {level.label}
                </option>
              ))}
            </select>
          </div>
          {error ? (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          ) : null}
          <Button
            type="submit"
            size="lg"
            className="rounded-xl"
            disabled={isSubmitting}
          >
            {submitted ? (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Pendaftaran Berhasil
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? "Mengirim..." : "Request Invite"}
              </>
            )}
          </Button>
          {submitted ? (
            <p className="text-sm text-white/60">
              Akun kamu siap! Kamu sudah masuk secara otomatis dan bisa mulai
              jelajahi turnamen.
            </p>
          ) : null}
        </form>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
          <div className="flex items-center gap-3 text-white">
            <DiscordLogoIcon className="h-5 w-5" />
            <p className="text-sm uppercase tracking-widest text-white/50">
              Prefer Discord?
            </p>
          </div>
          <p className="mt-3 text-sm text-white/70">
            Jump straight into scrim channels, weekly review sessions, and open
            Q&amp;As with pro analysts.
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-4 rounded-xl border-accent/30"
          >
            <a href="https://discord.gg/placeholder" target="_blank" rel="noreferrer">
              Join Discord Hub
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
