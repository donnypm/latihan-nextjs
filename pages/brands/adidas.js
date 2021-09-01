import SubNavbarbrands from "./subNavbarbrands";
import Image from "next/image";
import styles from "/styles/brands.module.scss";

const Adidas = () => {
  return (
    <div id="adidas">
      <h1>Brands Adidas</h1>
      <SubNavbarbrands />
      <br></br>
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

export default Adidas;
