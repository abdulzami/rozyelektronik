import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import Hero from "../components/Hero";
import Layanan from "../components/Layanan";
import Kontak from "../components/Kontak";
import HeaderH from "../components/HeaderH";
import HeaderS from "../components/HeaderS";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rozy Elektronik - Landing Page</title>
        <meta
          name="description"
          content="Selamat Datang Di Landing Page Rozy Elektronik"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      {/* <HeaderH/> */}
      <HeaderS />
      <div className="xl:px-44 px-4 md:px-24 sm:px-20">
        <section id="hero">
          <Hero />
        </section>
        <section id="layanan">
          <Layanan />
        </section>
      </div>
      <section id="kontak">
          <Kontak />
        </section>
    </div>
  );
};
export default Home;
