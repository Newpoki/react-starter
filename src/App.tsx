import React from "react";

import { ExampleComponent } from "components";
import { GlobalStyle, theme } from "theme";
import { ThemeProvider } from "styled-components";

export const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme} />
      <GlobalStyle />
      <ExampleComponent />
    </div>
  );
};
