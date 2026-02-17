# states — collection of state-management example apps 🚦

A compact workspace that demonstrates several frontend state-management approaches (React + Next/Nuxt, Angular) with small, focused example apps you can run locally.

## Quick summary
- **Purpose:** side-by-side examples of Context, Redux (RTK), Zustand, Pinia, NgRx, Angular Signals and TanStack Query.
- **Location:** each example is a self-contained project in its own folder with its own `package.json`.

---

## Quick start 🔧
Prerequisites: Node (12+), npm or yarn. Angular examples require the Angular CLI for `ng serve`.

To run any example:

1. cd into the folder (e.g. `cd redux`)
2. install deps: `npm install`
3. start dev server: `npm run dev` (or `npm start` / `npm run build` where appropriate)

Example:

```bash
cd redux && npm install && npm run dev
```

> Note: some examples expose custom ports (see table below). Run one app at a time to avoid port collisions.

---

## Project overview 📂
| Folder | Framework | Library / Pattern | Key files | Run (default) |
|---|---:|---|---|---|
| `context` | Next.js (React) | React Context + hooks | `context/CounterContext.tsx`, `hooks/useLocalStorage.ts`, `components/Counter.tsx` | `npm run dev` (port 3001) |
| `redux` | Next.js (React) | Redux Toolkit (RTK) + redux-persist | `features/counterSlice.ts`, `store/index.ts`, `components/Todos.tsx` | `npm run dev` |
| `zustand` | Next.js (React) | Zustand (stores) | `stores/counterStore.ts`, `stores/todoStore.ts`, `components/PersistDemo.tsx` | `npm run dev` |
| `pinia` | Nuxt 3 (Vue) | Pinia (+ persist plugin) | `stores/counter.ts`, `plugins/pinia-persist.client.ts`, `components/Todos.vue` | `npm run dev` |
| `tanstack` | Next.js (React) | TanStack Query (React Query) | `hooks/usePosts.ts`, `components/InfinitePosts.tsx` | `npm run dev` |
| `ngrx` | Angular | NgRx (store + effects) | `src/app/store/*` (`counter.actions.ts`, `todos.reducer.ts`) | `npm run dev` (port 4200) |
| `signals` | Angular | Angular Signals demo | `src/app/services/`, `app/counter.component.ts` | `npm run dev` (port 4201) |

---

## What to look at (recommended files) 💡
- React examples: `components/Counter.tsx`, `components/Todos.tsx` across folders — quick way to compare APIs.
- Stores/state: `stores/`, `features/`, `context/` — see how state is created and consumed in each approach.
- Persistence examples: `persistStore.ts` (Zustand), `redux` (`redux-persist`), `pinia` plugin.
- Server-state / data fetching: `tanstack/hooks/*` demonstrates React Query usage and prefetching.

---

## Notes & tips ⚠️
- Each folder is independent; run the usual `npm install` inside the folder before starting.
- Next/Nuxt apps default to port 3000 unless overridden (e.g. `context` uses `3001`).
- Angular examples use `ng serve` and the Angular CLI — ports shown in `package.json`.

---

If you want, I can add a root-level script to start multiple examples, or add a small CONTRIBUTING/DEV guide. ✅
