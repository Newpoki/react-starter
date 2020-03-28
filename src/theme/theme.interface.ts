import { IGetSpacingInPixels } from "./getSpacingInPixels";

/** Interface du theme */
export interface IThemeProps {
  colors: {
    black: string;
    grey: string;
    light200: string;
    light500: string;
    light600: string;
    light600Transparent: string;
    light900: string;
    teal200: string;
    teal600: string;
    teal800: string;
    white: string;
  };
  constants: {
    headerHeight: string;
    linkActiveClassName: string;
  };
  fontFamilies: {
    oswald: string;
    lato: string;
  };
  spacing: IGetSpacingInPixels;
}
