
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Recipes from "./pages/Recipes";
import Footer from "./components/footer/Footer";

function App() {

  return (

    <Router>


      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>

  );
}

export default App;
