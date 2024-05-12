import { UISingleImageUploaderProps } from "@/interfaces/widgetInterfaces";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const UISingleImageUploader = ({ label, image, setImage, discardImage }: UISingleImageUploaderProps) => {
  useEffect(() => {
    if (!image) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);
  const [preview, setPreview] = useState<string | undefined>(undefined);
  return (
    <div>
      <p className="text-sm text-slate-400 mb-1">{label}</p>
      <div className="border border-dashed border-slate-400 rounded w-full aspect-[4/3] flex items-center justify-center relative">
        {!image ? (
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
                setImage(file);
              }}
            />
          </>
        ) : (
          <>
            <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-70 bg-black flex items-center justify-center text-white text-sm transition-all duration-200">
              <button onClick={discardImage}>Remove Image</button>
            </div>
            <Image src={preview ?? ""} alt="Preview" className="w-full h-full object-cover" width={400} height={400} />
          </>
        )}
      </div>
    </div>
  );
};

export default UISingleImageUploader;
