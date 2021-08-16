import React from "react";
import { connect } from "react-redux";
import UserItem from "../components/UserItem";

function UsersReport({ users }) {
  return (
    <div>
      <h3 className="text-center my-3">Foydalanuvchilar bo'yicha xisobot</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Kassa | Balance</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <UserItem key={item.id} item={item}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default connect(({ usersReducer: { users } }) => ({ users }))(
  UsersReport
);
