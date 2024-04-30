import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";

import Home from "./components/Home";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
