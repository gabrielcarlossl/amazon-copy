import Head from "next/head";

import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon.com.br | Tudo pra você, de A a Z.</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>

      {/* header */}
      <Header></Header>

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner></Banner>

        {/* Product feed */}
        <ProductFeed products={products}></ProductFeed>
        
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products")
  .then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}

// GET ==> https://fakestoreapi.com/products
