import { useContext, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CartContext } from "@/context/CartContext";
import { deleteAllCartItems, getUserCart } from "@/services/apiUserCart";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const { updateCart, setUpdateCart } = useContext(CartContext);

  console.log("cart", cart);

  const arr = cart.map((arr) => arr.id);

  console.log(arr);

  const calcSubtotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  const calcTaxAmount = () => {
    const total = (calcSubtotal() * 5) / 100;
    return total.toFixed(2);
  };

  const totalAmount = () => {
    const total = +calcSubtotal() + +calcTaxAmount() + 5;
    return total.toFixed(2);
  };

  useEffect(() => {
    try {
      async function getUpdatedCart() {
        const data = await getUserCart();
        setCart(data);
      }
      getUpdatedCart();
    } catch (error) {
      console.error(error);
    }
  }, [updateCart]);

  async function handleOrder() {
    await deleteAllCartItems(arr);
    setUpdateCart((prev) => !prev);
  }

  return (
    <div className="max-w-[1440px] m-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
      <div className="">
        <h2 className="text-3xl font-semibold">
          Delivery{" "}
          <span className="text-yellow-400 font-normal">Information</span>
        </h2>
        <form
          action="submit"
          className="flex flex-col gap-4 mt-4 [&>*]:h-10 [&>*]:rounded-md [&>*]:shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] [&>*]:px-4 [&>*]:outline-none"
        >
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Address" />
        </form>
      </div>
      <div className="">
        <h2 className="flex items-center gap-2 text-3xl font-semibold">
          Cart <span className="text-yellow-400 font-normal">Total</span>
          <span className="inline-block text-xl font-semibold">
            ({cart?.length})
          </span>{" "}
        </h2>
        {/* Pay Pal */}
        <div className="mt-5 [&_div]:mb-6 [&>*]:flex [&>*]:gap-4 [&>*]:justify-between [&>*]:items-center [&_span]:text-gray-500 [&_span]:font-semibold [&_p]:font-semibold [&_p]:text-xl [&_p]:text-zinc-900">
          <div>
            <p>SubTotal:</p>
            <span>${calcSubtotal()}</span>
          </div>
          <div>
            <p>Delivery Charges:</p>
            <span>$5.00</span>
          </div>
          <div>
            <p>Tax Amount (5%):</p>
            <span>${calcTaxAmount()}</span>
          </div>
          <div>
            <p>Total:</p>
            <span>${totalAmount()}</span>
          </div>
        </div>
        <Button
          onClick={handleOrder}
          className="text-lg font-semibold tracking-wider"
        >
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
