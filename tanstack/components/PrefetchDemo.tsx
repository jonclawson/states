import React from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { fetchUser } from '../lib/api'

export default function PrefetchDemo() {
  const qc = useQueryClient()

  return (
    <div className="card">
      <h3>Prefetch Demo</h3>
      <p>Hover a button to prefetch user data.</p>
      <div style={{ display: 'flex', gap: 8 }}>
        {[1, 2, 3].map((id) => (
          <button key={id} onMouseEnter={() => qc.prefetchQuery(['user', id], () => fetchUser(id))}>
            Prefetch user {id}
          </button>
        ))}
      </div>
      <small>Prefetching helps make navigations feel instant.</small>
    </div>
  )
}
