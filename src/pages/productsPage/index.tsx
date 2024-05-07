import Sidebar from "@/components/common/sidebar";
import React from "react";

const ProductsPage = () => {
  return (
    <div className="grid grid-cols-12 min-h-[calc(100vh-73px)]">
      <div className="col-span-2 h-full">
        <Sidebar />
      </div>
    </div>
  );
};

export default ProductsPage;
