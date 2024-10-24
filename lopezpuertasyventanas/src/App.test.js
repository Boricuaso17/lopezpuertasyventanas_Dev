import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
// import SobreNosotros from './components/SobreNosotros/SobreNosotros'; // Example pages
// import Puertas from './components/Puertas/Puertas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sobreNosotros" element={<SobreNosotros />} />
        <Route path="/puertas" element={<Puertas />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
