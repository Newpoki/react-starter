/** Imports NPM */
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

/** Imports locaux */
import { IExampleReducer, exampleReducer } from "./reducers";

/** Interface du store redux */
export interface IReduxState {
  exampleReducer: IExampleReducer;
}

export const rootReducer = combineReducers({
  exampleReducer
});

export const store = createStore(rootReducer, composeWithDevTools());
