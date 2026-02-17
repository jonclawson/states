import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h2>Counter (service + signals)</h2>
      <div>value: <strong>{{ counter.count() }}</strong> — double: <strong>{{ counter.double() }}</strong></div>
      <div style="margin-top:8px">
        <button (click)="counter.increment()">+1</button>
        <button (click)="counter.decrement()">-1</button>
        <button (click)="counter.reset()">reset</button>
        <button (click)="counter.add(5)">+5</button>
      </div>
      <div class="small" style="margin-top:8px">Last changed: {{ counter.lastChanged() | date:'mediumTime' }}</div>
    </div>
  `
})
export class CounterComponent {
  constructor(public counter: CounterService) {}
}
