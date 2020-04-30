import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Imports próprios
import Logon from "./pages/Logon";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
      </Switch>
    </BrowserRouter>
  );
}
