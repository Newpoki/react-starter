import React from "react";
import { HashRouter } from "react-router-dom";

import { GlobalStyle } from "theme";
import { Router } from "router";

export const App = () => (
  <div className="App">
    <GlobalStyle />
    <HashRouter>
      <Router />
    </HashRouter>
  </div>
);
