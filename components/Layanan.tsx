import React from "react";
import Brelektronik from "./Brelektronik";
import Tv from "../images/barangelektronik/tv.svg";
import KipasAngin from "../images/barangelektronik/kipasangin.svg";
import MesinCuci from "../images/barangelektronik/mesincuci.svg";
import SoundSystem from "../images/barangelektronik/soundsystem.svg";
import PompaAir from "../images/barangelektronik/pompaair.svg";
type Props = {};

function Layanan({}: Props) {
  return (
    <div id="layanan">
      <h1 className="text-xl text-center">Layanan</h1>
      <h2 className="text-md font-thin text-center mb-10">
        Kami menyediakan jasa servis dari berbagai macam jenis barang
        elektronik, mulai dari :
      </h2>
      <div className="grid gap-6 xl:grid-cols-5 md:grid-cols-3">
        <Brelektronik
          imageSrc={Tv}
          imageName="Televisi"
          imageDetail="Segala jenis dan merk"
          imageNumber={1}
          width={100}
          height={100}
        />
        <Brelektronik
          imageSrc={KipasAngin}
          imageName="Kipas Angin"
          imageDetail="Segala jenis dan merk"
          imageNumber={1}
          width={100}
          height={100}
        />
        <Brelektronik
          imageSrc={MesinCuci}
          imageName="Mesin Cuci"
          imageDetail="Segala jenis dan merk"
          imageNumber={1}
          width={100}
          height={100}
        />
        <Brelektronik
          imageSrc={SoundSystem}
          imageName="Sound System"
          imageDetail="Segala jenis dan merk"
          imageNumber={1}
          width={100}
          height={100}
        />
        <Brelektronik
          imageSrc={PompaAir}
          imageName="Pompa Air"
          imageDetail="Segala jenis dan merk"
          imageNumber={1}
          width={100}
          height={100}
        />
      </div>
      <div className="w-full my-2 mt-8">
        <h2 className="text-md font-thin italic text-center">
          Dan masih banyak lagi
        </h2>
      </div>
    </div>
  );
}

export default Layanan;
