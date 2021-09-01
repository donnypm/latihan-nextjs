import Link from "next/link";
import styles from "/styles/brands.module.scss";

const subNavbarbrands = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ulbg}>
        <li>
          <Link href="./nike">
            <a className={styles.asubnav}>Nike</a>
          </Link>
        </li>
        <li>
          <Link href="./reebok">
            <a className={styles.asubnav}>Reebok</a>
          </Link>
        </li>
        <li>
          <Link href="./adidas">
            <a className={styles.asubnav}>Adidas</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default subNavbarbrands;
