import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import Hero from "../components/Hero";
import Layanan from "../components/Layanan";
import Kontak from "../components/Kontak";

const Home: NextPage = () => {
  return (
    <div className="xl:px-44 px-4 pt-5 md:px-24 sm:px-20">
      <Head>
        <title>Rozy Elektronik - Landing Page</title>
        <meta name="description" content="Selamat Datang Di Landing Page Rozy Elektronik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="layanan">
        <Layanan />
      </section>
      <section id="kontak">
        <Kontak/>
      </section>
    </div>
  );
};
export default Home;
