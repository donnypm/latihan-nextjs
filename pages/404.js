import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/brands.module.scss";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    //console.log("run use Effect");
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="NotFound" className={styles.textalign}>
      <h1>Maafkan...</h1>
      <h2> halaman yang anda tuju tidak ditemukan</h2>
      <p>
        kembali{" "}
        <Link href="/">
          <a>ke Home</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
