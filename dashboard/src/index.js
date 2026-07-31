import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

function ThemeWrapper() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
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
