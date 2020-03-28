import React from "react";

import { IImageProps } from "./image.interface";
import * as Styled from "./image.style";

/** Composant qui affiche une image */
export const Image = ({ alt, src }: IImageProps) => <Styled.Wrapper src={src} alt={alt} />;
