import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {};

function Kontak({}: Props) {
  return (
    <div className="mt-20 h-full rounded-t py-10 pb-16 px-7  text-white bg-brand">
      <h1 className="text-xl text-center">Kontak</h1>
      <h2 className="text-md font-thin text-center mb-10">
        Mari bicarakan mengenai barang elektronik anda yang rusak.
      </h2>
      <div className="space-y-7 text-sm text-center">
        <div className="flex items-center justify-center w-full space-x-2">
          <PhoneIcon className="w-5 h-5 animate-pulse" />
          <p>
            <Link href={"https://wa.link/qf4cql"}>+6281231238535</Link>
          </p>
        </div>
        <div className="flex items-center justify-center w-full space-x-2">
          <EnvelopeIcon className="w-5 h-5 animate-pulse" />
          <p>
            <Link href="mailto:zrozyelektronik.gskid@gmail.com?subject=Customer - Service Rozy Elektronik">rozyelektronik.gskid@gmail.com</Link>
          </p>
        </div>

        <div className="flex items-center justify-center w-full space-x-2">
          <MapPinIcon className="w-5 h-5 animate-pulse" />
          <p>Jl. Nyai Ageng Arem-Arem 9B/No.1</p>
        </div>
      </div>
    </div>
  );
}

export default Kontak;
