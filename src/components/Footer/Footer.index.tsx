import * as S from "./Footer.styled";

export const Footer = () => {
  return (
    <S.Footer>
      <p>
        App created by{" "}
        <a href="https://twitter.com/funnyorangcat" target="_blank">
          @funnyorangcat
        </a>
        . If you like what I do, consider supporting me here:{" "}
        <a href="https://www.buymeacoffee.com/funnyorangcat" target="_blank">
          https://www.buymeacoffee.com/funnyorangcat
        </a>
        .
      </p>
    </S.Footer>
  );
};
