import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchPostsPage } from '../lib/api'

export const useInfinitePosts = () => {
  return useInfiniteQuery({
    queryKey: ['posts-infinite'],
    queryFn: ({ pageParam = 1 }) => fetchPostsPage({ page: pageParam, limit: 10 }),
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) return undefined
      // next page is current pages length + 1
      return allPages.length + 1
    }
  })
}
