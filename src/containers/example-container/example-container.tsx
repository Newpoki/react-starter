/** Imports NPM */
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

/** Improts locaux */
import * as Styled from "./example-container.style";
import { ExampleComponent } from "components";
import { exampleAction } from "store/actions";
import { IReduxState } from "store";

export const ExampleContainer = () => {
  const dispatch = useDispatch();

  const { someConst } = useSelector(({ exampleReducer }: IReduxState) => exampleReducer);

  /** Callback éxécutée au click du boutton */
  const handleClick = useCallback(() => {
    dispatch(exampleAction(!someConst));
  }, [dispatch, someConst]);

  return (
    <Styled.Wrapper>
      <ExampleComponent someProp={someConst} />
      <button type="button" onClick={handleClick}>
        Set button
      </button>
    </Styled.Wrapper>
  );
};
