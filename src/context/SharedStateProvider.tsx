"use client";

import React, { createContext, useContext, useState } from "react";

type SharedStateContextType = {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
};

const defaultValue: SharedStateContextType = {
  selectedId: null,
  setSelectedId: () => {},
};

const SharedStateContext = createContext<SharedStateContextType>(defaultValue);

export const SharedStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedId, setSelectedId] = useState<string | null>("egg.glb");

  return (
    <SharedStateContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => {
  const context = useContext(SharedStateContext);
  if (!context)
    throw new Error("useSharedState must be used within SharedStateProvider");
  return context;
};
