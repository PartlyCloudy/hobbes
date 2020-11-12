import Head from "next/head";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Hobbies from "../components/Hobbies";
import Guides from "../components/Guides";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hobbes</title>
        <meta property="og:title" content="Hobbes" key="title" />
      </Head>
      <Navbar />
      <div className=" container mx-auto mt-4 ">
        <img
          className="w-full object-cover h-ht"
          src="/photo.jpg"
          alt="Flower and sky"
        />
      </div>
      <Searchbar />
      <div className="container mx-auto mt-6">
        <h1 className="font-bold text-3xl px-2">HOT HOBBIES</h1>
        <hr className="border-t- border-black"></hr>
      </div>
      <Hobbies />
      <div className="container mx-auto mt-6">
        <h1 className="font-bold text-3xl px-2">HOT GUIDES</h1>
        <hr className="border-t- border-black"></hr>
      </div>
      <Guides />
      <Footer />
    </div>
  );
}
