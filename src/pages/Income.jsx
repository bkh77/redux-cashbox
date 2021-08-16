import React, { useState } from "react";
import { connect } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { addIncome, delIncome, editIncome } from "../redux/store/incomeReducer";
import IncomeModal from "../components/IncomeModal";

function Income({ income, addIncome, delIncome, editIncome, cashbox, users }) {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const userID = parseFloat(e.target[0].value);
    const cashboxID = parseFloat(e.target[1].value);
    const amount = parseFloat(e.target[2].value);
    const date = e.target[3].value;
    if (currentItem) {
      editIncome({
        id: currentItem.id,
        userID,
        cashboxID,
        amount,
        date,
      });
      setCurrentItem("");
      toggle();
    } else {
      if (userID && cashboxID && amount && date) {
        addIncome({
          id: income.length + 1,
          userID,
          cashboxID,
          amount,
          date,
        });
        toggle();
      }
    }
  }

  function handleEdit(item) {
    toggle();
    setCurrentItem(item);
  }

  return (
    <div>
      <div className="card my-2 p-3">
        <div className="row">
          <div className="col text-center">
            <h3>Kirim</h3>
          </div>
          <div className="col-md-2">
            <button onClick={toggle} className="btn btn-outline-success w-100">
              + Add
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Foydalanuvchi</th>
                  <th>Miqdori</th>
                  <th>Kassa</th>
                  <th>Vaqt</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {income.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{users.find((i) => i.id === item.userID).name}</td>
                    <td>{item.amount}</td>
                    <td>{cashbox.find((i) => i.id === item.cashboxID).name}</td>
                    <td>{item.date}</td>
                    <td>
                      <EditIcon
                        onClick={() => handleEdit(item)}
                        className="editIcon"
                      />{" "}
                      <DeleteForeverIcon
                        onClick={() => delIncome(item.id)}
                        className="delIcon"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <IncomeModal
        modal={modal}
        toggle={toggle}
        handleSubmit={handleSubmit}
        currentItem={currentItem}
      />
    </div>
  );
}

export default connect(
  ({
    incomeReducer: { income },
    cashboxReducer: { cashbox },
    usersReducer: { users },
  }) => ({
    income,
    cashbox,
    users,
  }),
  { addIncome, delIncome, editIncome }
)(Income);
