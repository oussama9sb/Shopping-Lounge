"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Checkout from "@/components/Checkout";

const Home = () => {
  const params = useSearchParams();

  useEffect(() => {
    console.log(params.get("store"));
  }, [params]);

  return <Checkout />;
};

export default Home;
