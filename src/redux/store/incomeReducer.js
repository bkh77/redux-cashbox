import { createSlice } from "@reduxjs/toolkit";

const incomeSlice = createSlice({
  name: "income",
  initialState: {
    income: [
      {
        id: 1,
        user: "Stive Jobs",
        amount: 1200,
        cashbox: 1,
        date: "2021-08-09T15:23",
      },
      {
        id: 2,
        user: "Elon Musk",
        amount: 1500,
        cashbox: 2,
        date: "2021-08-10T16:45",
      },
      {
        id: 3,
        user: "Jeff Bezos",
        amount: 2000,
        cashbox: 3,
        date: "2021-08-12T15:16",
      },
    ],
  },
  reducers: {
    addIncome: (state, action) => {
      state.income.push(action.payload);
    },
    delIncome: (state, action) => {
      const filtered = state.income.filter((i) => i.id !== action.payload);
      state.income = filtered;
    },
    editIncome: (state, action) => {
      state.income.splice(
        state.income.findIndex((i) => i.id === action.payload.id),
        1,
        action.payload
      );
    },
  },
});

export const { addIncome, delIncome, editIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
