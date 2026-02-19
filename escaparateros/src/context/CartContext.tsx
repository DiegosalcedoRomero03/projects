import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  qty: number;
  image: string;
  placeholder?: string;
}

export interface CartContextType {
  cart: Record<string, CartItem>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Record<string, CartItem>>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : {};
  });

  const saveCart = (newCart: Record<string, CartItem>) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const addToCart = (item: CartItem) => {
    const newCart = { ...cart };
    if (newCart[item.id]) {
      newCart[item.id].qty += item.qty;
    } else {
      newCart[item.id] = item;
    }
    saveCart(newCart);
  };

  const removeFromCart = (id: string) => {
    const newCart = { ...cart };
    delete newCart[id];
    saveCart(newCart);
  };

  const updateQuantity = (id: string, qty: number) => {
    const newCart = { ...cart };
    if (qty <= 0) {
      delete newCart[id];
    } else {
      newCart[id].qty = qty;
    }
    saveCart(newCart);
  };

  const clearCart = () => {
    saveCart({});
  };

  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
