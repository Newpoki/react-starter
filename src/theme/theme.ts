import "styled-components";
import { DefaultTheme } from "styled-components";

/** Interface de la partie Size du theme */
interface IThemeSpacing {
  xxs: "4px";
  xs: "8px";
  s: "16px";
  m: "24px";
  l: "32px";
  xl: "40px";
  xxl: "48px";
}

/**
 * Surcharge de l'interface DefaultTheme de Styled component
 */
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      red500: string;
    };
    constants: {};
    spacing: IThemeSpacing;
  }
}

export const theme: DefaultTheme = {
  colors: {
    black: "rgba(0,0,0, .79)",
    red500: "red"
  },
  constants: {},
  spacing: {
    xxs: "4px",
    xs: "8px",
    s: "16px",
    m: "24px",
    l: "32px",
    xl: "40px",
    xxl: "48px"
  }
};
