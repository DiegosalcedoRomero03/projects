import React, { useState } from 'react';
import { ModelSidebar } from './ModelSidebar';

export interface Model {
  id: string;
  name: string;
  description: string;
  image: string;
  placeholder?: string;
}

interface ModelCardProps {
  model: Model;
  onAddToCart: (id: string, name: string, image: string, qty: number, placeholder?: string) => void;
}

export const ModelCard: React.FC<ModelCardProps> = ({ model, onAddToCart }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleAddToCart = (qty: number) => {
    onAddToCart(model.id, model.name, model.image, qty, model.placeholder);
    setShowSidebar(false);
  };

  return (
    <>
      <div
        className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden group"
        onClick={() => setShowSidebar(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setShowSidebar(true)}
      >
        <div className="card-media overflow-hidden bg-gray-100 h-48">
          {model.image ? (
            <img src={model.image} alt={model.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
          ) : model.placeholder ? (
            <div dangerouslySetInnerHTML={{ __html: model.placeholder }} className="w-full h-full flex items-center justify-center" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">Sin imagen</div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900">{model.name}</h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{model.description}</p>
          <button
            className="select mt-4 w-full px-4 py-2 bg-gradient-primary text-white rounded hover:shadow-lg transition font-medium duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setShowSidebar(true);
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
      {showSidebar && (
        <ModelSidebar
          model={model}
          onClose={() => setShowSidebar(false)}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
};
