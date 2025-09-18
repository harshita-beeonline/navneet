"use client";
import { createContext, useContext, useState } from "react";

const Ctx = createContext(null);

export function AwardsProvider({ children }) {
  const [sortOrder, setSortOrder] = useState("initial"); // "initial" | "asc" | "desc"
  return (
    <Ctx.Provider value={{ sortOrder, setSortOrder }}>
      {children}
    </Ctx.Provider>
  );
}

export function useAwards() {
  const ctx = useContext(Ctx);
  if (!ctx) return { sortOrder: "initial", setSortOrder: () => {} };
  return ctx;
}
