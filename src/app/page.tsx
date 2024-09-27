"use client";

import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
