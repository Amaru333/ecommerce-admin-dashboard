import { FormInputProps } from "@/interfaces/widgetInterfaces";
import React from "react";

const FormInput = ({ icon, label, id, theme = "light", className, ...rest }: FormInputProps) => {
  return (
    <div className={`flex flex-col group text-slate-400 transition-all mt-2 ${theme === "light" ? "focus-within:text-slate-800" : "focus-within:text-white"}`}>
      <label htmlFor={id} className="text-sm pb-1">
        {label}
      </label>
      <div className={`flex flex-row items-center border border-slate-400  ${theme === "light" ? "focus-within:border-slate-800" : "focus-within:border-white"} transition-all rounded px-2 py-1 gap-x-2`}>
        {icon && icon}
        <input id={id} className={`focus:outline-none ${theme === "light" ? "text-black bg-white" : "bg-black text-white"} flex-1 ${className}`} {...rest} />
      </div>
    </div>
  );
};

export default FormInput;
