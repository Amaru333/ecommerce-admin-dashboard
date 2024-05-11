import React from "react";
import Sidebar from "./Sidebar";
import ProductsDisplay from "./ProductsDisplay";

const ProductsPage = () => {
  return (
    <div className="grid grid-cols-12 min-h-[calc(100vh-73px)]">
      <div className="col-span-2 h-full">
        <Sidebar />
      </div>
      <div className="col-span-10">
        <ProductsDisplay />
      </div>
    </div>
  );
};

export default ProductsPage;
