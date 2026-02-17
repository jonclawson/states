import React, { useState } from 'react'
import { useTodos, useAddTodo } from '../hooks/useTodos'

export default function Todos() {
  const [text, setText] = useState('')
  const { data: todos, isLoading, isError } = useTodos()
  const addTodo = useAddTodo()

  return (
    <div className="card">
      <h3>Todos (useQuery + useMutation)</h3>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New todo title" />
        <button onClick={() => { if (!text.trim()) return; addTodo.mutate(text.trim()); setText('') }}>Add</button>
      </div>

      {isLoading && <div>Loading...</div>}
      {isError && <div>Error loading todos</div>}

      <ul>
        {todos?.map((t: any) => (
          <li key={t.id}>{t.title} {t.completed ? '(done)' : ''}</li>
        ))}
      </ul>

      <small>Optimistic update on add — we show a temp item until server responds.</small>
    </div>
  )
}
