import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SimplifiedConstitution from "./pages/SimplifiedConstitution";
import ArticlePage from "./pages/ArticlePage";

import "./stylesheets/app.css";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/simplified-constitution"
          element={<SimplifiedConstitution />}
        />
        <Route
          path="/simplified-constitution/article/:articleNumber"
          element={<ArticlePage />}
        />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
