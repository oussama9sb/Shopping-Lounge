"use client";
import { useContext, useEffect, useState } from "react";
import { Rating as ReactRating } from "@smastrom/react-rating";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { useUser } from "@clerk/nextjs";

import { addReview, getReviews } from "@/services/apiReview";
import { toast } from "sonner";
import ReviewList from "./ReviewList";
import { CartContext } from "@/context/CartContext";

const ReviewSection = ({ store }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviewList, setReviewList] = useState([]);
  const { updateCart, setUpdateCart } = useContext(CartContext);
  const { user } = useUser();

  const filterReview = reviewList.filter(
    (review) => review.storeSlug === store.storeSlug,
  );

  async function handleSubmit() {
    if (user === null) return;
    try {
      const data = {
        email: user?.primaryEmailAddress.emailAddress,
        profileImage: user?.imageUrl,
        userName: user?.fullName,
        star: rating,
        reviewText: reviewText,
        storeSlug: store.storeSlug,
      };

      const res = await addReview(data);
      if (res) {
        setRating(0);
        setReviewText("");
      }
      toast("Review added.");
      // console.log("Review res", res);
      setUpdateCart((prev) => !prev);
    } catch (error) {
      console.error("Something went wrong handleSubmit:", error);
    }
  }

  useEffect(() => {
    async function getReviewList() {
      const data = await getReviews();
      setReviewList(data);
      // console.log("Review List", data);
    }
    store && getReviewList();
  }, [store, updateCart]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-10 mt-10">
      {/* Post Review */}
      <div className="flex flex-col items-start gap-2 h-[20rem] p-5 bg-white shadow-md shadow-slate-900/5 min-w-full rounded-sm">
        <h4 className="text-xl text-zinc-800 font-bold">Add Your Review</h4>
        <ReactRating
          style={{ maxWidth: 100 }}
          value={rating}
          onChange={setRating}
        />
        <Textarea
          className="mt-2"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Comment your review."
        />
        <Button
          onClick={handleSubmit}
          disabled={rating === 0 || !reviewText || !user}
        >
          Submit
        </Button>
      </div>
      {/* Review list */}
      <div className="">
        <ReviewList reviewList={filterReview} />
      </div>
    </div>
  );
};

export default ReviewSection;
