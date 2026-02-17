import { Injectable, signal, computed, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  private _count = signal(0);
  // public readonly signal so components can read but not reassign
  readonly count = this._count;

  // derived/computed value
  readonly double = computed(() => this._count() * 2);

  // a tiny effect to track last change time
  private _lastChanged = signal<Date | null>(null);
  readonly lastChanged = this._lastChanged;

  constructor() {
    // log on change (demonstrates `effect` usage)
    effect(() => {
      const v = this._count();
      this._lastChanged(new Date());
      // side-effect: console log (safe in effect)
      console.debug('[CounterService] count ->', v);
    });
  }

  increment() { this._count.update(n => n + 1); }
  decrement() { this._count.update(n => n - 1); }
  add(v: number) { this._count.update(n => n + v); }
  reset() { this._count.set(0); }
}
