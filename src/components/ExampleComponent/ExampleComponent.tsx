/** Imports NPM */
import React, { memo } from "react";

/** Import locaux */
import * as Styled from "./ExampleComponent.style";
import { IExampleComponentProps } from "./interface";

/**
 * Composant servant d'exemple pour le react-starter
 */
export const ExampleComponent = memo(({ someProp }: IExampleComponentProps) => (
  <Styled.Wrapper>
    <Styled.Label>Valeur actuelle de la prop:</Styled.Label>
    <Styled.Value>{someProp.toString()}</Styled.Value>
  </Styled.Wrapper>
));
