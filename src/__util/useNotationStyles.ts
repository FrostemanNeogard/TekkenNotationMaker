import { useEffect, useState } from "react";
import { NotationStyle, SavedNotationStyle } from "../__types/commonTypes";
import {
  createStyleId,
  decodeNotationStyle,
  defaultNotationStyle,
  defaultStyleId,
  isSameStyle,
  loadSavedStyles,
  loadSelectedStyleId,
  persistStyles,
  styleCodeFromHash,
} from "./notationStyles";

type State = { styles: SavedNotationStyle[]; selectedId: string };

const loadInitialState = (): State => {
  const styles = loadSavedStyles();
  const selectedId = loadSelectedStyleId();
  const code = styleCodeFromHash(window.location.hash);
  const imported = code ? decodeNotationStyle(code) : null;

  if (!imported) {
    return { styles, selectedId };
  }

  const existing = styles.find((style) => isSameStyle(style, imported));
  if (existing) {
    return { styles, selectedId: existing.id };
  }

  const added = { ...imported, id: createStyleId() };
  return { styles: [...styles, added], selectedId: added.id };
};

export const useNotationStyles = () => {
  const [state, setState] = useState<State>(loadInitialState);

  useEffect(() => {
    persistStyles(state.styles, state.selectedId);
  }, [state]);

  useEffect(() => {
    if (styleCodeFromHash(window.location.hash)) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
  }, []);

  const selected =
    state.styles.find((style) => style.id === state.selectedId) ??
    defaultNotationStyle;

  const select = (id: string) =>
    setState((current) => ({ ...current, selectedId: id }));

  const save = (style: NotationStyle, id?: string) => {
    const savedId = id ?? createStyleId();
    setState((current) => ({
      styles: current.styles.some((item) => item.id === savedId)
        ? current.styles.map((item) =>
            item.id === savedId ? { ...style, id: savedId } : item,
          )
        : [...current.styles, { ...style, id: savedId }],
      selectedId: savedId,
    }));
  };

  const remove = (id: string) =>
    setState((current) => ({
      styles: current.styles.filter((item) => item.id !== id),
      selectedId:
        current.selectedId === id ? defaultStyleId : current.selectedId,
    }));

  return { styles: state.styles, selected, select, save, remove };
};
