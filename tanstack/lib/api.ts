import axios from 'axios'

const client = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' })

export const fetchTodos = async () => {
  const { data } = await client.get('/todos?_limit=10')
  return data as any[]
}

export const addTodo = async (todo: { title: string }) => {
  const { data } = await client.post('/todos', { ...todo, completed: false })
  return data
}

export const fetchPostsPage = async ({ page = 1, limit = 10 } = {}) => {
  const { data } = await client.get('/posts', { params: { _page: page, _limit: limit } })
  return data as any[]
}

export const fetchUser = async (userId: number) => {
  const { data } = await client.get(`/users/${userId}`)
  return data
}
