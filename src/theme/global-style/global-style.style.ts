import { createGlobalStyle } from "styled-components";

import { IGlobalStyleProps } from "./gloabal-style.interface";

/**
 * StyledComponent qui permet de styler
 * un élément n'étant pas un styledComponent
 * (body, .App, etc)
 */
export const Wrapper = createGlobalStyle<IGlobalStyleProps>`
  body {
    margin: 0;
    overflow: ${({ isMenuOpen }) => (isMenuOpen ? "hidden" : "auto")}
  }

  body * {
    box-sizing: border-box
  }

  .App {
    width: 100%;
    min-height: 100vh;
    font-family: "lato";
    background-color: rgb(51, 51, 51);
  }
`;
