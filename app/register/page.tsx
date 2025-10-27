"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function RegisterPage() {
  const router = useRouter();
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    password: "",
    discord: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
          discordUsername: formState.discord,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error ?? "Gagal mendaftar. Coba lagi.");
        return;
      }

      router.push("/");
      router.refresh();
    } catch (submitError) {
      console.error(submitError);
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950/80 px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-hero-grid opacity-30" aria-hidden />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-accent/20 via-slate-950/40 to-slate-950" />

      <Card className="w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-glow">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">
            Mulai perjalananmu
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-white">
            Daftar Anggota EFOHub
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Sudah punya akun? <Link href="/login" className="text-accent">Masuk di sini</Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 text-left">
          <div className="grid gap-2">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input
              id="name"
              placeholder="Nama lengkap kamu"
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
            <Input
              id="password"
              type="password"
              placeholder="Minimal 6 karakter"
              value={formState.password}
              onChange={(event) =>
                setFormState((prev) => ({ ...prev, password: event.target.value }))
              }
              minLength={6}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="discord">Username Discord</Label>
            <Input
              id="discord"
              placeholder="contoh: gamer#1234"
              value={formState.discord}
              onChange={(event) =>
                setFormState((prev) => ({ ...prev, discord: event.target.value }))
              }
              required
            />
          </div>

          {error ? (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          ) : null}

          <Button type="submit" size="lg" className="mt-2 rounded-xl" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Mendaftarkan...
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-4 w-4" />
                Daftar Sekarang
              </>
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
}
