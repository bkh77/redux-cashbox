import React from "react";
import { connect } from "react-redux";
import PizzaChart from "../components/PizzaChart";

function Pizzareport({ income, expence }) {
  return (
    <>
      <h3 className="text-center my-3">Foydalanuvchilar bo'yicha kirim-chiqim</h3>

      <div className="row">
        <div className="col">
          <PizzaChart title="Kirim" data={income} />
        </div>
        <div className="col">
          <PizzaChart title="Chiqim" data={expence} />
        </div>
      </div>
    </>
  );
}

export default connect(
  ({ incomeReducer: { income }, expenceReducer: { expence } }) => ({
    income,
    expence,
  })
)(Pizzareport);
