import create from 'zustand'
import { devtools } from 'zustand/middleware'

export type Todo = { id: string; text: string; done: boolean }

type TodoState = {
  todos: Todo[]
  loading: boolean
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  removeTodo: (id: string) => void
  fetchTodos: () => Promise<void>
}

export const useTodoStore = create<TodoState>()(
  devtools((set) => ({
    todos: [],
    loading: false,
    addTodo: (text: string) =>
      set((s) => ({ todos: [{ id: Date.now().toString(), text, done: false }, ...s.todos] })),
    toggleTodo: (id: string) =>
      set((s) => ({ todos: s.todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)) })),
    removeTodo: (id: string) => set((s) => ({ todos: s.todos.filter((t) => t.id !== id) })),
    fetchTodos: async () => {
      set({ loading: true })
      await new Promise((r) => setTimeout(r, 700))
      // Simulated data
      set({ todos: [
        { id: '1', text: 'Learn Zustand', done: true },
        { id: '2', text: 'Build a sample app', done: false }
      ], loading: false })
    }
  }))
)
