import * as types from "./actionTypes";

export function addCashbox(obj) {
  return {
    type: types.ADD_CASHBOX,
    payload: obj,
  };
}

export function delCashbox(id) {
  return {
    type: types.DEL_CASH,
    payload: id,
  };
}

export function editCashbox(obj) {
  return {
    type: types.EDIT_CASHBOX,
    payload: obj,
  };
}
