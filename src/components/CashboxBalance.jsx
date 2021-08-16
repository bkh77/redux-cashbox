import React from "react";
import { connect } from "react-redux";

function CashboxBalance({ cashID, expence, income, cashbox }) {
  const incomeByCash = income.filter((i) => i.cashboxID === cashID);
  const allIncome = incomeByCash.reduce((sum, { amount }) => sum + amount, 0);
  const expenceByCash = expence.filter((i) => i.cashboxID === cashID);
  const allExpence = expenceByCash.reduce((sum, { amount }) => sum + amount, 0);
  return (
    <div className="card">
      <div className="card-header text-center">
        <h4>{cashbox.find((i) => i.id === cashID).name}</h4>
        <h5>Qoldiq: {allIncome - allExpence} uzs</h5>
      </div>
      <div className="card-body">
        <ul className="list-group">
          {incomeByCash.map((item) => (
            <li
              key={item.id}
              className="list-group-item text-success d-flex justify-content-between align-items-center"
            >
              <span>Kirim: {item.amount} uzs</span>{" "}
              <span style={{ color: "#888", fontSize: "12px" }}>
                {item.date}
              </span>
            </li>
          ))}
        </ul>
        <ul className="list-group">
          {expenceByCash.map((item) => (
            <li
              key={item.id}
              className="list-group-item text-danger d-flex justify-content-between align-items-center"
            >
              <span>Chiqim: {item.amount} uzs</span>{" "}
              <span style={{ color: "#888", fontSize: "12px" }}>
                {item.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default connect(
  ({
    cashboxReducer: { cashbox },
    incomeReducer: { income },
    expenceReducer: { expence },
  }) => ({ cashbox, income, expence })
)(CashboxBalance);
