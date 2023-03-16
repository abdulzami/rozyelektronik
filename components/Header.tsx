import React from "react";
import Image from 'next/image'
type Props = {};

function Header({}: Props) {
  return (
    <div className="flex justify-between py-3">
      <div>
        <Image
        src={"assets/rozyelektronik.svg"}
        alt="rozyelektronik"
        width={204}
        height={204}
        />
      </div>
      <div className="flex">
        <div className="mr-2">Layanan</div>
        <div>Kontak</div>
      </div>
    </div>
  );
}

export default Header;
