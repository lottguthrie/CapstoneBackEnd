import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./components/css/animate.min.css";
import "./components/scss/light-bootstrap-dashboard-react.scss";

import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/App" render={(props) => <App {...props} />} />
      <Navigate from="/Login" to="/App" />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);