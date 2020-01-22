/** Imports NPM */

/** Imports locaux */
import { EXAMPLE_REDUCER_TYPE } from "store/actionTypes";
import { IExampleReducerPayload } from "store/reducers";

/**
 * Action du reducer ExampleReducer qui permet de mettre à jour la propriété someConst
 * @param payload - boolean - Nouvelle valeur de la propriété someConst
 */
export const exampleAction = (payload: IExampleReducerPayload) => ({
  type: EXAMPLE_REDUCER_TYPE,
  payload
});
