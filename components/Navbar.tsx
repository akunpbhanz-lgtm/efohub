"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "Tournaments", href: "#tournaments" },
  { name: "Community", href: "#community" },
  { name: "About", href: "#about" },
  { name: "Join Us", href: "#join" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/5 bg-slate-900/70 px-6 py-4 backdrop-blur-md transition-all",
        scrolled ? "mt-4 shadow-glow" : "mt-6",
      )}
    >
      <Link href="#hero" className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/20">
          <span className="text-lg font-bold text-accent">E</span>
        </div>
        <span className="font-display text-xl font-semibold tracking-tight">
          EFOHub
        </span>
      </Link>

      <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="transition hover:text-white"
          >
            {item.name}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-3 md:flex">
        <Button asChild variant="ghost" className="text-white/80 hover:text-white">
          <a href="/login">Login</a>
        </Button>
        <Button asChild className="shadow-glow">
          <a href="#join">Daftar</a>
        </Button>
      </div>

      <button
        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:text-white md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full mt-3 w-full overflow-hidden rounded-2xl border border-white/5 bg-slate-900/95 p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white/80 transition hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4 flex items-center gap-3">
                <Button
                  asChild
                  variant="ghost"
                  className="flex-1 text-white/80 hover:text-white"
                >
                  <a href="/login" onClick={() => setIsOpen(false)}>
                    Login
                  </a>
                </Button>
                <Button asChild className="flex-1">
                  <a href="#join" onClick={() => setIsOpen(false)}>
                    Daftar
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
