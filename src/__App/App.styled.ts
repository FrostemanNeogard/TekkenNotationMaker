import styled from "styled-components";

export const App = styled.div`
  overflow: hidden !important;
`;

export const NotationButton = styled.img`
  height: 100px;

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

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  button {
    width: 100%;
    padding: 1rem;
    margin: 2rem 20% 0;
  }
`;
