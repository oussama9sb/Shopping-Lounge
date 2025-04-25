"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import { getCategoryList } from "@/services/apiCategoryList";
import { LoadingSpinner } from "./LoadingSpinner";

const CategoryList = () => {
  const [loading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const router = useSearchParams();

  useEffect(() => {
    try {
      async function getCategories() {
        const data = await getCategoryList();
        setCategoryList(data);
        setSelectedCategory(router.get("category"));
      }
      getCategories();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [router]);

  return (
    <section className="max-w-[1440px] m-auto grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:flex lg:flex-row lg:justify-around mt-24">
      {loading && (
        <div className="w-full flex justify-center">
          <LoadingSpinner />
        </div>
      )}
      {categoryList?.map((category) => (
        <Link
          key={category?.id}
          href={`?category=${category.slug}`}
          scroll={false}
          className="justify-items-center"
        >
          <div className="flex flex-col items-center shadow-lg bg-zinc-50 rounded-md w-1/2 md:w-full px-4 py-5">
            <Image
              src={category.icon}
              alt={category.name}
              width={155}
              height={155}
              className="size-auto"
            />
            <span
              className={`font-semibold mt-2 ${category.slug === selectedCategory ? "underline decoration-yellow-400 underline-offset-4" : ""}`}
            >
              {category.name}
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default CategoryList;
