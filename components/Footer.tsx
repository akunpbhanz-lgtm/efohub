import Link from "next/link";
import { MessageCircle, Twitch, Twitter, Youtube } from "lucide-react";

const socials = [
  {
    name: "Twitter / X",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv",
    icon: Twitch,
  },
  {
    name: "Discord",
    href: "https://discord.gg/placeholder",
    icon: MessageCircle,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: Youtube,
  },
];

const quickLinks = [
  { label: "Tournaments", href: "#tournaments" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#about" },
  { label: "Join", href: "#join" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <h3 className="font-display text-2xl text-white">EFOHub</h3>
            <p className="max-w-md text-sm text-white/60">
              E-Football Community Hub &amp; Events Platform. Building the next
              generation of super teams with global competition, strategy labs,
              and talent discovery.
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              © {new Date().getFullYear()} EFOHub. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex gap-4">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-accent hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
