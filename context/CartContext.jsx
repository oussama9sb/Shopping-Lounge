"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [updateCart, setUpdateCart] = useState(false);
  return (
    <CartContext.Provider value={{ updateCart, setUpdateCart }}>
      {children}
    </CartContext.Provider>
  );
};
