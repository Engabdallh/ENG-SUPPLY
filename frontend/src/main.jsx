
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./index.css";
import "./i18n";
import App from "./App.jsx";

function Root() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const direction = i18n.language === "ar" ? "rtl" : "ltr";

    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
