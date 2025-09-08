"use client";
import AwardsHeader from "@/components/Awards/AwardsHeader";
import { AwardsProvider } from "@/components/Awards/AwardsContext";
import AwardsGrid from "@/components/Awards/AwardsGrid";

export default function AwardsPage() {
  return (
      <AwardsProvider>
        <AwardsHeader />
        <AwardsGrid />
      </AwardsProvider>
  );
}
