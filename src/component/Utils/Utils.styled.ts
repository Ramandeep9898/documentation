import { ReactNode } from "react";
import styled, { css } from "styled-components";

import { py, px, pl, pr, pt, pb, PaddingProps } from "./Padding.styled";

export type UtilProps = {
  children?: ReactNode;
} & PaddingProps;

export const utils = css<UtilProps>`
  ${py}
  ${px}
  ${pl}
  ${pr}
  ${pt}
  ${pb}
`;
