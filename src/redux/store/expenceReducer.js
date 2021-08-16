import { createSlice } from "@reduxjs/toolkit";

const expenceSlice = createSlice({
  name: "expence",
  initialState: {
    expence: [
      {
        id: 1,
        userID: 1,
        amount: 500,
        cashboxID: 1,
        date: "2021-09-09 09:23",
      },
      {
        id: 2,
        userID: 2,
        amount: 800,
        cashboxID: 2,
        date: "2021-09-10 10:45",
      },
      {
        id: 3,
        userID: 3,
        amount: 700,
        cashboxID: 3,
        date: "2021-09-12 20:16",
      },
      {
        id: 4,
        userID: 4,
        amount: 1800,
        cashboxID: 4,
        date: "2021-08-16 15:42",
      },
    ],
  },
  reducers: {
    addExpence: (state, action) => {
      state.expence.push(action.payload);
    },
    delExpence: (state, action) => {
      const filtered = state.expence.filter((i) => i.id !== action.payload);
      state.expence = filtered;
    },
    editExpence: (state, action) => {
      state.expence.splice(
        state.expence.findIndex((i) => i.id === action.payload.id),
        1,
        action.payload
      );
    },
  },
});

export const { addExpence, delExpence, editExpence } = expenceSlice.actions;
export default expenceSlice.reducer;
