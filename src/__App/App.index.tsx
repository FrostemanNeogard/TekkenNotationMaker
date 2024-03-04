import { useRef, useState, useEffect } from "react";
import b from "../assets/images/upscaled/arrows/b.png";
import f from "../assets/images/upscaled/arrows/f.png";
import n from "../assets/images/upscaled/arrows/n.png";
import two from "../assets/images/upscaled/arrows/2.png";

import { saveAs } from "file-saver";

import * as S from "./App.styled";
import * as htmlToImage from "html-to-image";
import { ImagePaths } from "../__util/ImageEnum";

function App() {
  const divRef = useRef(null);
  const [comboNotation, setComboNotation] = useState<string[]>([]);
  const [imageSources, setImageSources] = useState<string[]>([]);

  useEffect(() => {
    // Require all images from the specified directory
    let images = [];
    for (const image in ImagePaths) {
      if (!image.startsWith(".")) {
        continue;
      }

      images.push(image);
    }

    setImageSources(images);
  }, []);

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

  const Output = () => {
    return (
      <>
        <h1>Output</h1>
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

  return (
    <>
      <Output />
      <S.EditorUI>
        {imageSources.map((src, index) => (
          <S.NotationButton
            key={index}
            onClick={() => pushImageSrc(src)}
            src={src}
          />
        ))}
        <button onClick={() => generateImage()}>Generate</button>
      </S.EditorUI>
    </>
  );
}

export default App;
