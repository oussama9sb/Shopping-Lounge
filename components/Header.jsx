"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SignInButton, SignUpButton } from "@clerk/nextjs";

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

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
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
          <SignInButton>
            <Button className="flex rounded-full text-sm px-4">Sign Up</Button>
          </SignInButton>
        </div>
      )}
    </div>
  );
};

export default Header;
