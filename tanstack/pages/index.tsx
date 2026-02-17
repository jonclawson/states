import React from 'react'
import Todos from '../components/Todos'
import InfinitePosts from '../components/InfinitePosts'
import PrefetchDemo from '../components/PrefetchDemo'

export default function Home() {
  return (
    <div className="container">
      <h1>Next.js + TanStack Query — demo</h1>

      <Todos />
      <PrefetchDemo />
      <InfinitePosts />

      <div className="card">
        <h3>Notes</h3>
        <ul>
          <li><strong>useQuery</strong> for basic fetching.</li>
          <li><strong>useMutation</strong> with optimistic updates for fast UX.</li>
          <li><strong>useInfiniteQuery</strong> for cursor/page based infinite loading.</li>
          <li><strong>dehydrate()/Hydrate</strong> for SSR prefetch + client hydration.</li>
        </ul>
      </div>
    </div>
  )
}
