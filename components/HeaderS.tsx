import Image from "next/image";
import React, { useState } from "react";
import logo from "../images/rozyelektronik.svg";
import Link from "next/link";

type Props = {};

function HeaderS({}: Props) {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <nav className="bg-transparent sticky top-0 bg-white py-2 shadow-sm w-full flex items-center z-10 xl:px-44 px-4 md:px-24 sm:px-20">
      <div className="container">
        <div className="flex items-center py-3 justify-between relative">
          <div>
            <div className="block">
              <Image src={logo} alt="rozyelektronik" width={150} height={150} />
            </div>
          </div>
          <div className="flex items-center px-4">
            <button
              type="button"
              className={`block absolute right-4 ${
                hamburger ? "hamburger-active" : ""
              } lg:hidden`}
              onClick={handleHamburger}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              className={`${
                !hamburger && "hidden"
              } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:-my-7 lg:shadow-none lg:rounded-none`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <Link
                    href={"#hero"}
                    className="text-base text-black flex py-2 mx-8 group-hover:text-brand"
                  >
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href={"#layanan"}
                    className="text-base text-black flex py-2 mx-8 group-hover:text-brand"
                  >
                    Layanan
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href={"#kontak"}
                    className="text-base text-black flex py-2 mx-8 group-hover:text-brand"
                  >
                    Kontak
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderS;
