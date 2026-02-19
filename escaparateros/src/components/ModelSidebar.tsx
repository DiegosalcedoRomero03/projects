import React, { useState } from 'react';
import type { Model } from './ModelCard';

interface ModelSidebarProps {
  model: Model;
  onClose: () => void;
  onAddToCart: (qty: number) => void;
}

export const ModelSidebar: React.FC<ModelSidebarProps> = ({ model, onClose, onAddToCart }) => {
  const [qty, setQty] = useState(1);

  const handleQtyChange = (delta: number) => {
    setQty((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    onAddToCart(qty);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-lg z-50 transform transition-transform flex flex-col"
        role="dialog"
        aria-hidden="false"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sidebar-close absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
          aria-label="Cerrar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 pt-12">
          {/* Media */}
          <div className="sidebar-media mb-6 bg-gray-100 rounded-lg overflow-hidden h-48">
            {model.image ? (
              <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
            ) : model.placeholder ? (
              <div dangerouslySetInnerHTML={{ __html: model.placeholder }} className="w-full h-full flex items-center justify-center" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">Sin imagen</div>
            )}
          </div>

          {/* Name */}
          <h2 className="sidebar-name text-2xl font-bold text-gray-900 mb-2">{model.name}</h2>

          {/* Description */}
          <p className="sidebar-desc text-gray-600 text-sm mb-6">{model.description}</p>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 space-y-4">
          {/* Quantity Control */}
          <div className="flex items-center justify-between bg-gray-100 rounded-lg p-3">
            <button
              className="qty-decrease px-3 py-1 hover:bg-gray-200 rounded transition"
              onClick={() => handleQtyChange(-1)}
              aria-label="Disminuir cantidad"
            >
              −
            </button>
            <span className="sidebar-qty font-bold text-lg min-w-12 text-center">{qty}</span>
            <button
              className="qty-increase px-3 py-1 hover:bg-gray-200 rounded transition"
              onClick={() => handleQtyChange(1)}
              aria-label="Aumentar cantidad"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            className="sidebar-add w-full px-4 py-3 bg-gradient-primary text-white font-bold rounded-lg hover:shadow-lg transition duration-300"
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};
