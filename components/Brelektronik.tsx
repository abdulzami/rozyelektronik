import Image from "next/image";
import React from "react";
import BarangElektronik from "../types/BarangElektronik";

function Brelektronik({
  imageName,
  imageDetail,
  imageSrc,
  imageNumber,
  width,
  height,
}: BarangElektronik) {
  return (
    <div className="">
      <div className="bg-brand rounded-t flex place-items-center p-4 flex-col">
        <Image
          src={imageSrc}
          alt={`barang${imageNumber}`}
          width={width}
          height={height}
          className="w-28 h-28 py-2"
        />
      </div>
      <div className="flex border w-full p-3 rounded-b border-brand flex-col place-items-center">
        <h1 className="text-md font-medium">{imageName}</h1>
        <p className="text-sm font-thin">{imageDetail}</p>
      </div>
    </div>
  );
}

export default Brelektronik;
