import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { useTodoStore, Todo } from '../stores/todoStore'

type Props = { initialTodos: Todo[] }

export default function SSRPage({ initialTodos }: Props) {
  // hydrate: set on client only
  useEffect(() => {
    useTodoStore.setState({ todos: initialTodos })
  }, [initialTodos])

  const todos = useTodoStore((s) => s.todos)

  return (
    <div className="container">
      <h1>SSR Hydration Example</h1>
      <div className="card">
        <p>These todos were provided by getServerSideProps and hydrated into the store on the client.</p>
        <ul>
          {todos.map((t) => (
            <li key={t.id}>{t.text} {t.done ? '(done)' : ''}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Simulate server-side fetched data
  const initialTodos: Todo[] = [
    { id: 'ssr-1', text: 'Server todo 1', done: false },
    { id: 'ssr-2', text: 'Server todo 2', done: true },
  ]

  return { props: { initialTodos } }
}
