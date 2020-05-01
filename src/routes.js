import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Imports próprios
import Logon from "./pages/Logon";
import Confirm from "./pages/Confirm"
import Detail from "./pages/Detail"

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/confirma" component={Confirm} />
        <Route path="/portal" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}
