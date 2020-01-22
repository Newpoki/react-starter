import React from "react";

import { GlobalStyle, theme } from "theme";
import { ThemeProvider } from "styled-components";
import { ExampleContainer } from "containers";
import { Provider } from "react-redux";
import { store } from "store";

export const App = () => {
  return (
    <div className="App" style={{ display: "flex" }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <ExampleContainer />
        </Provider>
      </ThemeProvider>
    </div>
  );
};
