"use client";

import { Suspense } from "react";
import Header from "@/components/Header";

const Provider = ({ children }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        {children}
      </Suspense>
    </>
  );
};

export default Provider;
