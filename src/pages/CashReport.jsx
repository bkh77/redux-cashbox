import React from "react";
import { connect } from "react-redux";
import CashboxBalance from "../components/CashboxBalance";

function CashReport({ cashbox }) {
  return (
    <div className="row">
      <h3 className="text-center my-3">Kassalar bo'yicha xisobotlar </h3>
      {cashbox.map((item) => (
        <div key={item.id} className="col-md-4 my-2">
          <CashboxBalance cashID={item.id} />
        </div>
      ))}
    </div>
  );
}

export default connect(({ cashboxReducer: { cashbox } }) => ({ cashbox }))(
  CashReport
);
