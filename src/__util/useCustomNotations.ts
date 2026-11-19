import { useEffect, useState } from "react";
import { CustomNotation } from "../__types/commonTypes";
import { createId } from "./notationStyles";

export const customNotationMaxLength = 24;
const maxItems = 60;
const storageKey = "custom-notations";

const load = (): CustomNotation[] => {
  try {
    const raw = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    if (!Array.isArray(raw)) {
      return [];
    }
    return raw
      .flatMap((item) => {
        const text =
          typeof item?.text === "string"
            ? item.text.trim().slice(0, customNotationMaxLength)
            : "";
        const validKind = item?.kind === "stance" || item?.kind === "label";
        return text && validKind && typeof item.id === "string"
          ? [{ id: item.id, text, kind: item.kind }]
          : [];
      })
      .slice(0, maxItems);
  } catch {
    return [];
  }
};

export const useCustomNotations = () => {
  const [items, setItems] = useState<CustomNotation[]>(load);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(items));
    } catch {
      return;
    }
  }, [items]);

  const add = (rawText: string, kind: CustomNotation["kind"]) => {
    const text = rawText.trim().slice(0, customNotationMaxLength);
    const exists = items.some(
      (item) => item.text === text && item.kind === kind
    );
    if (!text || exists || items.length >= maxItems) {
      return false;
    }
    setItems([...items, { id: createId(), text, kind }]);
    return true;
  };

  const remove = (id: string) =>
    setItems(items.filter((item) => item.id !== id));

  return { items, add, remove };
};
