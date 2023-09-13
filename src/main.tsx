import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/theme.tsx";
import "./styles/index.css";
import "./styles/font.css";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
