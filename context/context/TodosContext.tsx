import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type Todo = { id: number; text: string; done: boolean };

type State = Todo[];

type Action =
  | { type: "ADD"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number }
  | { type: "SET"; todos: Todo[] };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD":
      return [{ id: Date.now(), text: action.text, done: false }, ...state];
    case "TOGGLE":
      return state.map((t) => (t.id === action.id ? { ...t, done: !t.done } : t));
    case "REMOVE":
      return state.filter((t) => t.id !== action.id);
    case "SET":
      return action.todos;
    default:
      return state;
  }
};

type TodosContextType = { todos: State; dispatch: React.Dispatch<Action> };
const TodosContext = createContext<TodosContextType | undefined>(undefined);

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [cached, setCached] = useLocalStorage<Todo[]>("todos_v1", []);
  const [todos, dispatch] = useReducer(reducer, cached);

  // keep localStorage in sync when reducer changes
  useEffect(() => {
    setCached(todos);
  }, [todos, setCached]);

  return <TodosContext.Provider value={{ todos, dispatch }}>{children}</TodosContext.Provider>;
};

export const useTodosContext = () => {
  const ctx = useContext(TodosContext);
  if (!ctx) throw new Error("useTodosContext must be used within TodosProvider");
  return ctx;
};
