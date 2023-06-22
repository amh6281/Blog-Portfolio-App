import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>test</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>test</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="" alt="" fill={true} className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default page;
