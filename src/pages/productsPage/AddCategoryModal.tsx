import { useCreateCategoryMutation } from "@/apis/categories";
import FormInput from "@/components/widgets/FormInput";
import FormTextArea from "@/components/widgets/FormTextArea";
import UIButton from "@/components/widgets/UIButton";
import UIModal from "@/components/widgets/UIModal";
import UISingleImageUploader from "@/components/widgets/UISingleImageUploader";
import { ISidebarAddCategoryModal } from "@/interfaces/commonInterfaces";
import { SidebarCategoryProps } from "@/interfaces/widgetInterfaces";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const AddCategoryModal = ({ isOpen, onClose }: ISidebarAddCategoryModal) => {
  const { mutate: createNewCategory, isPending: addCategoryPending } = useCreateCategoryMutation();
  const [newCategory, setNewCategory] = useState<SidebarCategoryProps>({
    name: "",
    slug: "",
    description: "",
    image: null,
  });

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
      <UISingleImageUploader label="Category Image" image={newCategory.image} setImage={(image) => setNewCategory({ ...newCategory, image })} discardImage={() => setNewCategory({ ...newCategory, image: null })} />
      <UIButton theme="dark" onClick={onSubmit} loading={addCategoryPending}>
        Add Category
      </UIButton>
    </UIModal>
  );
};

export default AddCategoryModal;
