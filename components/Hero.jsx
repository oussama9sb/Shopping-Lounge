import { ArrowRight, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-[1440px] m-auto">
      <Image
        className="bg-cover w-full bg-center bg-no-repeat h-[772px] mt-3 rounded-xl"
        src={
          "https://dzbtxopinstwsdhdtqiv.supabase.co/storage/v1/object/sign/products/bg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2JmODk5MWQ3LWI4OTctNGJkOC1hZjk4LWFkNWI3YTQ0ZjBlNSJ9.eyJ1cmwiOiJwcm9kdWN0cy9iZy5wbmciLCJpYXQiOjE3NDYwMjQ2OTksImV4cCI6MTc3NzU2MDY5OX0.t0k2jlic4Bge6nAbEqvIIz8gkw-Qhz890gedRgUaD88"
        }
        alt="background image"
        height={500}
        width={500}
      />
      <div className="absolute max-w-[785px] px-8 top-32 sm:top-60">
        <h2 className=" text-4xl md:text-6xl font-bold leading-tight">
          Elevate your wardrobe with trendy fashion from{" "}
          <span className="bg-white px-4 inline-block mt-[3px] rounded-full">
            Shopping-Lounge
          </span>{" "}
        </h2>
        <div className="flex flex-col-reverse md:flex-row gap-8 mt-40">
          <Link
            href={"/"}
            className="flex justify-between items-center bg-black rounded-full h-12 w-[80%] pl-8 pr-3 py-1 max-w-[322px]"
          >
            <span className="text-white">Latest Product</span>
            <div className="flex items-center gap-2">
              <div className="bg-white px-1.5 py-1.5 rounded-full">
                <House />
              </div>
              <div className="bg-white px-1.5 py-1.5 rounded-full">
                <ArrowRight />
              </div>
            </div>
          </Link>
          <p className="text-sm">
            Your ultimate online marketplace connecting buyers and sellers with
            ease. Discover diverse stores, exclusive products seamless shopping.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
