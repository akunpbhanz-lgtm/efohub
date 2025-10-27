"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, LogIn } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();
  const [formState, setFormState] = React.useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Email atau password salah.");
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

      <Card className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-glow">
        <div className="mb-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">
            Selamat datang kembali
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-white">
            Masuk ke EFOHub
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Belum punya akun? <Link href="/register" className="text-accent">Daftar sekarang</Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="grid gap-2 text-left">
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
          <div className="grid gap-2 text-left">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password akun"
              value={formState.password}
              onChange={(event) =>
                setFormState((prev) => ({ ...prev, password: event.target.value }))
              }
              required
            />
          </div>
          {error ? (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          ) : null}
          <Button type="submit" size="lg" className="rounded-xl" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Memproses...
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Masuk
              </>
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
}
