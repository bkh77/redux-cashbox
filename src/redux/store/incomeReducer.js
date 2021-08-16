import { createSlice } from "@reduxjs/toolkit";

const incomeSlice = createSlice({
  name: "income",
  initialState: {
    income: [
      {
        id: 1,
        userID: 1,
        amount: 1200,
        cashboxID: 1,
        date: "2021-08-09 15:23",
      },
      {
        id: 2,
        userID: 2,
        amount: 1500,
        cashboxID: 2,
        date: "2021-08-10 16:45",
      },
      {
        id: 3,
        userID: 3,
        amount: 2000,
        cashboxID: 3,
        date: "2021-08-12 15:16",
      },
      {
        id: 4,
        userID: 4,
        amount: 5000,
        cashboxID: 4,
        date: "2021-08-15T15:42",
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
