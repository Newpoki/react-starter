/** Imporrts NPM */
import styled from "styled-components";

/** Imports locaux */
import * as StyledExampleComponent from "components/ExampleComponent/ExampleComponent.style";

/** Wrapper du container <ExampleContainer /> */
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  width: 100%;

  ${StyledExampleComponent.Wrapper} {
  }
`;
