import React from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CashModal = ({ toggle, modal, handleSubmit, currentItem }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Kassa {currentItem ? "o'zgartirish" : "qo'shish"}
        </ModalHeader>
        <ModalBody>
          <form id="form" onSubmit={handleSubmit}>
            <input
              defaultValue={currentItem.name}
              type="text"
              className="form-control"
              placeholder="kassa nomi..."
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

export default connect(null)(CashModal);
