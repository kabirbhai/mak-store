import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>mak-tore.com</title>
        <meta name="description" content="mak store.com e-commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="bg-red-500 text-xl">Welcome to mak store</h1>
    </div>
  );
}
