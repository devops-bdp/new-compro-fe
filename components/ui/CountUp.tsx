"use client";

import { useEffect, useRef, useState } from "react";

function formatNumber(value: number, locale: "en" | "id"): string {
  return value.toLocaleString(locale === "id" ? "id-ID" : "en-US", {
    maximumFractionDigits: 0,
  });
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  locale?: "en" | "id";
}

export function CountUp({
  value,
  suffix = "",
  duration = 2000,
  locale = "en",
}: CountUpProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasAnimated) return;
        setHasAnimated(true);

        const start = performance.now();
        const animate = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeOutExpo(progress);
          setDisplayValue(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {formatNumber(displayValue, locale)}
      {suffix}
    </span>
  );
}

interface CountUpRangeProps {
  from: number;
  to: number;
  suffix?: string;
  duration?: number;
  locale?: "en" | "id";
}

export function CountUpRange({
  from,
  to,
  suffix = "",
  duration = 2000,
  locale = "en",
}: CountUpRangeProps) {
  const [displayFrom, setDisplayFrom] = useState(0);
  const [displayTo, setDisplayTo] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasAnimated) return;
        setHasAnimated(true);

        const start = performance.now();
        const animate = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeOutExpo(progress);
          setDisplayFrom(Math.round(from * eased));
          setDisplayTo(Math.round(to * eased));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [from, to, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {formatNumber(displayFrom, locale)} - {formatNumber(displayTo, locale)}
      {suffix}
    </span>
  );
}
