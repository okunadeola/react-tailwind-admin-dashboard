import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import DashboardContext from "./context/Dashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <DashboardContext>
          <App />
      </DashboardContext>
    </StrictMode>
  </BrowserRouter>
);
