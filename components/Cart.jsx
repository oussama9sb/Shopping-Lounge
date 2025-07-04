"use client";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { X } from "lucide-react";
import { Button } from "./ui/button";
import { deleteCartItem } from "@/services/apiUserCart";
import { CartContext } from "@/context/CartContext";

const Cart = ({ cart }) => {
  const { setUpdateCart } = useContext(CartContext);

  const CalculateCartAmount = () => {
    let total = 0;
    cart.forEach((item) => (total += item.price));
    return total.toFixed(2);
  };

  async function handleDeleteCartItem(id) {
    await deleteCartItem(id);
    setUpdateCart((prev) => !prev);
  }

  return (
    <div>
      <h4 className="text-2xl font-bold mb-5">{cart[0]?.storeName}</h4>
      <div className="flex flex-col gap-2">
        <h5 className="font-semibold mb-1">My Order</h5>
        {cart?.map((item, i) => (
          <div key={i} className="flex justify-between gap-2">
            <div className="flex justify-between items-center gap-2">
              <Image
                src={item.productImage}
                alt={item.productName}
                width={33}
                height={40}
                className="h-[44px] w-[44px] rounded-lg object-cover"
              />
              <h5 className="text-sm text-zinc-800">{item.productName}</h5>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm text-gray-500">${item.price}</p>
              <X
                size={17}
                color="red"
                className="cursor-pointer"
                onClick={() => handleDeleteCartItem(item.id)}
              />
            </div>
          </div>
        ))}
        <Link href={`/checkout?store=${cart[0]?.storeName}`}>
          <Button className="mt-2">
            Checkout
            <span className="text-[13px] font-bold">
              ${CalculateCartAmount()}
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
