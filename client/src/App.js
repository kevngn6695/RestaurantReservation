import React, { useState, useEffect, Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<Loading className={`loading-container`} />}>
        <Navbar />
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home className="home-page-contianer" />}
            />

            <Route
              exact
              path="/booking"
              element={<Booking className="booking-page-contianer" />}
            />

            <Route
              exact
              path="/payment"
              element={<Payment className="payment-page-contianer" />}
            />
          </Routes>
        </Router>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
