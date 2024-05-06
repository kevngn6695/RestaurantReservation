import React, { useState, useEffect, Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Blog from "../pages/Blog";
import Event from "../pages/Event";
import Menu from "../pages/Menu";
import About from "../pages/About";

import { createListRoute } from "../utils/init";

function App() {
  const [loading, setLoading] = useState(true);

  const ListRoute = [createListRoute()];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<Loading className={`loading-container`} />}>
        <Navbar className={`nav-container`} />
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home className="home-pge-contianer" />}
            />

            <Route
              exact
              path="/booking"
              element={<Booking className="booking-pge-contianer" />}
            />

            <Route
              exact
              path="/menu"
              element={<Menu className="menu-pge-contianer" />}
            />

            <Route
              exact
              path="/event"
              element={<Event className="event-pge-contianer" />}
            />

            <Route
              exact
              path="/about"
              element={<About className="about-pge-contianer" />}
            />

            <Route
              exact
              path="/blog"
              element={<Blog className="blog-pge-contianer" />}
            />
          </Routes>
        </Router>
        <Footer className="footer" />
      </Suspense>
    </div>
  );
}

export default App;
