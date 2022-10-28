import Head from "next/head";

import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home() {
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
          <ProductFeed></ProductFeed>
      
        </main>
    </div>
  );
}
