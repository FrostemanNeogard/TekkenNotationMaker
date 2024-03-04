import styled from "styled-components";

export const NotationButton = styled.img`
  width: 100px;

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;

export const NotationOutput = styled.img`
  width: 75px;
`;

export const NotationContainer = styled.div`
  padding: 2rem;
  border: 1px solid black;
  background-color: red;

  div {
    display: flex;
    width: max-content;
  }
`;

export const EditorUI = styled.div`
  background-color: gray;
  width: 50%;
  display: flex;
  padding: 2rem;
  border: 1px solid black;
  flex-wrap: wrap;

  button {
    width: 100%;
    padding: 1rem;
    margin: 2rem 20% 0;
  }
`;
