import Link from "next/link";
import FooterItem from "./FooterItem";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 px-20 py-20 bg-stone-900 rounded-t-md flex flex-col items-center">
      <div className="rounded-md grid grid-rows-1 md:grid-rows-2 justify-items-center lg:flex">
        <Link
          href={"/"}
          className="flex h-full mb-4 flex-col md:items-start lg:items-start lg:flex-col mr-6 w-full gap-4 lg:max-w-[33%]"
        >
          <div className="flex flex-col">
            <span className="text-xl text-zinc-50 uppercase font-bold leading-3">
              Shorpora
            </span>
            <span className="text-yellow-500 font-semibold text-xs uppercase tracking-[2.3px] lg:mt-1 lg:mb-10">
              MarketPlace
            </span>
          </div>
          <p className="text-xs md:text-sm text-stone-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus at
            eius, voluptates sunt expedita blanditiis beatae nihil voluptatem
            sit veniam suscipit rem aspernatur harum facere reiciendis
            accusantium soluta. Animi, ipsa!
          </p>
        </Link>

        <div className="grid grid-cols-2 gap-4 md:flex md:justify-between w-full">
          <FooterItem title="Quick Links">
            <li>Home</li>
            <li>Categories</li>
            <li>Shop</li>
            <li>Contact Us</li>
          </FooterItem>
          <FooterItem title="E-commerce Links">
            <li>Terms of service</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
          </FooterItem>
          <FooterItem title="Contact Us">
            <li>Email:support@shopora.com</li>
            <li>Phone:+1234567890</li>
            <li>Address: 123 Glam Street, City, Country</li>
          </FooterItem>
        </div>

        {/* Made with love */}
      </div>
      <div className="h-[0.5px] bg-zinc-300 w-[65%] mt-16"></div>
      <p className="text-stone-400 mt-5 flex justify-center items-center">
        Made with
        <span className="px-1">
          <Heart size={17} fill="gray" />
        </span>
        By Oussama
      </p>
    </footer>
  );
};

export default Footer;
