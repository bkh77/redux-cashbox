import * as types from "../action/actionTypes";

function cashboxReducer(
  state = {
    cashbox: [
      { id: 1, name: "kassa1" },
      { id: 2, name: "kassa2" },
      { id: 3, name: "kassa3" },
    ],
  },
  action
) {
  switch (action.type) {
    case types.ADD_CASHBOX:
      const cashbox = [...state.cashbox];
      cashbox.push(action.payload);
      state = { ...state, cashbox };
      break;
    case types.DEL_CASH:
      const filtered = state.cashbox.filter((i) => i.id !== action.payload);
      state = { ...state, cashbox: filtered };
      break;
    case types.EDIT_CASHBOX:
      const clone = [...state.cashbox];
      clone.splice(
        clone.findIndex((i) => i.id === action.payload.id),
        1,
        action.payload
      );
      state = { ...state, cashbox: clone };
      break;
    default:
  }
  return state;
}

export default cashboxReducer;
