import React from "react";
import { BrowserRouter, Routes, Route } from "react-router"

import "@fontsource-variable/unbounded"
import "@fontsource-variable/inter"
import "./index.css"

import HomePage from "./pages/Home"
import A1Page from "./pages/A1"
import A2Page from "./pages/A2"

function App() {
  return (
    <BrowserRouter basename="/Poker-menage">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a1" element={<A1Page />} />
        <Route path="/a2" element={<A2Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
