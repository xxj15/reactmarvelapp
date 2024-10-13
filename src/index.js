import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Detail from "./Detail";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="character/:id" element={<Detail />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
