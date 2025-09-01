"use client";
import React, { createContext, useState, useContext } from "react";

const AwardsContext = createContext();

export function AwardsProvider({ children }) {
  const [sortOrder, setSortOrder] = useState("initial"); 

  const toggleSortOrder = () => {

    setSortOrder((prev) => {
      if (prev === "initial") return "asc";
      return prev === "asc" ? "desc" : "asc";
    });
  };

  return (
    <AwardsContext.Provider value={{ sortOrder, setSortOrder, toggleSortOrder }}>
      {children}
    </AwardsContext.Provider>
  );
}

export function useAwards() {
  return useContext(AwardsContext);
}