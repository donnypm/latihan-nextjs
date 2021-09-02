import Image from "next/image";
import styles from "/styles/brands.module.scss";

const Items = (props) => {
  return (
    <div>
      <Image
        src={props.brandimage}
        width={200}
        height={300}
        className={styles.img}
      />
    </div>
  );
};

export default Items;
