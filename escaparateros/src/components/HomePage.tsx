import React from 'react';
import { useCart } from '../context/CartContext';
import type { CartItem } from '../context/CartContext';
import { ModelCard } from './ModelCard';
import type { Model } from './ModelCard';

export const HomePage: React.FC = () => {
  const { addToCart } = useCart();

  // Sample models data - replace with your actual data
  const models: Model[] = [
    {
      id: '1',
      name: 'Modelo Clásico',
      description: 'Un hermoso modelo clásico con detalles elegantes.',
      image: 'https://via.placeholder.com/300x300?text=Modelo+Clásico',
    },
    {
      id: '2',
      name: 'Modelo Moderno',
      description: 'Diseño contemporáneo y minimalista.',
      image: 'https://via.placeholder.com/300x300?text=Modelo+Moderno',
    },
    {
      id: '3',
      name: 'Modelo Vintage',
      description: 'Inspirado en los estilos del pasado con toque actual.',
      image: 'https://via.placeholder.com/300x300?text=Modelo+Vintage',
    },
    {
      id: '4',
      name: 'Modelo Premium',
      description: 'Calidad superior con acabados de lujo.',
      image: 'https://via.placeholder.com/300x300?text=Modelo+Premium',
    },
  ];

  const handleAddToCart = (id: string, name: string, image: string, qty: number, placeholder?: string) => {
    const item: CartItem = {
      id,
      name,
      qty,
      image,
      placeholder,
    };
    addToCart(item);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Escaparateros</h1>
        <p className="text-xl text-gray-600">Descubre nuestros modelos exclusivos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {models.map((model) => (
          <ModelCard
            key={model.id}
            model={model}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};
