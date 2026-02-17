import React, { createContext, useContext, useState } from "react";

type CounterContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  return <CounterContext.Provider value={{ count, setCount }}>{children}</CounterContext.Provider>;
};

export const useCounterContext = () => {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error("useCounterContext must be used within CounterProvider");
  return ctx;
};
