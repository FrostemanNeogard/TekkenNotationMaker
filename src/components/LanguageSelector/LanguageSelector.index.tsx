import * as S from "./LanguageSelector.styled";
import { useTranslation } from "react-i18next";

import ukFlag from "../../assets/images/languages/en.png";
import jaFlag from "../../assets/images/languages/ja.png";
import koFlag from "../../assets/images/languages/ko.png";
import ptFlag from "../../assets/images/languages/pt.png";
import plFlag from "../../assets/images/languages/pl.png";

export const LanguageSelector = () => {
  const { i18n } = useTranslation("common");

  const currentLang = i18n.language;

  const handleLanguageChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const languageCode = e.target.value;
    i18n.changeLanguage(languageCode);
  };

  const flagImage = () => {
    switch (currentLang) {
      case "en":
        return ukFlag;
      case "ja":
        return jaFlag;
      case "ko":
        return koFlag;
      case "pt":
        return ptFlag;
      case "pl":
        return plFlag;
    }
  };

  return (
    <S.LanguageDropdown>
      <img src={flagImage()} alt={`${currentLang} flag`} />
      <select
        name="language-select"
        id="language-select"
        onChange={handleLanguageChange}
        value={currentLang}
      >
        <option value="en">English</option>
        <option value="ja">日本語</option>
        <option value="ko">한국어</option>
        <option value="pt">Português Brasileiro</option>
        <option value="pl">Polski</option>
      </select>
    </S.LanguageDropdown>
  );
};
