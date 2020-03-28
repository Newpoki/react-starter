import React from "react";

import * as Styled from "./global-style.style";
import { useApp } from "hooks";

/** Composant qui retourne un styled component surchargeant le style hors de l'app react
 * e.g: <body>, <html> etc */
export const GlobalStyle = () => {
  const { isMenuOpen } = useApp();

  return <Styled.Wrapper isMenuOpen={isMenuOpen} />;
};
