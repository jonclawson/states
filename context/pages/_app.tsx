import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { CounterProvider } from "../context/CounterContext";
import { TodosProvider } from "../context/TodosContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CounterProvider>
      <TodosProvider>
        <Component {...pageProps} />
      </TodosProvider>
    </CounterProvider>
  );
}
