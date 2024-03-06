import React from "react";
import ReactDOM from "react-dom/client";
import App from "./__App/App.index.tsx";
import "./main.scss";
import { ThemeProvider } from "styled-components";
import { theme } from "./__util/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
