import * as types from "../action/actionTypes";

function usersReducer(
  state = {
    users: [
      { id: 1, name: "Stive Jobs", phone: 990000102 },
      { id: 2, name: "Elon Musk", phone: 990000103 },
      { id: 3, name: "Jeff Bezos", phone: 990000104 },
    ],
  },
  action
) {
  switch (action.type) {
    case types.ADD_USERS:
      const users = [...state.users];
      users.push(action.payload);
      state = { ...state, users };
      break;
    case types.DEL_USERS:
      const filtered = state.users.filter((i) => i.id !== action.payload);
      state = { ...state, users: filtered };
      break;
    case types.EDIT_USERS:
      const clone = [...state.users];
      clone.splice(
        clone.findIndex((i) => i.id === action.payload.id),
        1,
        action.payload
      );
      state = { ...state, users: clone };
      break;
    default:
  }
  return state;
}

export default usersReducer;
