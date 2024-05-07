import { useCreateCategoryMutation } from "@/apis/categories";
import FormInput from "@/components/widgets/FormInput";
import FormTextArea from "@/components/widgets/FormTextArea";
import UIButton from "@/components/widgets/UIButton";
import UIModal from "@/components/widgets/UIModal";
import { ISidebarAddCategoryModal } from "@/interfaces/commonInterfaces";
import { SidebarCategoryProps } from "@/interfaces/widgetInterfaces";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const AddCategoryModal = ({ isOpen, onClose }: ISidebarAddCategoryModal) => {
  const { mutate: createNewCategory, isPending: addCategoryPending } = useCreateCategoryMutation();

  const [preview, setPreview] = useState<string | undefined>(undefined);
  const [newCategory, setNewCategory] = useState<SidebarCategoryProps>({
    name: "",
    slug: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    if (!newCategory.image) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(newCategory.image);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [newCategory.image]);

  const onSubmit = () => {
    createNewCategory(newCategory, {
      onSuccess: () => {
        onClose();
        setNewCategory({
          name: "",
          slug: "",
          description: "",
          image: null,
        });
        toast.success("Success", {
          description: "New category added successfully",
        });
      },
      onError: (error) => {
        toast.error("Error", {
          description: error.message,
        });
      },
    });
  };

  return (
    <UIModal isOpen={isOpen} onClose={onClose}>
      <p className="text-xl font-medium">Add a new category</p>
      <FormInput label="Category Name" id="name" value={newCategory.name} onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })} />
      <FormInput label="Category Slug" id="slug" value={newCategory.slug} onChange={(e) => setNewCategory({ ...newCategory, slug: e.target.value })} />
      <FormTextArea label="Category Description" id="description" value={newCategory.description} onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })} />
      <div>
        <p className="text-sm text-slate-400 mb-1">Category Image</p>
        <div className="border border-dashed border-slate-400 rounded w-full aspect-[4/3] flex items-center justify-center relative">
          {!newCategory.image ? (
            <>
              <label htmlFor="image" className="text-slate-400 cursor-pointer text-sm hover:text-black transition-all">
                Upload an Image
              </label>
              <input
                type="file"
                id="image"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files ? e.target.files[0] : null;
                  setNewCategory({ ...newCategory, image: file });
                }}
              />
            </>
          ) : (
            <>
              <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-70 bg-black flex items-center justify-center text-white text-sm transition-all duration-200">
                <button onClick={() => setNewCategory({ ...newCategory, image: null })}>Remove Image</button>
              </div>
              <Image src={preview ?? ""} alt="Preview" className="w-full h-full object-cover" width={200} height={200} />
            </>
          )}
        </div>
      </div>
      <UIButton theme="secondary" onClick={onSubmit} loading={addCategoryPending}>
        Add Category
      </UIButton>
    </UIModal>
  );
};

export default AddCategoryModal;
