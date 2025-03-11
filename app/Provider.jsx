"use client";

import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { CartContextProvider } from "@/context/CartContext";
import Header from "@/components/Header";

const Provider = ({ children }) => {
  return (
    <>
      <CartContextProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Toaster />
          {children}
        </Suspense>
      </CartContextProvider>
    </>
  );
};

export default Provider;
