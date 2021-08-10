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

export function addUsers(obj) {
  return {
    type: types.ADD_USERS,
    payload: obj,
  };
}

export function delUsers(id) {
  return {
    type: types.DEL_USERS,
    payload: id,
  };
}

export function editUsers(obj) {
  return {
    type: types.EDIT_USERS,
    payload: obj,
  };
}

export function addIncome(obj) {
  return {
    type: types.ADD_INCOME,
    payload: obj,
  };
}

export function delIncome(id) {
  return {
    type: types.DEL_INCOME,
    payload: id,
  };
}

export function editIncome(obj) {
  return {
    type: types.EDIT_INCOME,
    payload: obj,
  };
}

export function addExpence(obj) {
  return {
    type: types.ADD_EXPENCE,
    payload: obj,
  };
}

export function delExpence(id) {
  return {
    type: types.DEL_EXPENCE,
    payload: id,
  };
}

export function editExpence(obj) {
  return {
    type: types.EDIT_EXPENCE,
    payload: obj,
  };
}
