/** Imports NPM */

/** Imports locaux */
import { EXAMPLE_REDUCER_TYPE } from "store/actionTypes";
import { IExampleReducerAction, IExampleReducer } from "./interface";

/** State initial du reducer ExampleReducer */
export const exampleReducerInitialState = {
  someConst: true
};

export const exampleReducer = (
  state: IExampleReducer = exampleReducerInitialState,
  { type, payload }: IExampleReducerAction
) => {
  switch (type) {
    case EXAMPLE_REDUCER_TYPE:
      return { ...state, someConst: payload };

    default:
      return state;
  }
};
