import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

function ThemeWrapper() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get("theme");

    let activeTheme = localStorage.getItem("app-theme") || "light";

    if (themeParam === "light" || themeParam === "dark") {
      activeTheme = themeParam;
      localStorage.setItem("app-theme", themeParam);
    }

    document.documentElement.setAttribute("data-theme", activeTheme);
  }, []);

  return <Home />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ThemeWrapper />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
