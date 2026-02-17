import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { TodosComponent } from './todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CounterComponent, TodosComponent],
  template: `
    <div class="app">
      <h1>Analog.js — Angular Signals + Services demo</h1>
      <p class="card small">This demo uses <strong>Signals</strong> in services as the single source of truth. See computed() and effect() usage.</p>

      <counter></counter>
      <todos></todos>

      <div class="card small">
        <strong>Notes</strong>
        <ul>
          <li>State is owned by services — components only read/act.</li>
          <li>Derived values use <code>computed()</code>.</li>
          <li>Persistence shown via an <code>effect()</code> (localStorage).</li>
        </ul>
      </div>
    </div>
  `
})
export class AppComponent {}
