import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NotationStyle, SavedNotationStyle } from "../../__types/commonTypes";
import {
  defaultNotationStyle,
  defaultStyleId,
  fontOptions,
  notationStyleVars,
  sanitizeNotationStyle,
  shareUrl,
} from "../../__util/notationStyles";
import { LabelText, StanceText } from "../NotationText/NotationText.styled";
import * as S from "./StyleEditor.styled";

type Props = {
  styles: SavedNotationStyle[];
  selected: SavedNotationStyle;
  draft: NotationStyle | null;
  onSelect: (id: string) => void;
  onDraftChange: (draft: NotationStyle | null) => void;
  onSave: (draft: NotationStyle) => void;
  onDelete: () => void;
};

export const StyleEditor = (props: Props) => {
  const { styles, selected, draft, onSelect, onDraftChange, onSave, onDelete } =
    props;
  const { t } = useTranslation("common");
  const [copied, setCopied] = useState(false);
  const isDefault = selected.id === defaultStyleId;

  const update = <K extends keyof NotationStyle>(
    key: K,
    value: NotationStyle[K],
  ) => {
    if (draft) {
      onDraftChange({ ...draft, [key]: value });
    }
  };

  const startEditing = () => {
    const style = sanitizeNotationStyle(selected);
    if (!style) {
      return;
    }
    onDraftChange(
      isDefault ? { ...style, name: t("app.styles.new_style_name") } : style,
    );
  };

  const restoreDefaults = () => {
    const style = sanitizeNotationStyle({
      ...defaultNotationStyle,
      name: draft?.name,
    });
    if (style) {
      onDraftChange(style);
    }
  };

  const copyLink = async (style: NotationStyle) => {
    const url = shareUrl(style);
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt(t("app.styles.share"), url);
    }
  };

  const colorField = (
    key: "stanceFill" | "stanceOutline" | "labelBackground" | "labelText",
    label: string,
  ) => (
    <S.Field>
      <label htmlFor={key}>{label}</label>
      <input
        type="color"
        id={key}
        value={draft?.[key]}
        onChange={(e) => update(key, e.target.value)}
      />
    </S.Field>
  );

  const fontField = (key: "stanceFont" | "labelFont", label: string) => (
    <S.Field>
      <label htmlFor={key}>{label}</label>
      <select
        id={key}
        value={draft?.[key]}
        onChange={(e) => update(key, e.target.value)}
      >
        {fontOptions.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
    </S.Field>
  );

  const sliderField = (
    key: "stanceOutlineWidth" | "labelRadius" | "labelOpacity",
    label: string,
    max: number,
  ) => (
    <S.Field>
      <label htmlFor={key}>{label}</label>
      <input
        type="range"
        id={key}
        min={0}
        max={max}
        step={0.005}
        value={draft?.[key]}
        onChange={(e) => update(key, Number(e.target.value))}
      />
    </S.Field>
  );

  return (
    <S.StyleEditor>
      <S.Field>
        <label htmlFor="notation-style">{t("app.styles.style")}</label>
        <select
          id="notation-style"
          value={selected.id}
          disabled={draft !== null}
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value={defaultStyleId}>{t("app.styles.default")}</option>
          {styles.map((style) => (
            <option key={style.id} value={style.id}>
              {style.name}
            </option>
          ))}
        </select>
      </S.Field>

      {!draft && (
        <S.Row>
          <S.Button onClick={startEditing}>
            {isDefault ? t("app.styles.create") : t("app.styles.edit")}
          </S.Button>
          <S.Button onClick={() => copyLink(selected)}>
            {copied ? t("app.styles.copied") : t("app.styles.share")}
          </S.Button>
        </S.Row>
      )}

      {draft && (
        <S.Panel>
          <S.Field>
            <label htmlFor="style-name">{t("app.styles.name")}</label>
            <input
              type="text"
              id="style-name"
              maxLength={40}
              value={draft.name}
              onChange={(e) => update("name", e.target.value)}
            />
          </S.Field>
          <S.Sample style={notationStyleVars(draft)}>
            <StanceText>SWA</StanceText>
            <LabelText>HEAT</LabelText>
          </S.Sample>
          <S.Row>
            {colorField("stanceFill", t("app.styles.stance_fill"))}
            {colorField("stanceOutline", t("app.styles.stance_outline"))}
          </S.Row>
          {sliderField(
            "stanceOutlineWidth",
            t("app.styles.outline_width"),
            0.2,
          )}
          {fontField("stanceFont", t("app.styles.stance_font"))}
          <S.Row>
            {colorField("labelBackground", t("app.styles.label_background"))}
            {colorField("labelText", t("app.styles.label_text"))}
          </S.Row>
          {sliderField("labelOpacity", t("app.styles.label_opacity"), 1)}
          {sliderField("labelRadius", t("app.styles.label_radius"), 0.5)}
          {fontField("labelFont", t("app.styles.label_font"))}
          <S.Button onClick={restoreDefaults}>
            {t("app.styles.restore_defaults")}
          </S.Button>
          <S.Row>
            <S.Button onClick={() => onSave(draft)}>
              {t("app.styles.save")}
            </S.Button>
            <S.Button onClick={() => onDraftChange(null)}>
              {t("app.styles.cancel")}
            </S.Button>
          </S.Row>
          <S.Row>
            <S.Button onClick={() => copyLink(draft)}>
              {copied ? t("app.styles.copied") : t("app.styles.share")}
            </S.Button>
            {!isDefault && (
              <S.Button $danger onClick={onDelete}>
                {t("app.styles.delete")}
              </S.Button>
            )}
          </S.Row>
        </S.Panel>
      )}
    </S.StyleEditor>
  );
};
