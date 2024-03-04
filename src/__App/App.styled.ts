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
  padding: 4rem;
  display: grid;
  height: min-content;
  row-gap: 1rem;

  h1 {
    font-size: 3rem;
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
  display: grid;
  grid-template-columns: 70% auto 20%;
  column-gap: 3rem;
  justify-content: center;
  padding: 2rem 10vmin;
  border: 1px solid black;

  align-self: flex-end;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const NotationButtons = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const EditorNav = styled.nav`
  display: grid;
  row-gap: 1rem;

  button {
    width: 100%;
    border: none;
    width: 100%;
    padding: 1rem;
    font-size: 2rem;
    filter: drop-shadow(#0008 3px 3px 5px);

    &:hover {
      cursor: pointer;
      filter: brightness(80%);
    }
  }
`;

export const SaveButton = styled.button`
  background: linear-gradient(to bottom right, #0d0, #0d0);
`;

export const BackButton = styled.button`
  background: linear-gradient(to bottom right, #dd0, #dd0);
`;

export const ResetButton = styled.button`
  background: linear-gradient(to bottom right, #d00, #d00);
`;

export const UndoButton = styled.button``;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 100%;

  border-right: 1px solid black;
`;
