export interface UIModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export interface FormInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  id: string;
  theme?: "light" | "dark";
}

export interface FormTextAreaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label: string;
  icon?: React.ReactNode;
  id: string;
  theme?: "light" | "dark";
}

export interface UIButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  theme?: "light" | "dark";
}

export interface SidebarCategoryProps {
  name: string;
  slug: string;
  description: string;
  image: null | File;
}

export interface UISingleImageUploaderProps {
  label: string;
  image: null | File;
  setImage: (image: File | null) => void;
  discardImage: () => void;
}

export interface UIColorPickerProps {
  theme?: "light" | "dark";
  id: string;
  label: string;
  value: string;
  onChange: (e: string) => void;
}
