import React from "react";
import { Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Cashbox from "./pages/Cashbox";
import Expence from "./pages/Expence";
import Income from "./pages/Income";
import Users from "./pages/Users";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col my-2">
          <NavTabs />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Switch>
            <Route path={"/cashbox"} component={Cashbox} />
            <Route path={"/users"} component={Users} />
            <Route path={"/income"} component={Income} />
            <Route path={"/expence"} component={Expence} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
