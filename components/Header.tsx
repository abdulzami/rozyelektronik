import React from "react";
import Image from "next/image";
import logo from "../images/rozyelektronik.svg";
import Link from "next/link";
type Props = {};

function Header({}: Props) {
  return (
    <div className="flex justify-between py-3">
      <Image
        src={logo}
        alt="rozyelektronik"
        className="items-center"
        width={150}
        height={150}
      />

      <div className="flex space-x-3 items-center">
        <div className="hover:text-brand hover:underline cursor-pointer">
          <Link href={"#layanan"}>Layanan</Link>
        </div>
        <div className="hover:text-brand hover:underline cursor-pointer">
          <Link href={"#kontak"}>Kontak</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
