import { createAction, props } from '@ngrx/store';

export const loadTodos = createAction('[Todos] Load');
export const loadTodosSuccess = createAction('[Todos] Load Success', props<{ todos: any[] }>());
export const loadTodosFailure = createAction('[Todos] Load Failure', props<{ error: any }>());

export const addTodo = createAction('[Todos] Add', props<{ title: string }>());
export const toggleTodo = createAction('[Todos] Toggle', props<{ index: number }>());
