import { createSlice } from "@reduxjs/toolkit";

const cashSlice = createSlice({
  name: "cashbox",
  initialState: {
    cashbox: [
      { id: 1, name: "kassa1" },
      { id: 2, name: "kassa2" },
      { id: 3, name: "kassa3" },
      { id: 4, name: "kassa4" },
    ],
  },
  reducers: {
    addCashbox: (state, action) => {
      state.cashbox.push(action.payload);
    },
    delCashbox: (state, action) => {
      const filtered = state.cashbox.filter((i) => i.id !== action.payload);
      state.cashbox = filtered;
    },
    editCashbox: (state, action) => {
      state.cashbox.splice(
        state.cashbox.findIndex((i) => i.id === action.payload.id),
        1,
        action.payload
      );
    },
  },
});

export const { addCashbox, delCashbox, editCashbox } = cashSlice.actions;
export default cashSlice.reducer;
