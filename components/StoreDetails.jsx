import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import StoreTabs from "./StoreTabs";
import { useEffect, useState } from "react";
import { getReviews } from "@/services/apiReview";

const StoreDetails = ({ store }) => {
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
    <div key={store.id}>
      <div>
        <Image
          src={store.banner}
          alt={store.storeName}
          height={1000}
          width={1000}
          className="h-[211px] w-full object-cover rounded-xl mt-5"
        />
      </div>
      <h4 className="text-2xl font-semibold mt-4">{store.storeName}</h4>
      <div className="flex items-center max-w-[5rem] font-semibold text-gray-500 justify-between mt-5">
        <Star size={17} color="orange" fill="orange" />
        <span>{calculateRating()}</span>
        <span>({filterReview.length})</span>
      </div>
      <div className="flex items-center">
        <MapPin size={17} color="gray" className="mr-2" />
        <p className="text-sm text-gray-500 mt-2 [word-spacing:2px]">
          {store.address}
        </p>
      </div>
      {/* Category About Review */}
      <div>
        <StoreTabs store={store} />
      </div>
    </div>
  );
};

export default StoreDetails;
