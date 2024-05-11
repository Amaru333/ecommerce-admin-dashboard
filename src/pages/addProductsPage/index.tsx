import FormInput from "@/components/widgets/FormInput";
import FormTextArea from "@/components/widgets/FormTextArea";
import React from "react";

const AddProductsPage = () => {
  return (
    <div className="p-8 max-w-screen-lg">
      <p className="text-2xl font-semibold mb-6">Add Product</p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <FormInput label="Product Name" id="name" theme="dark" />
        <FormInput label="Product Slug" id="slug" theme="dark" />
        <div className="col-span-2">
          <FormTextArea label="Product Description" id="description" theme="dark" rows={4} />
        </div>
        <div className="mt-4">
          <button className="border border-dashed border-slate-400 text-slate-400 rounded-xl hover:border-slate-50 hover:text-slate-50 w-full aspect-square transition-all duration-200">+ Add a variant</button>
        </div>
      </div>
    </div>
  );
};

export default AddProductsPage;
