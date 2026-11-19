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
  font-size: calc(var(--notation-height) * var(--stance-size));
  color: var(--stance-fill);
  margin: 0 calc(var(--notation-height) * var(--stance-margin));
  -webkit-text-stroke: calc(var(--stance-outline-width) * 1em)
    var(--stance-outline);
  paint-order: stroke fill;
  stroke-linejoin: round;
`;

export const LabelText = styled.span`
  ${notationText}
  font-family: var(--label-font);
  font-size: calc(var(--notation-height) * var(--label-size));
  font-weight: 700;
  color: var(--label-text);
  padding: 0 calc(var(--notation-height) * var(--label-padding));
  margin: 0
    calc(var(--notation-height) * (var(--label-margin) + var(--label-reach)));
  box-shadow:
    0 0 0 calc(var(--notation-height) * var(--label-border))
      var(--border-color),
    0 0 calc(var(--notation-height) * var(--label-glow))
      calc(var(--notation-height) * var(--label-border)) var(--border-color);
  background-color: var(--label-background);
  border-radius: calc(var(--notation-height) * var(--label-radius));
`;
