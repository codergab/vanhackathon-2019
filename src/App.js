import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/css/main.css";
import Header from "./components/layouts/Header";

import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
