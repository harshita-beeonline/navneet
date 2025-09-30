"use client";
import React from "react";
import HeroSection from "../../components/EHS/HeroSection/HeroSection";
import VMCSection from "../../components/EHS/VMCSection/VMCSection";
import PoliciesSection from "../../components/EHS/PoliciesSection/PoliciesSection";
import PillarsSection from "../../components/EHS/PillarsSection/PillarsSection";
import Pillars from "../../components/EHS/Pillars/Pillars";
import EhsSection from "../../components/EHS/EhsSection/EhsSection";
export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />
      <VMCSection/>
      <PoliciesSection/>
      <PillarsSection/>
      <Pillars/>
      <EhsSection/>
     

    </main>
  );
}
