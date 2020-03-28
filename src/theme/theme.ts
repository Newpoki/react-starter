import { getSpacingInPixels } from "./getSpacingInPixels";
import { IThemeProps } from "./theme.interface";

export const theme: IThemeProps = {
  colors: {
    black: "rgb(0,0,0)",
    grey: "grey",
    light200: "rgba(0, 0, 0, 0.6)",
    light500: "rgb(55, 58, 71)",
    light600: "rgb(51,51,51)",
    light600Transparent: "rgba(51,51,51, 0.89)",
    light900: "rgba(0,0,0, 0.89)",
    teal200: "rgb(73, 232, 216)",
    teal600: "rgb(37, 146, 135)",
    teal800: "rgb(23, 85, 79)",
    white: "#fff"
  },
  constants: {
    headerHeight: "80px",
    linkActiveClassName: "active-link"
  },
  fontFamilies: {
    oswald: "oswald",
    lato: "lato"
  },
  spacing: getSpacingInPixels
};
