import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import cashboxReducer from "./redux/reducers/cashboxReducer";
import usersReducer from "./redux/reducers/usersReducer";
import incomeReducer from "./redux/reducers/incomeReducer";
import expenceReducer from "./redux/reducers/expenceReducer";

export default createStore(
  combineReducers({
    cashboxReducer,
    usersReducer,
    incomeReducer,
    expenceReducer,
  }),
  applyMiddleware(logger)
);
