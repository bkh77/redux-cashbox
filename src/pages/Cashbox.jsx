import React, { useState } from "react";
import { connect } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CashModal from "../components/CashModal";
import { addCashbox, delCashbox, editCashbox } from "../redux/action/action";

function Cashbox({ cashbox, addCashbox, delCashbox, editCashbox }) {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;
    if (currentItem) {
        editCashbox({
            id:currentItem.id,
            name,
        })
        setCurrentItem('')
        toggle()
    } else {
      if (name) {
        addCashbox({
          id: cashbox.length + 1,
          name,
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
            <h3>Kassa</h3>
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
                  <th>Nomi</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cashbox.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <EditIcon
                        onClick={() => handleEdit(item)}
                        className="editIcon"
                      />{" "}
                      <DeleteForeverIcon
                        onClick={() => delCashbox(item.id)}
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
      <CashModal
        modal={modal}
        toggle={toggle}
        cashbox={cashbox}
        handleSubmit={handleSubmit}
        currentItem={currentItem}
      />
    </div>
  );
}

export default connect(
  ({ cashboxReducer }) => ({
    cashbox: cashboxReducer.cashbox,
  }),
  { addCashbox, delCashbox, editCashbox }
)(Cashbox);
