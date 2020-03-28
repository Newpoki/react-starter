import { OPEN_APP_MENU, CLOSE_APP_MENU } from "../../actionTypes";
import { IAppReducerState, IAppReducerAction } from "./app.interface";

export const appReducerInitialState: IAppReducerState = {
  isMenuOpen: false
};

export const appReducer = (
  state = appReducerInitialState,
  { type }: IAppReducerAction
): IAppReducerState => {
  switch (type) {
    case OPEN_APP_MENU:
      return { ...state, isMenuOpen: true };

    case CLOSE_APP_MENU:
      return { ...state, isMenuOpen: false };

    default:
      return state;
  }
};
