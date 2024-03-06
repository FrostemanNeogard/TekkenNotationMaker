import { useRef, useState } from "react";
import { saveAs } from "file-saver";
import { CharacterSpecificImagePaths, ImagePaths } from "../__util/ImagePaths";
import {
  FaBackspace,
  FaFileDownload,
  FaTrashAlt,
  FaUndo,
} from "react-icons/fa";
import * as S from "./App.styled";
import * as htmlToImage from "html-to-image";
import { NotationImage } from "../__types/PathTypes";
import { characters } from "../__util/characters";
import { Footer } from "../components/Footer/Footer.index";

function App() {
  const divRef = useRef(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<string>("bryan");
  const [comboNotation, setComboNotation] = useState<string[]>([]);
  const [lastKnownComboNotation, setLastKnownComboNotation] = useState<
    string[]
  >([]);

  async function generateImage() {
    // setIsLoading(true);
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

  const handleCharacterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const characterName = e.target.value;
    setSelectedCharacter(characterName);
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

  const images: NotationImage[] = Object.values(ImagePaths);
  const characterImages = Object.values(
    CharacterSpecificImagePaths[selectedCharacter] ?? {}
  );

  const EditorNotationButtons = (props: { image: NotationImage }) => {
    const { image } = props;

    if (!image.src) {
      return;
    }

    return (
      <S.NotationButton
        src={image.src}
        alt={image.text}
        key={image.src}
        onClick={() => pushImageSrc(image.src)}
        draggable={false}
      />
    );
  };

  const CharacterDropdown = () => {
    function formatCharacterValue(name: string) {
      let newName = name;
      newName = newName.toLowerCase();
      newName = newName.replace(" ", "_");
      newName = newName.replace("-", "_");
      return newName;
    }

    return (
      <S.CharacterDropdown
        name="character-dropdown"
        value={selectedCharacter}
        onChange={handleCharacterChange}
      >
        {characters.map((item) => (
          <option value={formatCharacterValue(item)} key={item}>
            {item}
          </option>
        ))}
      </S.CharacterDropdown>
    );
  };

  return (
    <S.App>
      <Output />
      <S.EditorUI>
        <S.NotationButtons>
          {images.map((key: NotationImage) => (
            <EditorNotationButtons image={key} key={key.src} />
          ))}
          <S.HorizontalDivider />
          {characterImages.map((key: NotationImage) => (
            <EditorNotationButtons image={key} key={key.src} />
          ))}
        </S.NotationButtons>
        <S.VerticalDivider />
        <S.EditorNav>
          <CharacterDropdown />
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
      <Footer />
    </S.App>
  );
}

export default App;
