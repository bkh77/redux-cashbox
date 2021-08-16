import React from "react";
import { connect } from "react-redux";

function UserItem({ item, income, expence, cashbox }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td>
        {cashbox.map((c) => (
          <p key={c.id}>
            {c.name} :{" "}
            {income
              .filter((i) => i.userID === item.id && c.id === i.cashboxID)
              .reduce((sum, { amount }) => sum + amount, 0) -
              expence
                .filter((i) => i.userID === item.id && c.id === i.cashboxID)
                .reduce((sum, { amount }) => sum + amount, 0)}{" "}
            uzs
          </p>
        ))}
      </td>
    </tr>
  );
}

export default connect(
  ({
    incomeReducer: { income },
    expenceReducer: { expence },
    cashboxReducer: { cashbox },
  }) => ({
    income,
    expence,
    cashbox,
  })
)(UserItem);
