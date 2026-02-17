import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from './store/counter.actions';
import { selectCount } from './store/counter.selectors';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h2>Counter</h2>
      <div>value: <strong>{{ count$ | async }}</strong></div>
      <div style="margin-top:8px">
        <button (click)="inc()">+1</button>
        <button (click)="dec()">-1</button>
        <button (click)="reset()">reset</button>
        <button (click)="add5()">+5 (action payload)</button>
      </div>
    </div>
  `
})
export class CounterComponent {
  count$: Observable<number>;
  constructor(private store: Store) {
    this.count$ = this.store.select(selectCount);
  }
  inc() { this.store.dispatch(CounterActions.increment()); }
  dec() { this.store.dispatch(CounterActions.decrement()); }
  reset() { this.store.dispatch(CounterActions.reset()); }
  add5() { this.store.dispatch(CounterActions.add({ value: 5 })); }
}
