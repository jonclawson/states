import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as TodosActions from './todos.actions';
import { of } from 'rxjs';
import { delay, map, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions) {}

  // Simulate async fetch
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodos),
      switchMap(() =>
        of([
          { title: 'Buy milk', completed: false },
          { title: 'Read NgRx docs', completed: false },
          { title: 'Write demo', completed: true }
        ]).pipe(
          delay(800),
          map(todos => TodosActions.loadTodosSuccess({ todos })),
          catchError(error => of(TodosActions.loadTodosFailure({ error })))
        )
      )
    )
  );
}
