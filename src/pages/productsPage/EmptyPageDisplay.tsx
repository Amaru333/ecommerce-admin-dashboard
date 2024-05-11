import UIButton from "@/components/widgets/UIButton";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], style: ["normal"], subsets: ["latin"] });

const EmptyPageDisplay = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className={poppins.className}>
        <p className="text-7xl font-bold">this is empty</p>
        <p className="text-xl my-2 font-light">for now...</p>
        <p className="text-3xl">start by adding items</p>
        <div className="flex justify-center mt-20">
          <Link href="/products/add">
            <UIButton className="px-20">Add Item</UIButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyPageDisplay;
