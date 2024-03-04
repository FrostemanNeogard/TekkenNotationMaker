import styled from "styled-components";

export const App = styled.div`
  overflow: hidden !important;
`;

export const NotationButton = styled.img`
  width: 100px;

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;

export const PreviewContainer = styled.div`
  padding: 2rem;
  border: 1px solid black;
  background-color: red;

  div {
    flex-wrap: wrap;
    max-width: 100%;
    display: flex;
    width: max-content;

    img {
      height: 50px;
    }
  }
`;

export const NotationOutput = styled.img`
  height: 500px;
`;

export const NotationContainer = styled.div`
  padding: 2rem;
  border: 1px solid black;
  background-color: red;

  width: max-content;
  position: absolute;
  transform: translateX(2000px);

  div {
    display: flex;
    width: max-content;
  }
`;

export const EditorUI = styled.div`
  background-color: gray;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  border: 1px solid black;
  flex-wrap: wrap;

  button {
    width: 100%;
    padding: 1rem;
    margin: 2rem 20% 0;
  }
`;
