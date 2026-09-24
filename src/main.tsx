import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router";
import RouteComponent from "./routes";
import Provider from "./contexts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <RouteComponent />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
