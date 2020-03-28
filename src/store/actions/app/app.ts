import { CLOSE_APP_MENU, OPEN_APP_MENU } from "../../actionTypes";
import { IAppReducerAction } from "../../reducers";

/** Action qui ferme le menu de l'application */
export const closeAppMenuAction = (): IAppReducerAction => ({
  type: CLOSE_APP_MENU
});

/** Action qui ouvre le menu de l'application */
export const openAppMenuAction = (): IAppReducerAction => ({
  type: OPEN_APP_MENU
});
