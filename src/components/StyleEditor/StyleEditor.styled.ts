import styled from "styled-components";
import { notationHeight } from "../NotationText/NotationText.styled";

export const StyleEditor = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;

  && select,
  && input[type="text"] {
    padding: 0.6rem;
    font-size: 1rem;
  }
`;

export const Row = styled.div`
  && {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  && > * {
    flex: 1;
  }
`;

export const Panel = styled.div`
  && {
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;
    padding: 0.75rem;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
  }

  && label {
    padding: 0;
    font-size: 0.85rem;
  }
`;

// Fields sit two to a row so the panel stays short; groups are separated by a
// thin rule instead of headings.
export const Group = styled.div`
  && {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid #ffffff1f;
  }
`;

export const Actions = styled.div`
  && {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem;
    padding-top: 0.75rem;
    border-top: 1px solid #ffffff1f;
  }
`;

export const Field = styled.div`
  && {
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
    min-width: 0;
  }

  && input[type="color"] {
    width: 100%;
    height: 2.5rem;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }

  && input[type="range"] {
    padding: 0;
    width: 100%;
    min-height: 2rem;
  }
`;

export const CheckField = styled.div<{ $wide?: boolean }>`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    min-height: 2rem;
    grid-column: ${(props) => (props.$wide ? "1 / -1" : "auto")};
  }

  && input[type="checkbox"] {
    flex: none;
    width: 1.2rem;
    height: 1.2rem;
    padding: 0;
    cursor: pointer;
  }

  && label {
    cursor: pointer;
  }
`;

export const Sample = styled.div`
  ${notationHeight("2.5rem")}

  && {
    position: sticky;
    top: calc(var(--header-height, 0px) + 0.5rem);
    z-index: 5;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    box-shadow: 0 4px 12px #0008;
  }

  && img {
    height: var(--notation-height);
  }
`;

export const Button = styled.button<{ $danger?: boolean; $primary?: boolean }>`
  padding: 0.7rem 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 0.95rem;
  background-color: ${(props) =>
    props.$danger
      ? "#d33"
      : props.$primary
        ? props.theme.colors.teal
        : "#ffffffdd"};
  color: ${(props) => (props.$danger ? "white" : "black")};

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;
