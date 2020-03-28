import { OPEN_APP_MENU, CLOSE_APP_MENU } from "../../actionTypes";

/** Interface d'une action du reducer appReducer */
export interface IAppReducerAction {
  type: typeof OPEN_APP_MENU | typeof CLOSE_APP_MENU;
}

/** Interface du state du reducer appReducer */
export interface IAppReducerState {
  /** Determine l'état d'ouverture du menu général de l'application */
  isMenuOpen: boolean;
}
