import Image from "next/image";
import styles from "/styles/Home.module.scss";

const Items = (props) => {
  return (
    <div className={styles.items}>
      Product Brand : {props.brandname} <br />
      Product Picture : <br />
      <Image
        src={props.brandimage}
        width={100}
        height={100}
        className={styles.imgitems}
      ></Image>
      <hr />
    </div>
  );
};

export default Items;
