import Link from "next/link";
import Navbarbrands from "./Navbarbrands";
import Image from "next/image";
import styles from "/styles/brands.module.scss";
import Head from "next/head";

const Brands = () => {
  return (
    <div>
      <Head>
        <title>Brands | List</title>
        <meta name="keywords" content="brands"></meta>
      </Head>

      <h1>All Brands</h1>
      <Navbarbrands />
      <h2>Nike</h2>
      <Image
        src="/nike/nike1.jpeg"
        width={200}
        height={300}
        className={styles.img}
      ></Image>
      <Image
        src="/nike/nike2.jpeg"
        width={200}
        height={300}
        className={styles.img}
      ></Image>
      <Image
        src="/nike/nike3.jpeg"
        width={200}
        height={300}
        className={styles.img}
      ></Image>

      <h2>Reebok</h2>
      <Image
        src="/reebok/reebok1.jpeg"
        width={250}
        height={300}
        className={styles.img}
      ></Image>
      <Image
        src="/reebok/reebok2.jpeg"
        width={250}
        height={300}
        className={styles.img}
      ></Image>
      <Image
        src="/reebok/reebok3.jpeg"
        width={250}
        height={300}
        className={styles.img}
      ></Image>

      <h2>Adidas</h2>
      <Image
        src="/adidas/adidas1.jpeg"
        width={300}
        height={300}
        className={styles.img}
      ></Image>
      <Image
        src="/adidas/adidas2.jpeg"
        width={300}
        height={300}
        className={styles.img}
      ></Image>
      <Image
        src="/adidas/adidas3.jpeg"
        width={300}
        height={300}
        className={styles.img}
      ></Image>
    </div>
  );
};

export default Brands;
