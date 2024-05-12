import { UIColorPickerProps } from "@/interfaces/widgetInterfaces";
import React, { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { CiHashtag } from "react-icons/ci";

const UIColorPicker = ({ theme = "light", id, label, value, onChange }: UIColorPickerProps) => {
  return (
    <div className={`flex flex-col group text-slate-400 transition-all mt-2 ${theme === "light" ? "focus-within:text-slate-800" : "focus-within:text-white"}`}>
      <label htmlFor={id} className="text-sm pb-1">
        {label}
      </label>
      <HexColorPicker
        color={value}
        onChange={(e) => {
          onChange(e);
        }}
        className="!w-full m-0"
      />
      <div className={`flex mt-2 flex-row items-center border border-slate-400  ${theme === "light" ? "focus-within:border-slate-800" : "focus-within:border-white"} transition-all rounded px-2 py-1 gap-x-2`}>
        <CiHashtag size={20} />
        <HexColorInput
          color={value}
          onChange={(e) => {
            onChange(e);
          }}
          className={`focus:outline-none w-full ${theme === "light" ? "text-black bg-white" : "bg-black text-white"} flex-1`}
        />
      </div>
    </div>
  );
};

export default UIColorPicker;
