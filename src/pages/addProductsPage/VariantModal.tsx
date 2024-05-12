import FormInput from "@/components/widgets/FormInput";
import UIButton from "@/components/widgets/UIButton";
import UIColorPicker from "@/components/widgets/UIColorPicker";
import UIModal from "@/components/widgets/UIModal";
import UISingleImageUploader from "@/components/widgets/UISingleImageUploader";
import { IVariantInput, IVariantModalProps } from "@/interfaces/productPageInterfaces";
import React, { useState } from "react";
import { FiDollarSign } from "react-icons/fi";

const VariantModal = ({ isOpen, onClose, variants, addVariant }: IVariantModalProps) => {
  const [variant, setVariant] = useState<IVariantInput>({
    suffix: "",
    price: 0,
    stock: 0,
    image: null,
    color: "#aabbcc",
  });
  return (
    <UIModal isOpen={isOpen} onClose={onClose}>
      <p className="text-xl font-semibold">Add a variant</p>
      <FormInput label="Suffix" id="suffix" value={variant.suffix} onChange={(e) => setVariant({ ...variant, suffix: e.target.value })} />
      <div className="grid grid-cols-2 gap-x-4">
        <div className="flex flex-col">
          <FormInput label="Price" id="price" icon={<FiDollarSign />} type="number" value={variant.price} onChange={(e) => setVariant({ ...variant, price: parseInt(e.target.value) })} />
          <FormInput label="Stock" id="stock" type="number" value={variant.stock} onChange={(e) => setVariant({ ...variant, stock: parseInt(e.target.value) })} />
          <div className={`flex flex-col group text-slate-400 transition-all mt-2 focus-within:text-white flex-1`}>
            <label htmlFor="color-preview" className="text-sm pb-1">
              Color Preview
            </label>
            <div className={`w-full h-full flex-1 rounded`} id="color-preview" style={{ backgroundColor: variant.color }}></div>
          </div>
        </div>
        <UIColorPicker id="color-picker" label="Color" value={variant.color} onChange={(e) => setVariant({ ...variant, color: e })} />
      </div>
      <UISingleImageUploader label="Variant Image" image={variant.image} setImage={(image) => setVariant({ ...variant, image })} discardImage={() => setVariant({ ...variant, image: null })} />

      <UIButton
        theme="dark"
        onClick={() => {
          addVariant(variant);
          setVariant({
            suffix: "",
            price: 0,
            stock: 0,
            image: null,
            color: "",
          });
          onClose();
        }}
      >
        Add Variant
      </UIButton>
    </UIModal>
  );
};

export default VariantModal;
