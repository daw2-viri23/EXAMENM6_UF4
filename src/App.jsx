import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import { GlobalProvider } from './context/GlobalContext';
import Home from './vistas/Home';
import Cards from './vistas/Cards';
import Tabla from './vistas/Tabla';
import Footer from './componentes/Footer';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <div className="flex flex-col min-h-screen relative pt-16 pb-16">
          <Header />
          <div className="container mx-auto mt-4 flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/tabla" element={<Tabla />} />
            </Routes>
          </div>
        </div>
        <Footer></Footer>
      </Router>
    </GlobalProvider>
  );
};

export default App;
