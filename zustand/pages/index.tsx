import React from 'react'
import Counter from '../components/Counter'
import Todos from '../components/Todos'
import PersistDemo from '../components/PersistDemo'
import DevtoolsDemo from '../components/DevtoolsDemo'
import SubscriptionDemo from '../components/SubscriptionDemo'

export default function Home() {
  return (
    <div className="container">
      <h1>Next.js + Zustand — demo</h1>

      <Counter />
      <DevtoolsDemo />
      <SubscriptionDemo />
      <Todos />
      <PersistDemo />

      <div className="card">
        <h3>Notes</h3>
        <ul>
          <li>Use selectors to limit re-renders.</li>
          <li>Use middleware `persist` for localStorage persistence.</li>
          <li>Use `subscribe` for external listeners without rerendering.</li>
        </ul>
      </div>
    </div>
  )
}
