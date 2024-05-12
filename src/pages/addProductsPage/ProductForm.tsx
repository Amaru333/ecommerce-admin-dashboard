"use client";
import FormInput from "@/components/widgets/FormInput";
import FormTextArea from "@/components/widgets/FormTextArea";
import React, { useState } from "react";
import VariantModal from "./VariantModal";
import { IProductInput, IVariantInput } from "@/interfaces/productPageInterfaces";

const ProductForm = () => {
  const [isVariantModalOpen, setIsVariantModalOpen] = useState(false);
  const [product, setProduct] = useState<IProductInput>({
    name: "",
    slug: "",
    description: "",
    variants: [],
  });

  const addVariant = (variant: IVariantInput) => {
    setProduct({ ...product, variants: [...product.variants, variant] });
  };

  return (
    <div className="p-8 max-w-screen-lg">
      <VariantModal isOpen={isVariantModalOpen} onClose={() => setIsVariantModalOpen(false)} variants={product.variants} addVariant={addVariant} />
      <p className="text-2xl font-semibold mb-6">Add Product</p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <FormInput label="Product Name" id="name" theme="dark" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
        <FormInput label="Product Slug" id="slug" theme="dark" value={product.slug} onChange={(e) => setProduct({ ...product, slug: e.target.value })} />
        <div className="col-span-2">
          <FormTextArea label="Product Description" id="description" theme="dark" rows={4} value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />
        </div>
        {product.variants.length > 0 &&
          product.variants.map((variant, index) => (
            <div key={index} className="border border-slate-400 p-4 rounded-xl">
              <p className="text-lg font-semibold">Variant {index + 1}</p>
              <p className="text-sm text-slate-400">Suffix: {variant.suffix}</p>
              <p className="text-sm text-slate-400">Price: {variant.price}</p>
              <p className="text-sm text-slate-400">Stock: {variant.stock}</p>
              <p className="text-sm text-slate-400">Color: {variant.color}</p>
            </div>
          ))}
        <div className="mt-4">
          <button className="border border-dashed border-slate-400 text-slate-400 rounded-xl hover:border-slate-50 hover:text-slate-50 w-full aspect-square transition-all duration-200" onClick={() => setIsVariantModalOpen(true)}>
            + Add a variant
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
