import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import CashReport from "./CashReport";
import PizzaReport from "./PizzaReport";
import UsersReport from "./UsersReport";

function Reports() {
  return (
    <div className="card p-3 my-2">
      <div className="row">
        <div className="col">
          <Link to="/reports/cash-report">
            <button className="btn btn-outline-primary w-100">
              Kassalar bo'yicha xisobot
            </button>
          </Link>
        </div>
        <div className="col">
          <Link to="/reports/users-report">
            <button className="btn btn-outline-primary w-100" >
              Foydalanuvchilar bo'yicha xisobot
            </button>
          </Link>
        </div>
        <div className="col">
          <Link to="/reports/users-chart">
            <button className="btn btn-outline-primary w-100" >
              Foydalanuvchilar bo'yicha pitsa diogramma
            </button>
          </Link>
        </div>
        <div className="col-md-12">
          <Switch>
            <Route path="/reports/cash-report" component={CashReport} />
            <Route path="/reports/users-report" component={UsersReport} />
            <Route path="/reports/users-chart" component={PizzaReport} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Reports;
