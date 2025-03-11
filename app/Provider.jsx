"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

const Provider = ({ children }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Toaster />
        {children}
      </Suspense>
    </>
  );
};

export default Provider;
