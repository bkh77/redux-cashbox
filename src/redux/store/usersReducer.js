import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [
      { id: 1, name: "Stive Jobs", phone: 990000102 },
      { id: 2, name: "Elon Musk", phone: 990000103 },
      { id: 3, name: "Jeff Bezos", phone: 990000104 },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    delUser: (state, action) => {
      const filtered = state.users.filter((i) => i.id !== action.payload);
      state.users = filtered;
    },
    editUser: (state, action) => {
      state.users.splice(
        state.users.findIndex((i) => i.id === action.payload.id),
        1,
        action.payload
      );
    },
  },
});

export const { addUser, delUser, editUser } = usersSlice.actions;
export default usersSlice.reducer;
