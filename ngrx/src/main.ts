import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { counterReducer } from './app/store/counter.reducer';
import { todosReducer } from './app/store/todos.reducer';
import { TodosEffects } from './app/store/todos.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore({ counter: counterReducer, todos: todosReducer }),
    provideEffects(TodosEffects),
    provideStoreDevtools({ maxAge: 25 })
  ]
}).catch(err => console.error(err));
