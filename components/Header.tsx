import React from "react";
import Image from "next/image";
import logo from "../images/rozyelektronik.svg";
import Link from "next/link";
type Props = {};

function Header({}: Props) {
  return (
    <div className="flex justify-between py-3">
      <div>
        <Image src={logo} alt="rozyelektronik" width={200} height={200} />
      </div>
      <div className="flex space-x-3">
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
