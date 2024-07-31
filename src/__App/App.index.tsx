import { useRef, useState } from "react";
import { saveAs } from "file-saver";
import { Fragment } from "react";
import {
  ArcadeThemeOverrides,
  Tekken8ThemeOverrides,
  XboxThemeOverrides,
  PlaystationThemeOverrides,
  NumpadThemeOverrides,
  T7PCThemeOverrides,
  StreetFighterThemeOverrides,
} from "../__util/ThemeOverrides";
import { CharacterSpecificImagePaths } from "../__util/ImagePaths";
import {
  FaBackspace,
  FaFileDownload,
  FaTrashAlt,
  FaUndo,
} from "react-icons/fa";
import * as S from "./App.styled";
import * as htmlToImage from "html-to-image";
import { Character, NotationImage } from "../__types/commonTypes";
import { enCharacters, jpCharacters } from "../__util/characters";
import { Footer } from "../components/Footer/Footer.index";
import { Theme } from "../__types/commonTypes";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../components/LanguageSelector/LanguageSelector.index";

function App() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const generationButtonRef = useRef<HTMLButtonElement | null>(null);
  const [theme, setTheme] = useState<Theme>("tekken8");
  const [topText, setTopText] = useState<string>("");
  const [bottomText, setBottomText] = useState<string>("");
  const [quality, setQuality] = useState<string>("medium");
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(
    enCharacters[0]
  );
  const [comboNotation, setComboNotation] = useState<string[]>([]);
  const [lastKnownComboNotation, setLastKnownComboNotation] = useState<
    string[]
  >([]);
  const [cursorIndex, setCursorIndex] = useState<number>(0);
  const { t, i18n } = useTranslation("common");
  const currentLang = i18n.language;

  const characters = () => {
    switch (currentLang) {
      case "ja":
        return jpCharacters;
      default:
        return enCharacters;
    }
  };

  function decrementCursorIndex() {
    if (cursorIndex <= 0) {
      setCursorIndex(-1);
      return;
    }
    setCursorIndex(cursorIndex - 1);
  }

  function incrementCursorIndex() {
    if (cursorIndex >= comboNotation.length - 1) {
      setCursorIndex(comboNotation.length);
      return;
    }
    setCursorIndex(cursorIndex + 1);
  }

  async function generateImage() {
    const node = divRef.current;

    if (!node) {
      console.error("No node found.");
      return;
    }

    if (generationButtonRef.current) {
      generationButtonRef.current.disabled = true;
    }
    const dataUrl = await htmlToImage.toPng(node);
    saveAs(dataUrl, `T8ComboNotation_${quality}res.png`);
    if (generationButtonRef.current) {
      generationButtonRef.current.disabled = false;
    }
  }

  const pushImageSrc = (imageSrc: string) => {
    if (cursorIndex >= comboNotation.length - 1) {
      setComboNotation([...comboNotation, imageSrc]);
      incrementCursorIndex();
      return;
    }
    const newArray = [
      ...comboNotation.slice(0, cursorIndex + 1),
      imageSrc,
      ...comboNotation.slice(cursorIndex + 1),
    ];
    setComboNotation(newArray);
    incrementCursorIndex();
  };

  const removeNotationAtIndex = (index: number) => {
    if (index < 0) {
      return;
    }
    const data = [...comboNotation];
    data.splice(index, 1);
    decrementCursorIndex();
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
    const character = characters().filter(
      (value) => value.displayName === characterName
    );
    if (character.length <= 0) {
      alert("Something went wrong.");
      return;
    }
    setSelectedCharacter(character[0]);
  };

  const Output = () => {
    return (
      <>
        <S.PreviewContainer>
          <S.PreviewHeader>
            <h1>{t("app.output_preview")}</h1>
            <LanguageSelector />
          </S.PreviewHeader>
          <S.PreviewContent>
            <div>
              {topText && <p>{topText}</p>}
              <section>
                {cursorIndex == -1 && <S.Cursor />}
                {comboNotation.map((imageSrc, index) => (
                  <Fragment key={`fragment-${index}`}>
                    <S.NotationOutput
                      key={`${index}`}
                      src={imageSrc}
                      draggable={false}
                    />
                    {index === cursorIndex && <S.Cursor key={`s-${index}`} />}
                  </Fragment>
                ))}
              </section>
              {bottomText && <p>{bottomText}</p>}
            </div>
          </S.PreviewContent>
        </S.PreviewContainer>
        <S.NotationContainer
          $qualityMultiplier={
            quality === "high"
              ? 1
              : quality === "medium"
              ? 0.5
              : quality === "low"
              ? 0.1
              : 1
          }
        >
          <div ref={divRef}>
            {topText && <p>{topText}</p>}
            <section>
              {comboNotation.map((imageSrc, index) => (
                <S.NotationOutput
                  key={`r-${index}-${imageSrc}`}
                  src={imageSrc}
                />
              ))}
            </section>
            {bottomText && <p>{bottomText}</p>}
          </div>
        </S.NotationContainer>
      </>
    );
  };

  const buttonImagesPath = () => {
    switch (theme) {
      case "tekken8":
        return Tekken8ThemeOverrides;
      case "arcade":
        return ArcadeThemeOverrides;
      case "tekken8xbox":
        return XboxThemeOverrides;
      case "tekken8playstation":
        return PlaystationThemeOverrides;
      case "tekken7":
        return T7PCThemeOverrides;
      case "numpad":
        return NumpadThemeOverrides;
      case "sf":
        return StreetFighterThemeOverrides;
      default:
        return Tekken8ThemeOverrides;
    }
  };

  const themeIcons = buttonImagesPath();
  const allImages = Object.values(themeIcons);
  const characterImages = Object.values(
    CharacterSpecificImagePaths[selectedCharacter.pathName] ?? {}
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
    return (
      <S.CharacterDropdown
        name="character-dropdown"
        value={selectedCharacter.displayName}
        onChange={handleCharacterChange}
      >
        {characters().map((item: Character, index: number) => (
          <option value={item.displayName} key={item.pathName + index}>
            {item.displayName}
          </option>
        ))}
      </S.CharacterDropdown>
    );
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Theme;
    setTheme(value);
  };

  return (
    <S.App>
      <Output />
      <S.EditorUI>
        <S.EditorOptions>
          <div>
            <label htmlFor="theme">{t("app.themes.theme")}</label>
            <select name="theme" id="theme" onChange={handleThemeChange}>
              <option value="tekken8">{t("app.themes.tekken_8")}</option>
              <option value="tekken7">{t("app.themes.tekken_7")}</option>
              <option value="arcade">{t("app.themes.arcade")}</option>
              <option value="tekken8playstation">
                {t("app.themes.playstation")}
              </option>
              <option value="tekken8xbox">{t("app.themes.xbox")}</option>
              <option value="numpad">{t("app.themes.numpad")}</option>
              <option value="sf">{t("app.themes.sf")}</option>
            </select>
          </div>

          <div>
            <label htmlFor="quality">{t("app.qualities.quality")}</label>
            <select
              name="quality"
              id="quality"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
            >
              <option value="high">{t("app.qualities.high")}</option>
              <option value="medium">{t("app.qualities.medium")}</option>
              <option value="low">{t("app.qualities.low")}</option>
            </select>
          </div>

          <div>
            <label htmlFor="top-text">
              {t("app.top_text")} ({t("app.optional")})
            </label>
            <input
              type="text"
              name="top-text"
              placeholder={t("app.top_text")}
              onChange={(e) => setTopText(e.target.value)}
              value={topText}
            />
          </div>

          <div>
            <label htmlFor="bottom-text">
              {t("app.bottom_text")} ({t("app.optional")})
            </label>
            <input
              type="text"
              name="bottom-text"
              placeholder={t("app.bottom_text")}
              onChange={(e) => setBottomText(e.target.value)}
              value={bottomText}
            />
          </div>
        </S.EditorOptions>
        <S.NotationButtons>
          {allImages.map((key: NotationImage, index) => (
            <EditorNotationButtons image={key} key={key.src + index} />
          ))}
          <S.HorizontalDivider />
          {characterImages.map((key: NotationImage, index) => (
            <EditorNotationButtons image={key} key={key.src + index} />
          ))}
        </S.NotationButtons>
        <S.EditorNav>
          <CharacterDropdown />
          <S.SaveButton
            ref={generationButtonRef}
            onClick={() => generateImage()}
          >
            <FaFileDownload />
          </S.SaveButton>
          <S.CursorNavigationButtons>
            <S.CursorButton onClick={() => decrementCursorIndex()}>
              {"<"}
            </S.CursorButton>
            <S.CursorButton onClick={() => incrementCursorIndex()}>
              {">"}
            </S.CursorButton>
            <S.BackButton onClick={() => removeNotationAtIndex(cursorIndex)}>
              <FaBackspace />
            </S.BackButton>
          </S.CursorNavigationButtons>
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
