import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layanan from "../components/Layanan";
import Kontak from "../components/Kontak";

const Home: NextPage = () => {
  // const linkRef = useRef(null);

  // const goto = (ref:any) => {
  //   document.body.scrollTo({
  //     top:ref.offsetTop-90,
  //     left:0,
  //     behavior:"smooth"
  //   })
  // }

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
      <Header />
      <div className="xl:px-44 px-4 md:px-24 sm:px-20">
        {/* <section onClick={()=>goto(linkRef.current)}>
          <Hero />
        </section>
        <section ref={linkRef} >
          <Layanan />
        </section> */}
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
