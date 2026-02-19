import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent">
          Escaparateros
        </Link>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Inicio
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Sobre Nosotros
          </Link>
        </nav>

        <Link
          to="/cart"
          className="relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-lg transition duration-300"
          aria-label="Ver carrito"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="20" r="1" fill="currentColor" />
            <circle cx="18" cy="20" r="1" fill="currentColor" />
          </svg>
          <span className="text-sm font-medium">Carrito ({totalItems})</span>
        </Link>
      </div>
    </header>
  );
};
