import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TextProvider } from "./TextContext.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewText from "./components/ViewText.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/view/:textCode" element={<ViewText />} />
        </Routes>
      </BrowserRouter>
    </TextProvider>
  </StrictMode>
);
