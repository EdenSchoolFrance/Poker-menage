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
    <BrowserRouter>
      <Routes>
        <Route path="/Poker-menage/" element={<HomePage />} />
        <Route path="/Poker-menage/a1" element={<A1Page />} />
        <Route path="/Poker-menage/a2" element={<A2Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
