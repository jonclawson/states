import React from 'react'
import { useCounterStore } from '../stores/counterStore'

export default function DevtoolsDemo() {
  const { count, increase } = useCounterStore((s) => ({ count: s.count, increase: s.increase }))
  return (
    <div className="card">
      <h3>Devtools Demo</h3>
      <p>Count: <strong>{count}</strong></p>
      <button onClick={() => increase(2)}>+2</button>
      <small>Open your Zustand/Redux devtools to inspect actions and state (if you have the extension).</small>
    </div>
  )
}
