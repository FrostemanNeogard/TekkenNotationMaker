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
import { BorderedImage } from "../BorderedImage/BorderedImage.index";
import { LabelText, StanceText } from "../NotationText/NotationText.styled";
import sampleArrow from "../../assets/images/upscaled/arrows/df.webp";
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
    key:
      | "stanceFill"
      | "stanceOutline"
      | "labelBackground"
      | "labelText"
      | "borderColor",
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
    key:
      | "stanceOutlineWidth"
      | "stanceSize"
      | "stanceMargin"
      | "labelRadius"
      | "labelOpacity"
      | "labelSize"
      | "labelMargin"
      | "labelPadding"
      | "borderWidth"
      | "borderGlow",
    label: string,
    min: number,
    max: number,
  ) => (
    <S.Field>
      <label htmlFor={key}>{label}</label>
      <input
        type="range"
        id={key}
        min={min}
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
            <BorderedImage
              src={sampleArrow}
              border={
                draft.borderIcons
                  ? {
                      color: draft.borderColor,
                      width: draft.borderWidth,
                      glow: draft.borderGlow,
                    }
                  : null
              }
              renderHeight={128}
              alt=""
            />
          </S.Sample>

          <S.Group>
            {colorField("stanceFill", t("app.styles.stance_fill"))}
            {colorField("stanceOutline", t("app.styles.stance_outline"))}
            {sliderField(
              "stanceOutlineWidth",
              t("app.styles.outline_width"),
              0,
              0.2,
            )}
            {sliderField("stanceSize", t("app.styles.stance_size"), 0.5, 1.3)}
            {sliderField("stanceMargin", t("app.styles.stance_margin"), 0, 0.5)}
            {fontField("stanceFont", t("app.styles.stance_font"))}
          </S.Group>

          <S.Group>
            <S.CheckField $wide>
              <input
                type="checkbox"
                id="labelBackdrop"
                checked={draft.labelBackdrop}
                onChange={(e) => update("labelBackdrop", e.target.checked)}
              />
              <label htmlFor="labelBackdrop">
                {t("app.styles.label_backdrop")}
              </label>
            </S.CheckField>
            {draft.labelBackdrop && (
              <>
                {colorField(
                  "labelBackground",
                  t("app.styles.label_background"),
                )}
                {sliderField(
                  "labelOpacity",
                  t("app.styles.label_opacity"),
                  0,
                  1,
                )}
                {sliderField(
                  "labelRadius",
                  t("app.styles.label_radius"),
                  0,
                  0.5,
                )}
                {sliderField(
                  "labelPadding",
                  t("app.styles.label_padding"),
                  0,
                  0.5,
                )}
              </>
            )}
            {colorField("labelText", t("app.styles.label_text"))}
            {sliderField("labelSize", t("app.styles.label_size"), 0.4, 1.2)}
            {sliderField("labelMargin", t("app.styles.label_margin"), 0, 0.5)}
            {fontField("labelFont", t("app.styles.label_font"))}
          </S.Group>

          <S.Group>
            <S.CheckField>
              <input
                type="checkbox"
                id="borderIcons"
                checked={draft.borderIcons}
                onChange={(e) => update("borderIcons", e.target.checked)}
              />
              <label htmlFor="borderIcons">
                {t("app.styles.border_icons")}
              </label>
            </S.CheckField>
            <S.CheckField>
              <input
                type="checkbox"
                id="borderLabels"
                checked={draft.borderLabels}
                onChange={(e) => update("borderLabels", e.target.checked)}
              />
              <label htmlFor="borderLabels">
                {t("app.styles.border_labels")}
              </label>
            </S.CheckField>
            {(draft.borderIcons || draft.borderLabels) && (
              <>
                {colorField("borderColor", t("app.styles.border_color"))}
                {sliderField(
                  "borderWidth",
                  t("app.styles.border_width"),
                  0,
                  0.15,
                )}
                {sliderField(
                  "borderGlow",
                  t("app.styles.border_glow"),
                  0,
                  0.15,
                )}
              </>
            )}
          </S.Group>

          <S.Actions>
            <S.Button $primary onClick={() => onSave(draft)}>
              {t("app.styles.save")}
            </S.Button>
            <S.Button onClick={() => onDraftChange(null)}>
              {t("app.styles.cancel")}
            </S.Button>
            <S.Button onClick={() => copyLink(draft)}>
              {copied ? t("app.styles.copied") : t("app.styles.share")}
            </S.Button>
            <S.Button onClick={restoreDefaults}>
              {t("app.styles.restore_defaults")}
            </S.Button>
            {!isDefault && (
              <S.Button $danger onClick={onDelete}>
                {t("app.styles.delete")}
              </S.Button>
            )}
          </S.Actions>
        </S.Panel>
      )}
    </S.StyleEditor>
  );
};
