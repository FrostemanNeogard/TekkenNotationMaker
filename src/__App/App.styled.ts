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

  /* article {
    margin: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 90px;
    background-color: salmon;
    padding: 20px 80px;
    p {
      font-family: "Roboto", sans-serif;
      font-optical-sizing: auto;
      font-weight: 600;
      font-style: normal;
      height: 720px;
      padding: 50px 0;
      font-size: 720px;
      -webkit-text-stroke-width: 20px;
      -webkit-text-stroke-color: black;
    }
  } */
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

  button,
  select {
    filter: drop-shadow(#0008 3px 3px 5px);
    border: none;
    padding: 1rem;
  }

  button {
    width: 100%;
    width: 100%;
    font-size: 2rem;

    &:hover {
      cursor: pointer;
      filter: brightness(80%);
    }
  }
`;

export const CharacterDropdown = styled.select``;

export const SaveButton = styled.button`
  background-color: #3d3;
`;

export const BackButton = styled.button`
  background-color: #dd3;
`;

export const ResetButton = styled.button`
  background-color: #d33;
`;

export const UndoButton = styled.button``;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 100%;
  border-right: 1px solid black;
`;

export const HorizontalDivider = styled.div`
  height: 1px;
  width: 100%;
  border-bottom: 1px solid black;
  margin: 1rem 0;
`;
