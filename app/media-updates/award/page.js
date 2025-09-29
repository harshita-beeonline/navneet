"use client";

import { AwardsProvider } from "@/components/MediaAndUpdates/Awards/AwardsContext";
import AwardsGrid from "@/components/MediaAndUpdates/Awards/AwardsGrid";
import AwardsHeader from "@/components/MediaAndUpdates/Awards/AwardsHeader";

export default function AwardsPage() {
  return (
    <AwardsProvider>
      <AwardsHeader />
      <AwardsGrid />
    </AwardsProvider>
  );
}
