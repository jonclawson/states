import React, { useState } from 'react'
import { useTodoStore } from '../stores/todoStore'

export default function Todos() {
  const [text, setText] = useState('')
  const todos = useTodoStore((s) => s.todos)
  const loading = useTodoStore((s) => s.loading)
  const addTodo = useTodoStore((s) => s.addTodo)
  const toggleTodo = useTodoStore((s) => s.toggleTodo)
  const removeTodo = useTodoStore((s) => s.removeTodo)
  const fetchTodos = useTodoStore((s) => s.fetchTodos)

  return (
    <div className="card">
      <h3>Todos</h3>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New todo" />
        <button
          onClick={() => {
            if (!text.trim()) return
            addTodo(text.trim())
            setText('')
          }}
        >
          Add
        </button>
        <button onClick={() => fetchTodos()}>{loading ? 'Loading...' : 'Fetch sample'}</button>
      </div>

      <ul>
        {todos.map((t) => (
          <li key={t.id} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input type="checkbox" checked={t.done} onChange={() => toggleTodo(t.id)} />
            <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>{t.text}</span>
            <button style={{ marginLeft: 'auto' }} onClick={() => removeTodo(t.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <small>Unfinished: {todos.filter((t) => !t.done).length}</small>
    </div>
  )
}
