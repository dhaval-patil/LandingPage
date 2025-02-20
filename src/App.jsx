import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home"; // Import the Home component

import RedPage from "./components/RedPage";
import BluePage from "./components/bluePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   {/* Home Page Route */}
        <Route path="/page1" element={<RedPage />} />  {/* Page 1 Route */}
        <Route path="/page2" element={<BluePage/>} />  {/* Page 1 Route */}
        
      </Routes>
    </Router>
  );
}

export default App;
