import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MainContextPage from "./context/MainContextPage.jsx";
import toast, { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* main context Page apply here */}
    <MainContextPage>
      {/* theme effect context */}
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </MainContextPage>
  </React.StrictMode>
);
