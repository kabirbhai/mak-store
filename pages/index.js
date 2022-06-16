import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navber";

export default function Home() {
  return (
    <div>
      <Head>
        <title>mak-tore.com</title>
        <meta name="description" content="mak store.com e-commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>
        <img src="/coder.jpg" alt="" />
      </div>
      <Footer />
    </div>
  );
}
