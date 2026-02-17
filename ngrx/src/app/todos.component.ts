import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TodosActions from './store/todos.actions';

@Component({
  selector: 'todos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h2>Todos (Effects demo)</h2>
      <div style="margin-bottom:8px">
        <button (click)="load()">Load todos (async)</button>
        <button (click)="addSample()">Add sample todo</button>
      </div>

      <div *ngIf="loading$ | async">Loading…</div>
      <ul>
        <li *ngFor="let t of todos$ | async; let i = index">
          <label [class.todo-done]="t.completed">
            <input type="checkbox" [checked]="t.completed" (change)="toggle(i)" />
            {{ t.title }}
          </label>
        </li>
      </ul>
    </div>
  `
})
export class TodosComponent {
  todos$: Observable<any[]>;
  loading$: Observable<boolean>;
  constructor(private store: Store<any>) {
    this.todos$ = this.store.select(state => state.todos.list);
    this.loading$ = this.store.select(state => state.todos.loading);
  }
  load() { this.store.dispatch(TodosActions.loadTodos()); }
  addSample() { this.store.dispatch(TodosActions.addTodo({ title: 'New sample todo' })); }
  toggle(index: number) { this.store.dispatch(TodosActions.toggleTodo({ index })); }
}
