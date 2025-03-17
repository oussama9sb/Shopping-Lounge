import { Rating as ReactRating } from "@smastrom/react-rating";
import Image from "next/image";

const ReviewList = ({ reviewList }) => {
  // console.log("ReviewList component", reviewList);
  return (
    <div className="flex flex-col gap-5 bg-white px-4 py-6 rounded-md shadow-slate-900/5 shadow-md">
      {reviewList.map((review, i) => (
        <div key={i} className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <Image
              src={review.profileImage}
              alt="Profile Image"
              width={41}
              height={41}
              className="rounded-full"
            />
            <div>
              <h5 className="text-md font-semibold">{review.userName}</h5>
              <p className="text-xs text-gray-500">
                {new Date(review.created_at).toLocaleString()}
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm text-zinc-900">{review.reviewText}</p>
            <ReactRating
              style={{ maxWidth: 80 }}
              value={review.star}
              isDisabled={true}
              className="mt-1"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
