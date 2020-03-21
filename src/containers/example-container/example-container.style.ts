/** Imporrts NPM */
import styled from "styled-components";

/** Imports locaux */
import { theme } from "theme";
import { Styles } from "components";

/** Wrapper du container <ExampleContainer /> */
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  width: 100%;

  ${Styles.StyledExampleComponent.Wrapper} {
    background-color: ${theme.colors.red500};
  }
`;
