export interface IVariantInput {
  suffix: string;
  price: number;
  stock: number;
  image: null | File;
  color: string;
}

export interface IProductInput {
  name: string;
  slug: string;
  description: string;
  variants: IVariantInput[];
}

export interface IVariantModalProps {
  isOpen: boolean;
  onClose: () => void;
  variants: IVariantInput[];
  addVariant: (variant: IVariantInput) => void;
}
