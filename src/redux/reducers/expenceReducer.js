import * as types from "../action/actionTypes";

function expenceReducer(
  state = {
    expence: [
      { id: 1, user: "Stive Jobs", amount: 500, cashbox: 1, date: "2021-09-09T09:23" },
      { id: 2, user: "Elon Musk", amount: 800, cashbox: 2, date: "2021-09-10T10:45" },
      { id: 3, user: "Jeff Bezos", amount: 700, cashbox: 3, date: "2021-09-12T20:16" },
    ],
  },
  action
) {
  switch (action.type) {
    case types.ADD_EXPENCE:
      const expence = [...state.expence];
      expence.push(action.payload);
      state = { ...state, expence };
      break;
    case types.DEL_EXPENCE:
      const filtered = state.expence.filter((i) => i.id !== action.payload);
      state = { ...state, expence: filtered };
      break;
    case types.EDIT_EXPENCE:
      const clone = [...state.expence];
      clone.splice(
        clone.findIndex((i) => i.id === action.payload.id),
        1,
        action.payload
      );
      state = { ...state, expence: clone };
      break;
    default:
  }
  return state;
}
export default expenceReducer;
