"use client";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import React from "react";
import EmptyPageDisplay from "./EmptyPageDisplay";

const ProductsDisplay = () => {
  const { slug } = useParams() as Params;
  return (
    <div className="h-full">
      <EmptyPageDisplay />
    </div>
  );
};

export default ProductsDisplay;
