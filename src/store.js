import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import cashboxReducer from "./reducers/cashboxReducer";

export default createStore(
  combineReducers({
    cashboxReducer,
  }),
  applyMiddleware(logger)
);
