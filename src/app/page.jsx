import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>나만의 포트폴리오</h1>
        <p className={styles.desc}>
          MyWeB이 제공하는 감각적인 디자인과 다양한 기능
        </p>
        <button className={styles.button}>작업물 보러가기</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="MyWeB Hero" className={styles.img} />
      </div>
    </div>
  );
}
