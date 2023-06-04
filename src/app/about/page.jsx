import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>나만의 포트폴리오</h1>
          <h2 className={styles.imgDesc}>
            MyWeB이 제공하는 공간에서 포트폴리오를 만들 수 있습니다.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are we?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            omnis minus quos obcaecati reprehenderit aliquid quam rerum. Debitis
            iure, fuga incidunt voluptatem eaque obcaecati, blanditiis voluptate
            cupiditate commodi excepturi quaerat.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>what we do?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            omnis minus quos obcaecati reprehenderit aliquid quam rerum. Debitis
            iure, fuga incidunt voluptatem eaque obcaecati, blanditiis voluptate
            cupiditate commodi excepturi quaerat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
