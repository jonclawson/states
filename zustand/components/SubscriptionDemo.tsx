import React, { useEffect, useState } from 'react'
import { useCounterStore } from '../stores/counterStore'

export default function SubscriptionDemo() {
  const [last, setLast] = useState<number | null>(null)

  useEffect(() => {
    // Demonstrates external subscription without re-rendering whole component via selector
    const unsub = useCounterStore.subscribe(
      (state) => state.count,
      (count) => {
        setLast(count)
      }
    )

    return () => unsub()
  }, [])

  return (
    <div className="card">
      <h3>Subscription Demo</h3>
      <p>Last observed count: <strong>{last ?? '—'}</strong></p>
      <small>This component updates via store.subscribe (no selector in render).</small>
    </div>
  )
}
