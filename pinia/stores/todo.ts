import { defineStore } from 'pinia'

export type Todo = { id: string; text: string; done: boolean }

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
    loading: false,
  }),
  getters: {
    unfinishedCount: (state) => state.todos.filter((t) => !t.done).length,
  },
  actions: {
    add(text: string) {
      this.todos.unshift({ id: Date.now().toString(), text, done: false })
    },
    toggle(id: string) {
      const t = this.todos.find((x) => x.id === id)
      if (t) t.done = !t.done
    },
    remove(id: string) {
      this.todos = this.todos.filter((t) => t.id !== id)
    },
    async fetchSample() {
      this.loading = true
      await new Promise((r) => setTimeout(r, 700))
      this.todos = [
        { id: '1', text: 'Learn Pinia', done: true },
        { id: '2', text: 'Build Nuxt + Pinia sample', done: false },
      ]
      this.loading = false
    },
  },
  // persist only the todos array to localStorage
  persist: {
    paths: ['todos'],
  },
})
