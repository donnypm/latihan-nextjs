import Link from "next/link";
import Navbarbrands from "./Navbarbrands";
import Image from "next/image";
import styles from "/styles/brands.module.scss";
import Head from "next/head";
import Items from "../components/ImageItems";

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
      <div className="img-items">
        <Items brandimage="/nike/nike1.jpeg" className="thumbnail" />
        <Items brandimage="/nike/nike2.jpeg" className="thumbnail" />
        <Items brandimage="/nike/nike3.jpeg" className="thumbnail" />
      </div>

      <h2>Reebok</h2>
      <div className="img-items">
        <Items brandimage="/reebok/reebok1.jpeg" className="thumbnail" />
        <Items brandimage="/reebok/reebok2.jpeg" className="thumbnail" />
        <Items brandimage="/reebok/reebok3.jpeg" className="thumbnail" />
      </div>

      <h2>Adidas</h2>
      <div className="img-items">
        <Items brandimage="/adidas/adidas1.jpeg" className="thumbnail" />
        <Items brandimage="/adidas/adidas2.jpeg" className="thumbnail" />
        <Items brandimage="/adidas/adidas3.jpeg" className="thumbnail" />
      </div>
    </div>
  );
};

export default Brands;
