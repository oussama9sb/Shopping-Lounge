import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const StoreItem = ({ store }) => {
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
              <span>{5.0}</span>
              <span>{"sotre type"}</span>
            </div>
            <span className="font-semibold">{store.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoreItem;
