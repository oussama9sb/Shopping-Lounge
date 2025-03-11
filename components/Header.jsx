"use client";

import { useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import { LoadingSpinner } from "./LoadingSpinner";
import { CartContext } from "@/context/CartContext";
import { getUserCart } from "@/services/apiUserCart";

const Header = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { updateCart, setUpdateCart } = useContext(CartContext);

  useEffect(() => {
    try {
      async function getUpdatedCart() {
        const data = await getUserCart();
        setUpdateCart(data);
      }
      user && getUpdatedCart();
    } catch (error) {
      console.error(error);
    }
  }, [updateCart, setUpdateCart, user]);

  if (!isLoaded) {
    return (
      <div className="w-full flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className=" h-12 flex justify-between items-center">
      {/* logo */}
      <Link href={"/"} className="flex flex-col">
        <span className="text-xl uppercase font-bold leading-3">Shorpora</span>
        <span className="text-yellow-500 font-semibold text-xs uppercase tracking-[2.3px] mt-1">
          MarketPlace
        </span>
      </Link>
      {/* searchbar */}
      <div className=" hidden md:w-[50%] md:flex md:justify-center md:items-start">
        <div className="w-[70%] relative">
          <input
            className="w-[100%] h-12 outline-none pl-2 rounded-full"
            type="text"
            placeholder="Type here..."
          />
          <Search className="absolute cursor-pointer top-1 right-1 bg-yellow-400 h-10 w-10 p-3 rounded-full" />
        </div>
      </div>
      {/* User Profile and Button */}
      {isSignedIn ? (
        <div className="flex gap-8 items-center relative">
          <div className="flex gap-2 items-center cursor-pointer bg-white p-2 rounded-full">
            <ShoppingBasket size={27} />
          </div>
          <span className="absolute top-0 left-8  px-1 rounded-full bg-yellow-400 text-xs font-semibold">
            0
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={user?.imageUrl}
                alt={user?.firstName}
                width={41}
                height={41}
                className="rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuItem>
                <SignOutButton>
                  <Button>Sign out</Button>
                </SignOutButton>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="w-[10rem] flex gap-2">
          <SignInButton mode="redirect">
            <Button
              variant="outline"
              className="flex rounded-full text-black text-sm font-normal px-4"
            >
              Login
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button className="flex rounded-full text-sm px-4">Sign Up</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
};

export default Header;
