"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { LucideShoppingBasket, Minus, Plus, ShoppingCart } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { addToCart } from "@/services/apiUserCart";
import Image from "next/image";

const CollectionSection = ({ store }) => {
  const [collectionItemList, setCollectionItemList] = useState([]);
  const { user } = useUser();

  const filterCollection = (category) => {
    const result = store?.collection.filter(
      (item) => item.category === category,
    );
    setCollectionItemList(result[0]);
  };

  const addToCartHandler = async (item) => {
    // console.log("item", item);
    try {
      toast("Adding to Cart", {
        action: {
          label: <ShoppingCart size={17} />,
        },
      });
      const data = {
        email: user?.primaryEmailAddress.emailAddress,
        productName: item?.name,
        productDescription: item?.description,
        productImage: item?.productImage.url,
        price: item?.price,
      };

      // console.log("data", data);

      const res = await addToCart(data);
      console.log("res", res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    store?.collection && filterCollection(store?.collection[0]?.category);
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 mt-6">
      {/* Collections */}
      <div className="flex flex-col mr-10 gap-2">
        {store?.collection?.map((item, i) => (
          <Button
            key={i}
            variant="ghost"
            onClick={() => filterCollection(item.category)}
            className="flex justify-start bg-white hover:bg-yellow-400 rounded-lg font-bold focus-within:bg-yellow-400 max-w-xs"
          >
            {item.category}
          </Button>
        ))}
      </div>
      <div className="col-span-4 md:col-span-3">
        <h4 className="font-bold text-xl mt-8 md:mt-0 mb-3">
          {collectionItemList.category}{" "}
          <span className="text-yellow-400">Collection</span>{" "}
        </h4>
        {/* Collection Item */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 gap-3">
          {collectionItemList?.collectionItem?.map((item, i) => (
            <div
              key={i}
              className="p-4 flex flex-col max-sm:max-w-60 sm:flex-row gap-3 rounded-2xl shadow-slate-900/5 bg-white"
            >
              <Image
                src={item?.productImage?.url}
                alt={item.name}
                width={220}
                height={220}
                className="object-cover aspect-square rounded-xl bg-[#f9f4ec]"
              />
              <div>
                <h4 className="text-xl font-bold">{item.name}</h4>
                <h5 className="font-semibold text-md">${item.price}</h5>
                <p className="text-sm text-gray-500">{item.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex gap-1.5 bg-yellow-100 rounded-full ring-1 ring-yellow-400 p-[3px]">
                    <Minus className="bg-white rounded-full p-1 ring-1 ring-yellow-100 cursor-pointer" />
                    0
                    <Plus className="bg-yellow-400 rounded-full p-1 ring-1 ring-yellow-400 cursor-pointer" />
                  </div>
                  <LucideShoppingBasket
                    size={31}
                    onClick={() => addToCartHandler(item)}
                    className="bg-yellow-400 rounded-full py-1 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
