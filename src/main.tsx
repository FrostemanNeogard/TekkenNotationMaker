import React from "react";
import ReactDOM from "react-dom/client";
import App from "./__App/App.index.tsx";
import "./main.scss";
import { ThemeProvider } from "styled-components";
import { theme } from "./__util/theme.ts";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_ja from "./translations/ja/common.json";
import common_ko from "./translations/ko/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      common: common_en,
    },
    ja: {
      common: common_ja,
    },
    ko: {
      common: common_ko,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
