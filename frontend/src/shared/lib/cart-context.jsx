import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product, color) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.color.name === color.name);
      if (existing) {
        return prev.map(item => item.id === product.id && item.color.name === color.name ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, color, qty: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id, colorName) => setCart(prev => prev.filter(item => !(item.id === id && item.color.name === colorName)));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);
