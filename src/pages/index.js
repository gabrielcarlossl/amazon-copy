import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon.com. Spend less. Smile more.</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      
        {/* header */}
        <Header></Header>
    </div>
  );
}
