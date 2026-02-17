import { createReducer, on } from '@ngrx/store';
import * as TodosActions from './todos.actions';

export interface TodosState {
  list: { title: string; completed: boolean }[];
  loading: boolean;
  error?: any;
}

export const initialState: TodosState = {
  list: [],
  loading: false
};

export const todosReducer = createReducer(
  initialState,
  on(TodosActions.loadTodos, state => ({ ...state, loading: true })),
  on(TodosActions.loadTodosSuccess, (state, { todos }) => ({ ...state, list: todos, loading: false })),
  on(TodosActions.loadTodosFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(TodosActions.addTodo, (state, { title }) => ({ ...state, list: [...state.list, { title, completed: false }] })),
  on(TodosActions.toggleTodo, (state, { index }) => ({
    ...state,
    list: state.list.map((t, i) => i === index ? { ...t, completed: !t.completed } : t)
  }))
);
