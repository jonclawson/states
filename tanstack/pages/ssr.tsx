import React from 'react'
import { GetServerSideProps } from 'next'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { fetchTodos } from '../lib/api'
import Todos from '../components/Todos'

export default function SSR({}: {}) {
  return (
    <div className="container">
      <h1>SSR + Hydration Example</h1>
      <div className="card">
        <p>This page prefetches todos on the server and hydrates them into the client cache.</p>
        <Todos />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const qc = new QueryClient()
  await qc.prefetchQuery({ queryKey: ['todos'], queryFn: fetchTodos })

  return { props: { dehydratedState: dehydrate(qc) } }
}
