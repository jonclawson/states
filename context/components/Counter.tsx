import React, { useCallback, useMemo, useState } from "react";
import { useCounterContext } from "../context/CounterContext";

export const CounterDemo = () => {
  const { count, setCount } = useCounterContext();
  const [step, setStep] = useState(1);

  const inc = useCallback(() => setCount((c) => c + step), [setCount, step]);
  const dec = useCallback(() => setCount((c) => c - step), [setCount, step]);

  const double = useMemo(() => count * 2, [count]);

  return (
    <div className="card">
      <div className="small">Counter (shared via Context + useState)</div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
        <div className="counter">
          <button className="button" onClick={dec}>-</button>
          <div className="value">{count}</div>
          <button className="button" onClick={inc}>+</button>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="small">step</div>
          <input className="input" style={{ width: 72 }} value={step} onChange={(e) => setStep(Number(e.target.value) || 1)} />
        </div>
      </div>
      <div style={{ marginTop: 12 }} className="small">Derived (useMemo): <strong>{double}</strong></div>
    </div>
  );
};
