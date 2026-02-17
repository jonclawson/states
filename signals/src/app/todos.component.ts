import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'todos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h2>Todos (service + signals + effect)</h2>
      <div style="margin-bottom:8px">
        <button (click)="todos.load()">Load sample todos (async)</button>
        <button (click)="todos.add('New todo')">Add todo</button>
        <button (click)="todos.clear()">Clear</button>
      </div>

      <div *ngIf="todos.loading()">Loading…</div>
      <ul>
        <li *ngFor="let t of todos.list(); let i = index">
          <label [class.todo-done]="t.completed">
            <input type="checkbox" [checked]="t.completed" (change)="todos.toggle(i)" />
            {{ t.title }}
          </label>
        </li>
      </ul>

      <div class="small">Total: {{ todos.list().length }} — Active: {{ todos.activeCount() }}</div>
    </div>
  `
})
export class TodosComponent {
  constructor(public todos: TodosService) {}
}
