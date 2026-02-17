import React from 'react';
import { wrapper } from '../store';
import { fetchTodos } from '../features/todosSlice';
import Todos from '../components/Todos';

const SSRPage = () => (
  <main style={{ padding: '1rem' }}>
    <h1>SSRed Todos</h1>
    <Todos />
  </main>
);

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(fetchTodos());
  return { props: {} };
});

export default SSRPage;
