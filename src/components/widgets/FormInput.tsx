import { FormInputProps } from "@/interfaces/widgetInterfaces";
import React from "react";

const FormInput = ({ icon, label, id, className, ...rest }: FormInputProps) => {
  return (
    <div className="flex flex-col group text-slate-400 focus-within:text-slate-800 transition-all mt-2">
      <label htmlFor={id} className="text-sm pb-1">
        {label}
      </label>
      <div className="flex flex-row items-center border border-slate-400 focus-within:border-slate-800 transition-all rounded px-2 py-1 gap-x-2">
        {icon && icon}
        <input id={id} className={`focus:outline-none text-black flex-1 ${className}`} {...rest} />
      </div>
    </div>
  );
};

export default FormInput;
