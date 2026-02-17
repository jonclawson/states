import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export const incrementAsync = createAsyncThunk('counter/incrementAsync', async (amount: number) => {
  await new Promise((r) => setTimeout(r, 500));
  return amount;
});

interface CounterState {
  value: number;
  status: 'idle' | 'loading';
}

const initialState: CounterState = { value: 0, status: 'idle' };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.value += action.payload;
    });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
