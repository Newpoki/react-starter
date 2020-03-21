/** Imports NPM */

/** Improts locaux */
import { EXAMPLE_REDUCER_TYPE } from "store/actionTypes";
import { exampleAction } from "./example-reducer";
import { IExampleReducerPayload, IExampleReducerAction } from "store/reducers";

describe("ExampleReducerActions", () => {
  describe("exampleAction", () => {
    it('should return the action that update "someConst" in exampleReducer', () => {
      const payload: IExampleReducerPayload = false;

      const expected: IExampleReducerAction = {
        type: EXAMPLE_REDUCER_TYPE,
        payload
      };

      expect(exampleAction(payload)).toEqual(expected);
    });
  });
});
