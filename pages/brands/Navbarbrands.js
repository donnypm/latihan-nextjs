import Link from "next/link";
import styles from "/styles/brands.module.css";

const Navbarbrands = () => {
  return (
    <nav>
      <ul className={styles.ulbg}>
        <li>
          <Link href="brands/nike">
            <a className={styles.asubnav}>Nike</a>
          </Link>
        </li>
        <li>
          <Link href="brands/reebok">
            <a className={styles.asubnav}>Reebok</a>
          </Link>
        </li>
        <li>
          <Link href="brands/adidas">
            <a className={styles.asubnav}>Adidas</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbarbrands;
