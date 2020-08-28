import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Router from "./router";
import "./scss/app.scss";
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
