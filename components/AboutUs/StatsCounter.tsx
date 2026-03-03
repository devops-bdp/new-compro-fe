"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface StatItem {
  value: number;
  suffix?: string;
  unit: string;
  year: string;
}

const STATS: StatItem[] = [
  { value: 28.9, unit: "millionTons", year: "2018" },
  { value: 31.8, unit: "millionTons", year: "2019" },
  { value: 30.2, unit: "millionTons", year: "2020" },
  { value: 37.6, unit: "millionTons", year: "2021" },
  { value: 38.9, unit: "millionTons", year: "2022" },
  { value: 45, suffix: "+", unit: "millionTons", year: "2023" },
];

function AnimatedNumber({
  target,
  suffix = "",
  duration = 1500,
  startOnView = true,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  startOnView?: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!startOnView) {
      animate(0, target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate(0, target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, startOnView, hasAnimated]);

  function animate(start: number, end: number) {
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2); // ease-out
      const current = start + (end - start) * eased;
      setDisplayValue(Math.round(current * 10) / 10);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  return (
    <span ref={ref}>
      {displayValue.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 mt-24">
      <h3 className="text-center text-xl font-bold uppercase tracking-wide text-zinc-700 sm:text-2xl">
        {t("statsTitle")}
      </h3>
      <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
        {STATS.map((stat) => (
          <div
            key={stat.year}
            className="flex flex-col items-center text-center"
          >
            <span className="text-3xl font-bold text-orange-500 sm:text-4xl lg:text-5xl">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            </span>
            <span className="mt-1 text-sm font-medium text-zinc-600">
              {t(stat.unit)}
            </span>
            <span className="mt-0.5 text-xs text-zinc-500">{stat.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
