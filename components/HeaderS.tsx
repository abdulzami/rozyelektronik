import Image from "next/image";
import React, { useState } from "react";
import logo from "../images/rozyelektronik.svg";

type Props = {};

function HeaderS({}: Props) {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <nav className="bg-transparent sticky top-0 bg-white opacity-80 backdrop-blur-sm shadow w-full flex items-center z-10 xl:px-44 px-4 md:px-24 sm:px-20">
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
              }`}
              onClick={handleHamburger}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderS;
