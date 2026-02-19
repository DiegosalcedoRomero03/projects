import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { CartPage } from './components/CartPage';
import { AboutPage } from './components/AboutPage';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <footer className="bg-gray-900 text-white py-8 mt-12">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; 2026 Escaparateros. Todos los derechos reservados.</p>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
