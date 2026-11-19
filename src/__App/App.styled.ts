import styled, { css } from "styled-components";
import { theme } from "../__util/theme";
import { notationHeight } from "../components/NotationText/NotationText.styled";

const mobile = `@media screen and (max-width: ${theme.breakpoints.mobile})`;

export const App = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  font-family: "Roboto", sans-serif;
  color: white;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
`;

export const NotationButton = styled.img`
  height: 75px;

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;

// Preview and toolbar stay pinned to the top so the result is always visible
// while building the combo or tweaking a style further down the page.
export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: grid;
  row-gap: 0.6rem;
  padding: 0.75rem max(2rem, calc((100% - 1500px) / 2 + 2rem));
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid #ffffff1f;
  box-shadow: 0 6px 16px #0007;

  ${mobile} {
    padding: 0.5rem 0.75rem;
    row-gap: 0.5rem;
  }

  /* Landscape phones: a pinned header would eat most of the screen. */
  @media screen and (max-height: 500px) {
    position: static;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  row-gap: 0.5rem;
  min-width: 0;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;

    ${mobile} {
      font-size: 1rem;
    }
  }
`;

export const PreviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const PreviewContent = styled.div`
  border: 3px solid gray;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 0.75rem 1rem;
  max-width: 100% !important;
  min-height: 50px;
  max-height: min(28vh, 240px);
  overflow-y: auto;
  overscroll-behavior: contain;

  ${mobile} {
    padding: 0.5rem 0.75rem;
    max-height: 26vh;
  }

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

    ${mobile} {
      font-size: 1.5rem;
      margin: 0.5rem 0;
    }

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
  ${notationHeight("50px")}
`;

export const NotationOutput = styled.img`
  height: 500px;
`;

export const NotationContainer = styled.div<{ $qualityMultiplier: number }>`
  overflow: hidden;
  width: max-content;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
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
    section {
      padding: calc(var(--notation-height) * var(--border-room));
    }
    ${(props) =>
      notationHeight(`calc(500px * ${props.$qualityMultiplier})`)}
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
  flex: 1;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 1.5rem 2rem 2rem;
  display: grid;
  grid-template-columns: 340px minmax(0, 1fr);
  grid-template-areas: "options main";
  align-items: start;
  gap: 1.5rem;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${mobile} {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "main" "options";
    padding: 0.75rem 0.75rem 1.5rem;
    gap: 0.75rem;
  }
`;

const card = css`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 1rem;
  min-width: 0;

  ${mobile} {
    padding: 0.75rem;
  }
`;

export const EditorMain = styled.div`
  grid-area: main;
  display: grid;
  gap: 0.75rem;
  min-width: 0;
`;

export const NotationButtons = styled.nav`
  ${card}
  display: flex;
  height: min-content;
  flex-wrap: wrap;
  gap: 0.2rem;
  row-gap: calc(0.2rem + var(--notation-height) * var(--icon-reach));
  img {
    height: var(--notation-height);
  }
  ${notationHeight("3.5rem")}

  ${mobile} {
    ${notationHeight("3rem")}
  }

  span[role="button"] {
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
    }
  }
`;

export const CharacterSection = styled.section`
  ${card}
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  ${notationHeight("3.5rem")}

  ${mobile} {
    ${notationHeight("3rem")}
  }

  select {
    width: 100%;
    margin-bottom: 0.6rem;
    padding: 0.6rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
  }

  span[role="button"] {
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
    }
  }
`;

export const CustomSection = styled.section`
  ${card}
  ${notationHeight("3.5rem")}

  ${mobile} {
    ${notationHeight("3rem")}
  }
`;

export const EditorOptions = styled.div`
  ${card}
  grid-area: options;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  label {
    font-size: 0.85rem;
    opacity: 0.85;
  }

  input,
  select {
    width: 100%;
    min-width: 0;
    padding: 0.6rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
  }
`;

export const OptionField = styled.div<{ $wide?: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
  min-width: 0;
  grid-column: ${(props) => (props.$wide ? "1 / -1" : "auto")};

  ${mobile} {
    grid-column: auto;
  }
`;

export const EditorOptionsWide = styled.div`
  grid-column: 1 / -1;
  min-width: 0;
`;

export const EditorNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr)) minmax(0, 2fr);
  gap: 0.4rem;
  max-width: 34rem;

  ${mobile} {
    max-width: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 2.75rem;
    padding: 0.5rem;
    border: none;
    border-radius: 6px;
    font-size: 1.15rem;
    color: black;

    &:hover {
      cursor: pointer;
      filter: brightness(80%);
    }

    &:active {
      transform: scale(0.96);
    }
  }
`;

export const SaveButton = styled.button`
  background-color: #3d3;

  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }
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

export const UndoButton = styled.button`
  background-color: #ffffffdd;

  &:disabled {
    pointer-events: none;
    opacity: 0.4;
  }
`;

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
