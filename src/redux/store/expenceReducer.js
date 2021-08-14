import { createSlice } from "@reduxjs/toolkit";

const expenceSlice = createSlice({
  name: "expence",
  initialState: {
    expence: [
      {
        id: 1,
        user: "Stive Jobs",
        amount: 500,
        cashbox: 1,
        date: "2021-09-09T09:23",
      },
      {
        id: 2,
        user: "Elon Musk",
        amount: 800,
        cashbox: 2,
        date: "2021-09-10T10:45",
      },
      {
        id: 3,
        user: "Jeff Bezos",
        amount: 700,
        cashbox: 3,
        date: "2021-09-12T20:16",
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
