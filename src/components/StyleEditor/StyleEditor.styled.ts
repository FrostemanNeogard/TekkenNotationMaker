import styled from "styled-components";
import { notationHeight } from "../NotationText/NotationText.styled";

export const StyleEditor = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;

  && select,
  && input[type="text"] {
    padding: 0.75rem;
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
    padding: 1rem;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
  }

  && label {
    padding: 0;
    font-size: 0.9rem;
  }
`;

export const Field = styled.div`
  && {
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
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
  }
`;

export const CheckField = styled.div`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  && input[type="checkbox"] {
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 5px;
  }

  && img {
    height: var(--notation-height);
  }
`;

export const Button = styled.button<{ $danger?: boolean }>`
  padding: 0.75rem;
  border: none;
  font-size: 1rem;
  background-color: ${(props) => (props.$danger ? "#d33" : "#ffffffdd")};
  color: ${(props) => (props.$danger ? "white" : "black")};

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;
