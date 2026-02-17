import React from "react";
import Head from "next/head";
import { CounterDemo } from "../components/Counter";
import { TodosDemo } from "../components/Todos";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>useContext & hooks demo</title>
      </Head>

      <div className="header">
        <div>
          <div className="title">Next.js — useContext & hooks demo</div>
          <div className="small">Shows useContext, useReducer, useMemo, useCallback and a custom hook</div>
        </div>
        <div className="small">Port 3001</div>
      </div>

      <div className="grid">
        <CounterDemo />
        <TodosDemo />
      </div>

      <div style={{ marginTop: 20 }} className="card small">
        Notes:
        <ul>
          <li>Counter uses Context + useState (shared state across components).</li>
          <li>Todos uses useReducer inside a Context provider (complex state & actions).</li>
          <li>Persistent storage is via a small <code>useLocalStorage</code> hook.</li>
          <li>useMemo/useCallback are used to avoid unnecessary recalculation/handlers.</li>
        </ul>
      </div>
    </div>
  );
}
