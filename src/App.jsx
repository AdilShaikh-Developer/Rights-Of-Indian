import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SimplifiedConstitution from "./pages/SimplifiedConstitution";
import ArticlePage from "./pages/ArticlePage";
import GamifiedConstitution from "./pages/GamifiedConstitution";
import Authentication from "./pages/Authentication";
import Profile from "./pages/Profile";

import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";

import "./stylesheets/app.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <header>
        <Navbar user={user} />
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
          path="/gamified-constitution"
          element={
            user ? (
              <GamifiedConstitution />
            ) : (
              <p
                style={{
                  padding: "1rem",
                  height: "70vh",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                Sign in to Access Gamified Constitution!
              </p>
            )
          }
        />

        <Route
          path="/authentication"
          element={user ? <Profile user={user} /> : <Authentication />}
        />
        <Route
          path="/profile"
          element={user ? <Profile user={user} /> : <Authentication />}
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
