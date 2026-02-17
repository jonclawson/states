import React from 'react'
import { useInfinitePosts } from '../hooks/usePosts'

export default function InfinitePosts() {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isLoading } = useInfinitePosts()

  return (
    <div className="card">
      <h3>Infinite Posts (useInfiniteQuery)</h3>
      {isLoading && <div>Loading...</div>}
      <ul>
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.map((p: any) => (
              <li key={p.id}>{p.title}</li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage || !hasNextPage}>Load more</button>
        {isFetchingNextPage && <small> Loading more...</small>}
      </div>
    </div>
  )
}
