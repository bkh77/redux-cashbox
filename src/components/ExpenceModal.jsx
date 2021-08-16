import React from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ExpenceModal = ({
  toggle,
  modal,
  handleSubmit,
  currentItem,
  cashbox,
  users,
}) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Chiqim {currentItem ? "o'zgartirish" : "qo'shish"}
        </ModalHeader>
        <ModalBody>
          <form id="form" onSubmit={handleSubmit}>
            <select
              className="form-select mb-3"
              defaultValue={currentItem.userID}
            >
              {users.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <select
              className="form-select mb-3"
              defaultValue={currentItem.cashboxID}
            >
              {cashbox.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Miqdori..."
              defaultValue={currentItem.amount}
            />
            <input
              className="form-control"
              type="datetime-local"
              defaultValue={currentItem.date}
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Chiqish
          </Button>{" "}
          <Button form="form" color="primary" type="submit">
            Saqlash
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default connect(({ usersReducer, cashboxReducer }) => ({
  users: usersReducer.users,
  cashbox: cashboxReducer.cashbox,
}))(ExpenceModal);
