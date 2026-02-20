import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { UseCases } from "@/components/use-cases";
import { Comparison } from "@/components/comparison";
import { Architecture } from "@/components/architecture";
import { Quickstart } from "@/components/quickstart";
import { Security } from "@/components/security";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-nav">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Features />
        <UseCases />
        <Comparison />
        <Architecture />
        <Quickstart />
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
