"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    label: "Players Registered",
    value: 18500,
    suffix: "+",
  },
  {
    label: "Tournaments Hosted",
    value: 220,
    suffix: "",
  },
  {
    label: "Active Communities",
    value: 58,
    suffix: "",
  },
];

export function StatsBar() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section
      ref={ref}
      aria-label="EFOHub impact stats"
      className="relative z-10 mx-auto -mt-12 w-full max-w-5xl rounded-3xl border border-white/10 bg-slate-900/90 px-6 py-10 shadow-glow backdrop-blur-md"
    >
      <div className="grid gap-8 text-center md:grid-cols-3 md:text-left">
        {stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            stat={stat}
            inView={isInView}
            delay={0.1 * (index + 1)}
          />
        ))}
      </div>
    </section>
  );
}

interface StatItemProps {
  stat: {
    label: string;
    value: number;
    suffix?: string;
  };
  inView: boolean;
  delay: number;
}

function useCountUp(target: number, shouldStart: boolean, duration = 1400) {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!shouldStart) return;

    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCurrent(Math.round(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [shouldStart, target, duration]);

  return current;
}

function StatItem({ stat, inView, delay }: StatItemProps) {
  const value = useCountUp(stat.value, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      className="relative flex flex-col items-center gap-3 md:items-start"
    >
      <span className="font-display text-4xl font-semibold text-white md:text-5xl">
        {value.toLocaleString()}
        {stat.suffix}
      </span>
      <p className="text-sm uppercase tracking-[0.3em] text-white/50">
        {stat.label}
      </p>
      <div className="absolute -bottom-4 hidden h-[2px] w-20 bg-gradient-to-r from-accent to-neon md:block" />
    </motion.div>
  );
}
