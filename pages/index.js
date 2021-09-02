import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Footer from "./components/Footer";
import styles from "../styles/Home.module.scss";
import Items from "./components/Items";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brands | Home</title>
        <meta name="keywords" content="brands"></meta>
      </Head>

      <h1 className={styles.card}>Homepage</h1>
      <Items
        brandname="Nike"
        brandimage="https://image-cdn.medkomtek.com/v1xf7GsCxyk8Dqrwg2ycQQoG5Hk=/1200x675/smart/klikdokter-media-buckets/medias/2323334/original/042202700_1613557378-tips-memilih-sepatu-yang-tepat-dan-sehat.jpg"
      ></Items>
      <Items
        brandname="Reebok"
        brandimage="https://image-cdn.medkomtek.com/2FGSLAL0WH6VH-VKp8oENTg3ztk=/673x379/smart/klikdokter-media-buckets/medias/1511083/original/022392800_1487357030-ProjectImages_Cara-Memilih-Sepatu-Olahraga-yang-Baik.jpg"
      ></Items>
      <Link href="/brands/">
        <a>See Brand Listing</a>
      </Link>
    </div>
  );
}
