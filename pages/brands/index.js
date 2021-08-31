import Link from "next/link";
import Navbarbrands from "./Navbarbrands";
import Image from "next/image";
import styles from "/styles/brands.module.css";

const Brands = () => {
  return (
    <div>
      <h1>All Brands</h1>
      <Navbarbrands />
      <h2>Nike</h2>
      <Image
        src="/nike/nike1.jpeg"
        width={200}
        height={300}
        className={styles.img}
      ></Image>
      <Image src="/nike/nike2.jpeg" width={200} height={300}></Image>
      <Image src="/nike/nike3.jpeg" width={200} height={300}></Image>

      <h2>Reebok</h2>
      <Image src="/reebok/reebok1.jpeg" width={250} height={300}></Image>
      <Image src="/reebok/reebok2.jpeg" width={250} height={300}></Image>
      <Image src="/reebok/reebok3.jpeg" width={250} height={300}></Image>

      <h2>Adidas</h2>
      <Image src="/adidas/adidas1.jpeg" width={300} height={300}></Image>
      <Image src="/adidas/adidas2.jpeg" width={300} height={300}></Image>
      <Image src="/adidas/adidas3.jpeg" width={300} height={300}></Image>
    </div>
  );
};

export default Brands;
