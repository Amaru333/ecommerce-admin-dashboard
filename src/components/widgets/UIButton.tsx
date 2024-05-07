import { UIButtonProps } from "@/interfaces/widgetInterfaces";
import React from "react";

const UIButton = ({ children, className, theme = "primary", loading = false, ...rest }: UIButtonProps) => {
  return (
    <button className={`${loading ? "bg-slate-400" : `${theme === "secondary" ? "bg-black text-white" : "bg-white text-black"} hover:opacity-80 transition-all active:scale-95`} ${className} px-4 py-2 rounded-md`} {...rest} disabled={loading}>
      {children}
    </button>
  );
};

export default UIButton;
