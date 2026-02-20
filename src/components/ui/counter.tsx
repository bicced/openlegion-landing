"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
}

export function Counter({ target, suffix = "", prefix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const dur = 1400;
    const steps = 45;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, dur / steps);
    return () => clearInterval(interval);
  }, [isInView, target]);

  return (
    <span ref={ref} aria-hidden="true">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
