import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/login";
import Dashboard from "../screens/dashboard";
import Csv from "../screens/csv";
import Ads from "../screens/ads";
import Json from "../screens/json";
function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/csv" component={Csv} />
      <Route path="/ads" component={Ads} />
      <Route path="/json" component={Json} />
    </Switch>
  );
}

export default Router;
