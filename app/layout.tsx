import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "EFOHub — E-Football Community Hub & Events Platform",
  description:
    "Join EFOHub to discover eFootball tournaments, connect with competitive players, and grow with an energetic community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
