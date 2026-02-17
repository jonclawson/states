import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterComponent } from './counter.component';
import { TodosComponent } from './todos.component';
import { selectCount } from './store/counter.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CounterComponent, TodosComponent],
  template: `
    <div class="app">
      <h1>Analog.js — NgRx features demo</h1>
      <p class="card">This demo shows <strong>actions</strong>, <strong>reducers</strong>, <strong>selectors</strong>, <strong>effects</strong> and <strong>devtools</strong>.</p>

      <counter></counter>
      <todos></todos>

      <div class="card">
        <h3>Global snapshot</h3>
        <pre>{{ state$ | async | json }}</pre>
      </div>
    </div>
  `
})
export class AppComponent {
  state$: Observable<any>;
  constructor(private store: Store<{ counter: any; todos: any }>) {
    this.state$ = this.store.select(state => state);
  }
}
