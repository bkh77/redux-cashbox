import * as types from "../action/actionTypes";

function incomeReducer(
  state = {
    income: [
      { id: 1, user: "Stive Jobs", amount: 1200, cashbox: 1, date: "2021-08-09T15:23" },
      { id: 2, user: "Elon Musk", amount: 1500, cashbox: 2, date: "2021-08-10T16:45" },
      { id: 3, user: "Jeff Bezos", amount: 2000, cashbox: 3, date: "2021-08-12T15:16" },
    ],
  },
  action
) {
  switch (action.type) {
    case types.ADD_INCOME:
      const income = [...state.income];
      income.push(action.payload);
      state = { ...state, income };
      break;
    case types.DEL_INCOME:
      const filtered = state.income.filter((i) => i.id !== action.payload);
      state = { ...state, income: filtered };
      break;
    case types.EDIT_INCOME:
      const clone = [...state.income];
      clone.splice(
        clone.findIndex((i) => i.id === action.payload.id),
        1,
        action.payload
      );
      state = { ...state, income: clone };
      break;
    default:
  }
  return state;
}
export default incomeReducer;
