import styled from "styled-components";

export const App = styled.div`
  overflow: hidden !important;

  background-color: black;
  color: white;

  min-height: 100vh;
  display: grid;
  column-gap: 2rem;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const NotationButton = styled.img`
  height: 75px;

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;

export const PreviewContainer = styled.div`
  padding: 2rem;
  display: inherit;

  h1 {
    font-size: 4rem;
    text-align: center;
  }

  div {
    border: 5px solid gray;
    background-color: darkgray;
    border-radius: 10px;
    padding: 1rem;
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: min-content;
    min-height: 50px;

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

  width: max-content;
  position: absolute;
  transform: translateX(300vw);
  z-index: -90000;

  div {
    display: flex;
    width: max-content;
  }
`;

export const EditorUI = styled.div`
  background-color: gray;
  max-width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  border: 1px solid black;
  flex-wrap: wrap;

  align-self: flex-end;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  button {
    width: 100%;
    padding: 1rem;
    margin: 2rem 20% 0;
  }
`;
