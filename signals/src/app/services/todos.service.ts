import { Injectable, signal, computed, effect } from '@angular/core';

export interface Todo { title: string; completed: boolean }

@Injectable({ providedIn: 'root' })
export class TodosService {
  private _list = signal<Todo[]>([]);
  readonly list = this._list;

  readonly loading = signal(false);

  // derived value
  readonly activeCount = computed(() => this._list().filter(t => !t.completed).length);

  constructor() {
    // Persist to localStorage whenever list changes
    effect(() => {
      const snapshot = this._list();
      try {
        localStorage.setItem('signals.todos', JSON.stringify(snapshot));
      } catch (e) {
        console.warn('persist failed', e);
      }
    });

    // initial hydration from localStorage
    const saved = localStorage.getItem('signals.todos');
    if (saved) {
      try { this._list.set(JSON.parse(saved)); } catch {}
    }
  }

  load() {
    this.loading.set(true);
    // simulate async fetch
    setTimeout(() => {
      const sample: Todo[] = [
        { title: 'Buy milk', completed: false },
        { title: 'Read Signals guide', completed: false },
        { title: 'Write demo', completed: true }
      ];
      this._list.set(sample);
      this.loading.set(false);
    }, 700);
  }

  add(title: string) {
    this._list.update(list => [...list, { title, completed: false }]);
  }

  toggle(index: number) {
    this._list.update(list => list.map((t, i) => i === index ? { ...t, completed: !t.completed } : t));
  }

  clear() { this._list.set([]); }
}
