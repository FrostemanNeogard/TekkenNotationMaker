import styled from "styled-components";

export const App = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  font-family: "Roboto", sans-serif;
  color: white;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto auto min-content min-content;
  column-gap: 2rem;
`;

export const NotationButton = styled.img`
  height: 75px;

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;

export const PreviewContainer = styled.div`
  padding: 2rem 4rem;
  display: grid;
  height: min-content;
  row-gap: 1rem;

  h1 {
    font-size: 3rem;
    text-align: center;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 0;

    h1 {
      display: none;
    }
  }
`;

export const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PreviewContent = styled.div`
  border: 5px solid gray;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 1rem;
  max-width: 100% !important;
  height: min-content;
  min-height: 50px;

  div {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    width: 100%;
    flex-wrap: wrap;
  }

  p {
    display: inline;
    font-size: 2.3rem;
    width: min-content;
    justify-self: center;
    margin: 1rem 0;
    white-space: nowrap;

    &:first-child {
      grid-row: 1;
      grid-column: 1 / -1;
      margin-top: 0;
    }

    &:nth-child(3) {
      grid-row: 3;
      grid-column: 1 / -1;
      margin-bottom: 0 !important;
    }
  }

  img {
    height: 50px;
    width: auto;
  }
`;

export const NotationOutput = styled.img`
  height: 500px;
`;

export const NotationContainer = styled.div<{ $qualityMultiplier: number }>`
  overflow: hidden;
  width: max-content;
  position: absolute;
  transform: translateY(-300vw);
  z-index: -90000;

  div {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    width: 100%;
    flex-wrap: wrap;

    p {
      display: inline;
      font-size: calc(500px * ${(props) => props.$qualityMultiplier});
      width: min-content;
      justify-self: center;
      margin: calc(100px * ${(props) => props.$qualityMultiplier}) 0;
      white-space: nowrap;

      &:first-child {
        grid-row: 1;
        grid-column: 1 / -1;
        margin-top: 0;
      }

      &:nth-child(3) {
        grid-row: 3;
        grid-column: 1 / -1;
        margin-bottom: 0;
      }
    }

    img {
      width: auto;
      height: calc(500px * ${(props) => props.$qualityMultiplier});
    }
  }

  /* article {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 90px;
    background-color: salmon;
    padding: 20px 80px;
    p {
      font-optical-sizing: auto;
      font-weight: 600;
      font-style: normal;
      height: 720px;
      padding: 0;
      margin: 0;
      font-size: 720px;
      -webkit-text-stroke-width: 40px;
      -webkit-text-stroke-color: black;
      paint-order: stroke fill;
    }
  } */
`;

export const EditorUI = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  display: grid;
  grid-template-columns: 20% auto 20%;
  column-gap: 1rem;
  justify-content: center;
  padding: 2vmin 4vmin;

  align-self: flex-end;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    grid-template-rows: auto auto auto;
  }
`;

export const NotationButtons = styled.nav`
  display: flex;
  height: min-content;
  flex-wrap: wrap;
  gap: 0.2rem;
  img {
    height: 3.5em;
  }
`;

export const EditorOptions = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    padding: 0.5rem 0;
  }

  input {
    padding: 1rem;
  }

  select {
    font-size: 1.2rem;
    filter: drop-shadow(#0008 3px 3px 5px);
    border: none;
    padding: 1rem;
  }
`;

export const EditorNav = styled.nav`
  display: grid;
  row-gap: 1rem;

  button,
  select {
    font-size: 1.2rem;
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

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    column-span: all;
  }
`;

export const CharacterDropdown = styled.select``;

export const SaveButton = styled.button`
  background-color: #3d3;

  &:disabled {
    pointer-events: none;
  }
`;

export const CursorNavigationButtons = styled.div`
  display: grid;
  column-gap: 0.5rem;
  grid-template-columns: 1fr 1fr 3fr;
`;

export const CursorButton = styled.button`
  background-color: #f93;
`;

export const Cursor = styled.span`
  border-right: 2px solid white;
  height: 50px;
  align-self: center;
  width: auto;
  display: inline-block;
  animation: cursor-blink infinite ease 1300ms;

  @keyframes cursor-blink {
    0% {
      opacity: 100;
    }
    49% {
      opacity: 100;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
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
  margin: 0.5rem 0;
`;
