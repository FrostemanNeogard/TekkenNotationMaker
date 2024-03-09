import { useTranslation } from "react-i18next";
import * as S from "./Footer.styled";

export const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <S.Footer>
      <p>
        {t("app.footer_start")}
        <a href="https://twitter.com/funnyorangcat" target="_blank">
          @funnyorangcat
        </a>
        {t("app.footer_end")}
        <a href="https://www.buymeacoffee.com/funnyorangcat" target="_blank">
          https://www.buymeacoffee.com/funnyorangcat
        </a>
        .
      </p>
    </S.Footer>
  );
};
