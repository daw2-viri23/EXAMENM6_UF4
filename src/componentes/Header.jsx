import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Examen UF4 M6</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/card" className="hover:text-gray-400">Vista Cartas</Link></li>
            <li><Link to="/tabla" className="hover:text-gray-400">Tabla</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
