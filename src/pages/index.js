import Head from "next/head";
import Image from "next/image";
import MainMenu from "../components/menu/MainMenu";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next Appp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        {/* <Titlepage title="home"/> */}
        <MainMenu />
        {/* <Dashboard/> */}
      </main>
    </div>
  );
}
