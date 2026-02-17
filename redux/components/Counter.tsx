import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { increment, decrement, incrementByAmount, incrementAsync } from '../features/counterSlice';

const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const status = useAppSelector(state => state.counter.status);
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState('2');

  return (
    <section style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #eee' }}>
      <h2>Counter</h2>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span style={{ margin: '0 1rem' }}>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementAsync(Number(amount || 0)))} disabled={status === 'loading'} style={{ marginLeft: '1rem' }}>
          Increment Async
        </button>
      </div>
      <div style={{ marginTop: '0.5rem' }}>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(amount || 0)))}>Add amount</button>
      </div>
    </section>
  );
};

export default Counter;
