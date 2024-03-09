import { useState } from "react";
import * as S from "./LanguageSelector.styled";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const [t, i18n] = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const languageCode = e.target.value;
    setSelectedLanguage(languageCode);
    i18n.changeLanguage(languageCode);
    console.log("new value", selectedLanguage);
  };

  return (
    <S.LanguageDropdown>
      <img src="src\assets\images\languages\en.png" alt="" />
      <p>{selectedLanguage}</p>
      <select
        name="language-select"
        id="language-select"
        onChange={handleLanguageChange}
        value={selectedLanguage}
      >
        <option value="en">English</option>
        <option value="ja">日本語</option>
        <option value="ko">한국어</option>
      </select>
    </S.LanguageDropdown>
  );
};
