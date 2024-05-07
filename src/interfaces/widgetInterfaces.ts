export interface UIModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export interface FormInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  id: string;
}

export interface FormTextAreaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label: string;
  icon?: React.ReactNode;
  id: string;
}

export interface UIButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  theme?: "primary" | "secondary";
}

export interface SidebarCategoryProps {
  name: string;
  slug: string;
  description: string;
  image: null | File;
}
