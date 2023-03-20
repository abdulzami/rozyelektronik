import Image from "next/image";
import React from "react";
import logo from "../images/rozyelektronik.svg";
import Link from "next/link";

type Props = {};

function HeaderH({}: Props) {
  return (
    <nav className="fixed top-0 left-0 bg-white w-full shadow">
      <div className="container m-auto flex justify-between items-center">
        <div className="px-6">
          <Image
            src={logo}
            alt="rozyelektronik"
            className=""
            width={150}
            height={150}
          />
        </div>
        <ul className="hidden md:flex py-4 px-6 space-x-6 items-center font-semibold">
          <li className="hover:text-brand">
            <Link href={"#layanan"}>Layanan</Link>
          </li>
          <li className="hover:text-brand">
            <Link href={"#kontak"}>Kontak</Link>
          </li>
        </ul>
        <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none group">
          <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
          <div className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0  group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
            <ul className="flex flex-col item-center w-full text-base cursor-pointer pt-10">
              <li className="hover:bg-brand hover:text-white py-4 px-6 w-full">
                <Link href={"#layanan"}>Layanan</Link>
              </li>
              <li className="hover:bg-brand hover:text-white py-4 px-6 w-full">
                <Link href={"#kontak"}>Kontak</Link>
              </li>
            </ul>
          </div>
        </button>
      </div>
    </nav>
  );
}

export default HeaderH;
