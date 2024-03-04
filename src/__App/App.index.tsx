import { useRef, useState } from "react";
import { saveAs } from "file-saver";
import { ImagePaths } from "../__util/ImagePaths";
import {
  FaBackspace,
  FaFileDownload,
  FaTrashAlt,
  FaUndo,
} from "react-icons/fa";
import * as S from "./App.styled";
import * as htmlToImage from "html-to-image";

function App() {
  const divRef = useRef(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [comboNotation, setComboNotation] = useState<string[]>([]);
  const [lastKnownComboNotation, setLastKnownComboNotation] = useState<
    string[]
  >([]);

  async function generateImage() {
    setIsLoading(true);
    const node = divRef.current;

    if (!node) {
      console.error("No node found.");
      return;
    }

    const dataUrl = await htmlToImage.toPng(node);
    saveAs(dataUrl, "shit.png");
    setIsLoading(false);
  }

  const pushImageSrc = (imageSrc: string) => {
    setComboNotation([...comboNotation, imageSrc]);
  };

  const removeLastNotation = () => {
    const data = [...comboNotation];
    data.pop();
    setComboNotation(data);
  };

  const resetNotation = () => {
    if (comboNotation.length <= 0) {
      return;
    }

    setLastKnownComboNotation([...comboNotation]);
    setComboNotation([]);
  };

  const undoReset = () => {
    if (lastKnownComboNotation.length <= 0) {
      alert("No previous state set.");
      return;
    }

    setComboNotation(lastKnownComboNotation);
  };

  const Output = () => {
    return (
      <>
        <S.PreviewContainer>
          <h1>Output preview</h1>
          <div>
            {comboNotation.map((imageSrc, index) => (
              <S.NotationOutput key={index} src={imageSrc} draggable={false} />
            ))}
          </div>
        </S.PreviewContainer>
        <S.NotationContainer>
          <div ref={divRef}>
            {comboNotation.map((imageSrc, index) => (
              <S.NotationOutput key={index} src={imageSrc} />
            ))}
          </div>
        </S.NotationContainer>
      </>
    );
  };

  const images = Object.values(ImagePaths);

  return (
    <S.App>
      <Output />
      <S.EditorUI>
        <S.NotationButtons>
          {images.map((key) => (
            <S.NotationButton
              src={key.src}
              alt={key.text}
              key={key.text}
              onClick={() => pushImageSrc(key.src)}
              draggable={false}
            />
          ))}
        </S.NotationButtons>
        <S.VerticalDivider />
        <S.EditorNav>
          <S.SaveButton onClick={() => generateImage()} disabled={isLoading}>
            <FaFileDownload />
          </S.SaveButton>
          <S.BackButton onClick={() => removeLastNotation()}>
            <FaBackspace />
          </S.BackButton>
          <S.ResetButton onClick={() => resetNotation()}>
            <FaTrashAlt />
          </S.ResetButton>
          <S.UndoButton
            onClick={() => undoReset()}
            disabled={lastKnownComboNotation.length <= 0}
          >
            <FaUndo />
          </S.UndoButton>
        </S.EditorNav>
      </S.EditorUI>
    </S.App>
  );
}

export default App;
