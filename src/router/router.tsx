import { Switch, Route } from "react-router-dom";
import React from "react";

import * as Styled from "./router.style";
import { Home } from "./home/home";

export const Router = () => (
  <Styled.Wrapper>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </Styled.Wrapper>
);
