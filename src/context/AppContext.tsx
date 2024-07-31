import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '../types/Product';
import { CartItemProps } from '../types/CartItemsProps';

type Props = {
  children: React.ReactNode;
};

type AppContextType = {
  cart: CartItemProps[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string | number) => void;
    updateCartQuantity: (productId: string | number, quantity: number) => void;
  calculateTotalPrice: () => number;
  clearCart: () => void;
};

const AppContext = createContext<AppContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartQuantity: () => {},
  calculateTotalPrice: () => 0,
  clearCart: () => {},
});

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<CartItemProps[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string | number) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  }, []);

 const updateCartQuantity = useCallback(
    (productId: string, delta: number) => {
      setCart(currentCart =>
        currentCart.map(cartItem => {
          if (cartItem.product.id === productId) {
            const newQuantity = Math.max(cartItem.quantity + delta, 1);

            return { ...cartItem, quantity: newQuantity };
          }

          return cartItem;
        }),
      );
    },
    [setCart],
  );

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const calculateTotalPrice = useCallback(() => {
    return cart.reduce((total, { product, quantity }) => total + product.price * quantity, 0);
  }, [cart]);

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        calculateTotalPrice,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
