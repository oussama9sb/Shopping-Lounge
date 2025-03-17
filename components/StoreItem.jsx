"use client";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getReviews } from "@/services/apiReview";

const StoreItem = ({ store }) => {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    async function getReviewList() {
      const data = await getReviews();
      setReviewList(data);
    }
    store && getReviewList();
  }, [store]);

  const filterReview = reviewList.filter(
    (review) => review.storeSlug === store.storeSlug,
  );

  const calculateRating = () => {
    let total = 0;
    let count = 0;
    filterReview.forEach((review) => {
      total += review.star;
      count++;
    });
    const result = total / count;
    return result ? result.toFixed(1) : "0";
  };

  return (
    <Link href={`/store/${store.storeSlug}`}>
      <div className=" px-4 py-3 flex flex-col rounded-lg bg-zinc-50 shadow-lg cursor-pointer">
        <div className="flex flex-col items-center">
          <Image
            src={store.banner}
            alt={store.storeName}
            height={0}
            width={370}
            priority
            className="h-auto rounded-lg"
          />
        </div>
        <div className="pl-3 pt-2">
          <h5 className="font-bold text-lg">{store.storeName}</h5>
          <div className="flex justify-between">
            <div className="flex font-semibold text-sm text-gray-400 gap-2">
              <Star fill="red" stroke="0" strokeLinecap="round" size={20} />
              <span>{calculateRating()}</span>
              <span>{store.storeType}</span>
            </div>
            <span className="font-semibold">{store.categories[1]}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoreItem;
