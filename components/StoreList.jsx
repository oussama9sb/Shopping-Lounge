"use client";

import { useEffect, useState } from "react";
import StoreItem from "./StoreItem";
import { getStore } from "@/services/apiStore";
import { useSearchParams } from "next/navigation";
import { LoadingSpinner } from "./LoadingSpinner";

const StoreList = () => {
  const [loading, setLoading] = useState(true);
  const [storeList, setStoreList] = useState([]);
  const [category, setCategory] = useState("");

  const router = useSearchParams();

  useEffect(() => {
    try {
      async function getStores() {
        const data = await getStore();
        setStoreList(data);

        // console.log("store", data);
      }
      const currentCategory = router.get("category") || "All";
      setCategory(currentCategory);

      getStores();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [router]);

  const word = category;
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold">
        Featured{" "}
        <span className="font-bold text-yellow-400">{capitalized} Stores</span>
      </h2>
      <h4 className="text-red-500 font-semibold">
        ({storeList.length} Results)
      </h4>
      {loading && (
        <div className="w-full flex justify-center">
          <LoadingSpinner />
        </div>
      )}
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {storeList.map((feature, i) => (
          <StoreItem store={feature} key={i} />
        ))}
      </div>
    </section>
  );
};

export default StoreList;
