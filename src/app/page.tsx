"use client";

import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
    </>
  );
}
