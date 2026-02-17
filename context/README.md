# Next.js useContext & hooks demo

This small demo shows patterns for React state-management using `useContext`, `useReducer`, `useState`, `useMemo`, `useCallback`, and a `useLocalStorage` custom hook.

Run locally:

1. cd context
2. npm install
3. npm run dev

App will run on http://localhost:3001

What's included:
- `CounterProvider` (shared state via `useState` + `useContext`)
- `TodosProvider` (`useReducer` inside a Context, persisted with `useLocalStorage`)
- Examples of `useMemo`/`useCallback` in components
