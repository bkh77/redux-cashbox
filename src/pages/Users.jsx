import React, { useState } from "react";
import { connect } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import UserModal from "../components/UserModal";
import { addUser, delUser, editUser } from "../redux/store/usersReducer";

function Users({ users, addUser, delUser, editUser }) {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const phone = e.target[1].value;
    if (currentItem) {
      editUser({
        id: currentItem.id,
        name,
        phone,
      });
      setCurrentItem("");
      toggle();
    } else {
      if (name) {
        addUser({
          id: users.length + 1,
          name,
          phone,
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
            <h3>Foydalanuvchilar</h3>
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
                  <th>Telefon</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>
                      <EditIcon
                        onClick={() => handleEdit(item)}
                        className="editIcon"
                      />{" "}
                      <DeleteForeverIcon
                        onClick={() => delUser(item.id)}
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
      <UserModal
        modal={modal}
        toggle={toggle}
        users={users}
        handleSubmit={handleSubmit}
        currentItem={currentItem}
      />
    </div>
  );
}

export default connect(
  ({ usersReducer: { users } }) => ({
    users,
  }),
  { addUser, delUser, editUser }
)(Users);
