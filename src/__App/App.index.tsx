import { useRef, useState } from "react";

import { saveAs } from "file-saver";

import * as S from "./App.styled";
import * as htmlToImage from "html-to-image";
import { ImagePaths } from "../__util/ImagePaths";

function App() {
  const divRef = useRef(null);
  const [comboNotation, setComboNotation] = useState<string[]>([]);
  const [lastKnownComboNotation, setLastKnownComboNotation] = useState<
    string[]
  >([]);

  async function generateImage() {
    const node = divRef.current;

    if (!node) {
      console.error("No node found.");
      return;
    }

    const dataUrl = await htmlToImage.toPng(node);

    saveAs(dataUrl, "shit.png");
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
          <button onClick={() => generateImage()}>Generate</button>
          <button onClick={() => removeLastNotation()}>Backspace</button>
          <button onClick={() => resetNotation()}>Reset</button>
          {lastKnownComboNotation.length > 0 && (
            <button onClick={() => undoReset()}>Undo</button>
          )}
        </S.EditorNav>
      </S.EditorUI>
    </S.App>
  );
}

export default App;
