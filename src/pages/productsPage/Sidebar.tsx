"use client";
import React, { useState } from "react";
import { useGetCategories } from "@/apis/categories";
import AddCategoryModal from "./AddCategoryModal";
import UIButton from "@/components/widgets/UIButton";
import { ICategory } from "@/interfaces/dataInterfaces";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarSkeleton from "@/components/common/loaders/SidebarSkeleton";

const Sidebar = () => {
  const pathname = usePathname();
  const { isLoading, data } = useGetCategories();

  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);

  return (
    <div className="border-r border-slate-800 h-full p-8">
      <AddCategoryModal isOpen={isAddCategoryModalOpen} onClose={() => setIsAddCategoryModalOpen(false)} />
      <p className="text-xl font-medium mb-4">Categories</p>
      {isLoading ? (
        <div>
          {Array.from({ length: 4 }).map((_, index) => (
            <SidebarSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div>
          <div className="w-full">
            <Link href={`/products/all`}>
              <p className={`w-full py-1.5 px-3 my-1 rounded-md transition-all duration-200 ${pathname?.includes("/products/all") ? "bg-gray-800 hover:bg-gray-900" : "bg-transparent hover:bg-gray-800"}`}>All</p>
            </Link>
          </div>
          {data?.data.map((category: ICategory) => (
            <div key={category._id} className="w-full flex items-center justify-between gap-x-2">
              <Link href={`/products/${category.slug}`} className="w-full">
                <p className={`w-full p-1.5 px-3 my-1 rounded-md transition-all duration-200 ${pathname?.includes(`/products/${category.slug}`) ? "bg-gray-800 hover:bg-gray-900" : "bg-transparent hover:bg-gray-800"}`}>{category.name}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
      <UIButton className="w-full mt-8" onClick={() => setIsAddCategoryModalOpen(true)}>
        Add Category
      </UIButton>
    </div>
  );
};

export default Sidebar;
