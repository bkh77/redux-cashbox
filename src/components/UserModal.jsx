import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const UserModal = ({ toggle, modal, handleSubmit, currentItem }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Foydalanuvchi {currentItem ? "o'zgartirish" : "qo'shish"}
        </ModalHeader>
        <ModalBody>
          <form id="form" onSubmit={handleSubmit}>
            <input
              defaultValue={currentItem.name}
              type="text"
              className="form-control mb-3"
              placeholder="User name..."
            />
            <input
              defaultValue={currentItem.phone}
              type="number"
              className="form-control"
              placeholder="Phone..."
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

export default UserModal;
