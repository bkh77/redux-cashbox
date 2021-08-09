import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

function NavTabs() {
  const [select, setSelect] = useState(0);

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <Link to={"/cashbox"} onClick={() => setSelect(1)}>
            <NavLink active={select === 1}>Kassa</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={"/users"} onClick={() => setSelect(2)}>
            <NavLink active={select === 2}>Foydalanuvchilar</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={"/income"} onClick={() => setSelect(3)}>
            <NavLink active={select === 3}>Kirim</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={"/expence"} onClick={() => setSelect(4)}>
            <NavLink active={select === 4}>Chiqim</NavLink>
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavTabs;
