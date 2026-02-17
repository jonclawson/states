import React from 'react'
import { usePersistedCounter } from '../stores/persistStore'

export default function PersistDemo() {
  const { value, set } = usePersistedCounter((s) => ({ value: s.value, set: s.set }))

  return (
    <div className="card">
      <h3>Persist Demo</h3>
      <p>Persisted value: <strong>{value}</strong></p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => set(value + 1)}>+1</button>
        <button onClick={() => set(0)}>reset</button>
      </div>
      <small>This value is persisted to localStorage automatically.</small>
    </div>
  )
}
