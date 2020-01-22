/** Imports NPM */
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

/** Imports locaux */
import { GlobalStyle, theme } from "theme";
import { ExampleContainer } from "containers";
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
