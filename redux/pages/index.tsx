import React from 'react';
import Counter from '../components/Counter';
import Todos from '../components/Todos';
import Link from 'next/link';

const Home = () => (
  <main style={{ padding: '1rem', fontFamily: 'Inter, sans-serif' }}>
    <h1>Next.js + Redux Toolkit Demo 🚀</h1>
    <p>Demonstrates slices, async thunks, middleware, persistence, SSR integration.</p>
    <Counter />
    <Todos />
    <p style={{ marginTop: '1rem' }}><Link href="/ssr">Server-side populated page →</Link></p>
  </main>
);

export default Home;
