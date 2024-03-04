import { useRef, useState } from "react";

import { saveAs } from "file-saver";

import * as S from "./App.styled";
import * as htmlToImage from "html-to-image";
import { ImagePaths } from "../__util/ImagePaths";

function App() {
  const divRef = useRef(null);
  const [comboNotation, setComboNotation] = useState<string[]>([]);

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

  const Output = () => {
    return (
      <>
        <S.PreviewContainer>
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

  const shits = Object.values(ImagePaths);

  return (
    <S.App>
      <Output />
      <S.EditorUI>
        {shits.map((key) => (
          <S.NotationButton
            src={key.src}
            alt={key.text}
            key={key.text}
            onClick={() => pushImageSrc(key.src)}
            draggable={false}
          />
        ))}
        <button onClick={() => generateImage()}>Generate</button>
        <button onClick={() => removeLastNotation()}>Backspace</button>
        <button onClick={() => setComboNotation([])}>Reset</button>
      </S.EditorUI>
    </S.App>
  );
}

export default App;
