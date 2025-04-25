"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { getStore } from "@/services/apiStore";
import { LoadingSpinner } from "@/components/LoadingSpinner";

import StoreDetails from "@/components/StoreDetails";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [storeDetails, setStoreDetails] = useState([]);

  const params = usePathname();

  const route = params.split("/")[2];

  useEffect(() => {
    try {
      async function getStoreDetails() {
        const data = await getStore();
        setStoreDetails(data);
      }
      getStoreDetails();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <section className="max-w-[1440px] m-auto">
      {loading && (
        <div className="h-[100vh] flex justify-center items-center">
          <LoadingSpinner className="w-8 h-8" />
        </div>
      )}
      {storeDetails.map((store) => {
        if (store.storeSlug === route)
          return <StoreDetails key={store.id} store={store} />;
      })}
    </section>
  );
};

export default Home;
