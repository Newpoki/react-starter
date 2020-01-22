import { createGlobalStyle } from "styled-components";

/**
 * StyledComponent qui permet de styliser
 * un élément en dehors de l'app react
 * (body, .App, etc)
 */
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  body * {
    box-sizing: border-box
  }

  .App {
    width: 100%;
    min-height: 100vh;
    font-family: "lato";
  }
`;
