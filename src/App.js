import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <main id="siteContainer">
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
