import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Todo { id: number; title: string; completed: boolean; }

interface TodosState { items: Todo[]; status: 'idle'|'loading'|'failed' }

const initialState: TodosState = { items: [], status: 'idle' };

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
  return res.data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<Todo>) { state.items.unshift(action.payload); },
      prepare(title: string) { return { payload: { id: Date.now(), title, completed: false } as Todo }; }
    },
    toggleTodo(state, action: PayloadAction<number>) { const todo = state.items.find(t => t.id === action.payload); if (todo) todo.completed = !todo.completed; },
    clear(state){ state.items=[]; }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => { state.status='loading'; });
    builder.addCase(fetchTodos.fulfilled, (state, action) => { state.status='idle'; state.items = action.payload; });
    builder.addCase(fetchTodos.rejected, (state) => { state.status='failed'; });
  },
});

export const { addTodo, toggleTodo, clear } = todosSlice.actions;

export default todosSlice.reducer;
