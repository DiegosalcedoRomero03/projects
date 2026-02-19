import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems } = useCart();

  const items = Object.values(cart);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="cart-empty mb-8">
            <svg className="w-24 h-24 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-600 mb-8">No has agregado ningún producto aún.</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gradient-primary text-white font-bold rounded-lg hover:shadow-lg transition duration-300"
          >
            Continuar comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Tu carrito ({totalItems} items)</h1>

        {/* Cart Items */}
        <div className="cart-items bg-white rounded-lg shadow mb-8">
          <ul className="divide-y divide-gray-200">
            {items.map((item) => (
              <li key={item.id} className="cart-item p-6 flex gap-6">
                {/* Thumbnail */}
                <div className="cart-thumb w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : item.placeholder ? (
                    <div dangerouslySetInnerHTML={{ __html: item.placeholder }} className="w-full h-full flex items-center justify-center" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">Sin imagen</div>
                  )}
                </div>

                {/* Item Info */}
                <div className="cart-meta flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.name}</h3>
                  <div className="cart-qty text-sm text-gray-600 mb-4">
                    Cantidad: <span className="font-semibold">{item.qty}</span>
                  </div>

                  {/* Quantity and Remove */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.qty - 1)}
                        className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
                        aria-label="Disminuir cantidad"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-12 px-2 py-1 border border-gray-300 rounded text-center"
                      />
                      <button
                        onClick={() => updateQuantity(item.id, item.qty + 1)}
                        className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="cart-actions ml-auto px-4 py-2 bg-red-100 text-red-700 font-medium rounded hover:bg-red-200 transition btn remove"
                      data-model={item.id}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-4 justify-between">
          <button
            onClick={clearCart}
            className="cart-clear px-6 py-3 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition"
          >
            Limpiar carrito
          </button>
          <button
            onClick={() => alert('Funcionalidad de pago no implementada en la plantilla.')}
            className="cart-checkout px-6 py-3 bg-gradient-primary text-white font-bold rounded-lg hover:shadow-lg transition duration-300"
          >
            Proceder al pago
          </button>
        </div>

        {/* Continue Shopping */}
        <div className="mt-8 text-center">
          <Link to="/" className="text-blue-600 hover:underline font-medium">
            ← Continuar comprando
          </Link>
        </div>
      </div>
    </div>
  );
};
