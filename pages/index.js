import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Footer from "./components/Footer";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      {/*<Navbar />  */}

      <Head>
        <title>Brands | Home</title>
        <meta name="keywords" content="brands"></meta>
      </Head>
      <h1 className={styles.card}>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
        impedit suscipit architecto, odio inventore nostrum non neque dicta.
        Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem
        nobis odit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
        impedit suscipit architecto, odio inventore nostrum non neque dicta.
        Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem
        nobis odit.
      </p>
      <Link href="/brands/">
        <a>See Brand Listing</a>
      </Link>
      {/* <Footer/>  */}
    </div>
  );
}
