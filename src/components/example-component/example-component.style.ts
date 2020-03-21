/** Imports NPM */
import styled from "styled-components";

/** Imports locaux */

/** Wrapper du composant <ExampleComponent /> */
export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: "lato";
`;

/** Styled component qui affiche le label */
export const Label = styled.span`
  font-size: 2rem;
`;

/** Styled component qui affiche la value */
export const Value = styled.span`
  font-weight: bold;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.red500};
`;
