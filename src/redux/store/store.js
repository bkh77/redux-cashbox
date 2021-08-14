import cashboxReducer from "./cashboxReducer";
import usersReducer from "./usersReducer";
import incomeReducer from "./incomeReducer";
import expenceReducer from "./expenceReducer";
import { configureStore } from "@reduxjs/toolkit";



export default  configureStore({
  reducer:{
    cashboxReducer,
    usersReducer,
    incomeReducer,
    expenceReducer,
  }
})
