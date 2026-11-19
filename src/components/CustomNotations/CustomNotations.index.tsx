import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ComboItem, CustomNotation } from "../../__types/commonTypes";
import { customNotationMaxLength } from "../../__util/useCustomNotations";
import { LabelText, StanceText } from "../NotationText/NotationText.styled";
import * as S from "./CustomNotations.styled";

type Props = {
  items: CustomNotation[];
  onInsert: (item: ComboItem) => void;
  onAdd: (text: string, kind: CustomNotation["kind"]) => boolean;
  onRemove: (id: string) => void;
};

export const CustomNotations = (props: Props) => {
  const { items, onInsert, onAdd, onRemove } = props;
  const { t } = useTranslation("common");
  const [text, setText] = useState("");
  const [kind, setKind] = useState<CustomNotation["kind"]>("stance");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAdd(text, kind)) {
      setText("");
    }
  };

  return (
    <S.CustomNotations>
      <S.Heading>{t("app.custom.title")}</S.Heading>
      {items.map((item) => {
        const Text = item.kind === "stance" ? StanceText : LabelText;
        return (
          <S.Item key={item.id}>
            <Text
              role="button"
              onClick={() => onInsert({ type: item.kind, text: item.text })}
            >
              {item.text}
            </Text>
            <S.Remove
              aria-label={t("app.custom.remove")}
              onClick={() => onRemove(item.id)}
            >
              ×
            </S.Remove>
          </S.Item>
        );
      })}
      <S.Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          maxLength={customNotationMaxLength}
          placeholder={t("app.custom.placeholder")}
          onChange={(e) => setText(e.target.value)}
        />
        <select
          value={kind}
          onChange={(e) => setKind(e.target.value as CustomNotation["kind"])}
        >
          <option value="stance">{t("app.custom.stance")}</option>
          <option value="label">{t("app.custom.label")}</option>
        </select>
        <button type="submit">{t("app.custom.add")}</button>
      </S.Form>
    </S.CustomNotations>
  );
};
