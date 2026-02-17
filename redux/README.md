# Next.js + Redux Toolkit Sample ✅

This demo shows how to wire up Redux Toolkit in a Next.js app with:

- Slices and reducers (counter, todos)
- Async thunks (fetching todos, async increment)
- Custom middleware (simple logger)
- Persistence with `redux-persist` (client-side)
- Server-side store population using `next-redux-wrapper`

Getting started:

1. npm install
2. npm run dev
3. Open http://localhost:3000

Notes:
- `pages/ssr.tsx` demonstrates server-side dispatch with `getServerSideProps` and `next-redux-wrapper`.
- State is persisted to localStorage for the `counter` and `todos` slices.

Enjoy exploring! 🎉
