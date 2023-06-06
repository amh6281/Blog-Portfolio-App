import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi
          </h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            aperiam voluptate perferendis enim, fugit, labore doloribus, natus
            eos sequi dolorum ea corrupti dignissimos praesentium cum fuga
            exercitationem quae dicta cupiditate.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>홍길동</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          eum earum, blanditiis sed quibusdam tempora nihil facilis voluptate
          aperiam provident beatae non? Ullam cupiditate, exercitationem
          repudiandae ut placeat vitae explicabo.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
