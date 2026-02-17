import React, { useCallback, useMemo, useState } from "react";
import { useTodosContext, Todo } from "../context/TodosContext";

export const TodosDemo = () => {
  const { todos, dispatch } = useTodosContext();
  const [text, setText] = useState("");

  const add = useCallback(() => {
    if (!text.trim()) return;
    dispatch({ type: "ADD", text: text.trim() });
    setText("");
  }, [text, dispatch]);

  const toggle = useCallback((id: number) => dispatch({ type: "TOGGLE", id }), [dispatch]);
  const remove = useCallback((id: number) => dispatch({ type: "REMOVE", id }), [dispatch]);

  const remaining = useMemo(() => todos.filter((t) => !t.done).length, [todos]);

  return (
    <div className="card">
      <div className="small">Todos (useReducer + Context, persisted to localStorage)</div>
      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
        <input className="input" placeholder="Add todo..." value={text} onChange={(e) => setText(e.target.value)} />
        <button className="button" onClick={add}>Add</button>
      </div>

      <div style={{ marginTop: 12 }}>
        {todos.length === 0 ? (
          <div className="small">No todos yet — add one to try things out.</div>
        ) : (
          todos.map((t: Todo) => (
            <div className="todo" key={t.id} style={{ opacity: t.done ? 0.6 : 1 }}>
              <div className="todo-left">
                <div className="checkbox" onClick={() => toggle(t.id)} style={{ cursor: "pointer" }}>
                  {t.done ? "✓" : ""}
                </div>
                <div style={{ textDecoration: t.done ? "line-through" : "none" }}>{t.text}</div>
              </div>
              <div>
                <button className="button" onClick={() => remove(t.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="footer">Remaining: <strong>{remaining}</strong></div>
    </div>
  );
};
