import React from "react";
import Image from "next/image";
import elektronik from '../images/elektronik.svg'
type Props = {};

function Hero({}: Props) {
  return (
    <div className="flex flex-col place-items-center py-20">
      <h2 className="text-xl font-bold text-center mb-2">
        Ayo Serviskan Barang Elektronikmu Yang Rusak di
        <span className="text-brand"> Rozy Elektronik</span>
      </h2>
      <h2 className="text-sm bg-zinc-100 p-1 font-thin">
        Tempat Servis Terjamin & Bergaransi
      </h2>
      <Image
        className="my-10"
        src={elektronik}
        width={300}
        height={500}
        alt="elektronik"
      />
    </div>
  );
}

export default Hero;
