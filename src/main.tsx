import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import "@/i18n/config";
import App from "@/components/app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
