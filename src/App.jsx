// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PropertyList from "./components/PropertyList";
import CardDetail from "./pages/CardDetail";

function App() {
  return (
    <div className="max-w-screen-2xl md:mx-auto">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/property-list" element={<PropertyList />} />
          {/* Route for PropertyList */}
          <Route path="/card-detail/:id" element={<CardDetail />} />
          {/* Route for CardDetail */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
