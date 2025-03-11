import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';

interface CounterState {
  currentUser: User | undefined;
}

const initialState: CounterState = {
  currentUser: undefined,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | undefined>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = counterSlice.actions;
export default counterSlice.reducer;
