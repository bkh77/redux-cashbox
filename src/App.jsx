import React from "react";
import { Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Cashbox from "./pages/Cashbox";
import Expence from "./pages/Expence";
import Income from "./pages/Income";
import Reports from "./pages/Reports";
import Users from "./pages/Users";

function App() {
  return (
    <div className="container">
      <div className="row my-2">
          <NavTabs />
      </div>
      <div className="row">
        <div className="col">
          <Switch>
            <Route path={"/cashbox"} component={Cashbox} />
            <Route path={"/users"} component={Users} />
            <Route path={"/income"} component={Income} />
            <Route path={"/expence"} component={Expence} />
            <Route path={"/reports"} component={Reports} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
