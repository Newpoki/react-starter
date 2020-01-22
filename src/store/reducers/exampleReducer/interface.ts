/** Imports NPM */

/** Imports locaux */
import { EXAMPLE_REDUCER_TYPE } from "store/actionTypes";

/** Interface du reducer ExampleReducer */
export interface IExampleReducer {
  someConst: boolean;
}

/** Type du payload d'une action du reducer ExampleReducer */
export type IExampleReducerPayload = boolean;

/** Interface d'une action du reducer ExampleReducer */
export interface IExampleReducerAction {
  type: typeof EXAMPLE_REDUCER_TYPE;
  payload: IExampleReducerPayload;
}
