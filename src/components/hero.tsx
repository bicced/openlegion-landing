"use client";

import Image from "next/image";
import { Github, ChevronRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/animate-in";
import { Counter } from "@/components/ui/counter";
import { HERO, GITHUB_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-6 md:px-8"
    >
      <div className="hero-glow" aria-hidden="true" />
      <div className="grid-pattern absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl pt-20 text-center">
        <AnimateIn>
          <div className="mb-8 flex justify-center">
            <div className="logo-glow">
              <Image
                src="/logo.png"
                alt="OpenLegion"
                width={120}
                height={120}
                sizes="120px"
                className="relative z-10 rounded-full drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.06}>
          <div className="mb-8 inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-5 py-2 text-sm font-medium text-accent-light backdrop-blur-sm">
            {HERO.badge}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.12}>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {HERO.titleLine1}
            <br />
            <span className="gradient-text">{HERO.titleAccent}</span>
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.18}>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {HERO.subtitle}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.24}>
          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine btn-glow flex w-full items-center justify-center gap-2.5 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-white sm:w-auto"
            >
              <Github className="h-4.5 w-4.5" aria-hidden="true" />
              {HERO.ctaPrimary}
            </a>
            <a
              href="#quickstart"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-accent/40 hover:bg-accent/5 sm:w-auto"
            >
              {HERO.ctaSecondary}
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.32}>
          <div className="mx-auto grid max-w-md grid-cols-3 gap-6 sm:max-w-lg sm:gap-8">
            {HERO.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="mb-1 font-mono text-2xl font-bold text-foreground sm:text-3xl md:text-4xl"
                  aria-label={`${stat.prefix}${stat.value}${stat.suffix} ${stat.label}`}
                >
                  <Counter
                    target={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <div className="text-xs text-muted sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
