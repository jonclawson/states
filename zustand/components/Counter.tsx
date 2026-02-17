import React from 'react'
import { useCounterStore } from '../stores/counterStore'

export default function Counter() {
  // selector usage: only subscribe to count and actions we need
  const { count, increase, decrease, reset, asyncIncrease } = useCounterStore(
    (s) => ({ count: s.count, increase: s.increase, decrease: s.decrease, reset: s.reset, asyncIncrease: s.asyncIncrease })
  )

  return (
    <div className="card">
      <h3>Counter</h3>
      <p><strong>{count}</strong></p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => increase()}>+1</button>
        <button onClick={() => decrease()}>-1</button>
        <button onClick={() => increase(5)}>+5</button>
        <button onClick={() => asyncIncrease(3)}>async +3</button>
        <button onClick={() => reset()}>reset</button>
      </div>
      <small>Double (derived): {count * 2}</small>
    </div>
  )
}
