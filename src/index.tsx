import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "../src/style/GlobalStyle";
import { LocationProvider } from "./context/LocationContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <LocationProvider>
      <ToastContainer />
      <App />
      <GlobalStyles />
    </LocationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
