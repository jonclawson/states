import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchTodos, addTodo, toggleTodo, clear } from '../features/todosSlice';

const Todos = () => {
  const { items, status } = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');

  useEffect(() => {
    if (items.length === 0) dispatch(fetchTodos());
  }, []);

  return (
    <section style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #eee' }}>
      <h2>Todos</h2>
      <div>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="New todo..." />
        <button onClick={() => { if (text.trim()) { dispatch(addTodo(text)); setText(''); }}}>Add</button>
        <button onClick={() => dispatch(clear())} style={{ marginLeft: '0.5rem' }}>Clear</button>
      </div>
      <div style={{ marginTop: '0.5rem' }}>
        {status === 'loading' ? <div>Loading...</div> : items.map(t => (
          <div key={t.id}>
            <input type="checkbox" checked={t.completed} onChange={() => dispatch(toggleTodo(t.id))} />
            <span style={{ marginLeft: '0.5rem', textDecoration: t.completed ? 'line-through' : 'none' }}>{t.title}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '0.5rem' }}>
        <strong>Completed:</strong> {items.filter(t => t.completed).length} / {items.length}
      </div>
    </section>
  );
};

export default Todos;
