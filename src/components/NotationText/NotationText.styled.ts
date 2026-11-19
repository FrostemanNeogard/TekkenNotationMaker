import styled, { css } from "styled-components";

export const notationHeight = (height: string) => css`
  --notation-height: ${height};
`;

const notationText = css`
  display: inline-block;
  vertical-align: bottom;
  height: var(--notation-height);
  line-height: var(--notation-height);
  font-weight: 900;
  white-space: nowrap;
`;

export const StanceText = styled.span`
  ${notationText}
  font-family: var(--stance-font);
  font-size: var(--notation-height);
  color: var(--stance-fill);
  padding: 0 0.1em;
  -webkit-text-stroke: calc(var(--stance-outline-width) * 1em)
    var(--stance-outline);
  paint-order: stroke fill;
  stroke-linejoin: round;
`;

export const LabelText = styled.span`
  ${notationText}
  font-family: var(--label-font);
  font-size: calc(var(--notation-height) * 0.8);
  font-weight: 700;
  color: var(--label-text);
  padding: 0 calc(var(--notation-height) * 0.12);
  background-color: var(--label-background);
  border-radius: calc(var(--notation-height) * var(--label-radius));
`;
