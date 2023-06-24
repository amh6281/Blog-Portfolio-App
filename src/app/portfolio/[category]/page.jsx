import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch("http://localhost:3000/api/portfolios", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// const getData = (cat) => {
//   const data = items[cat];
//   if (data) {
//     return data;
//   }
//   return notFound();
// };

const Category = async ({ params }) => {
  const data = await getData();

  const filterData = data.filter((item) => item.category === params.category);

  return (
    <div>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {filterData.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button
              text="더보기"
              url={`portfolio/${params.category}/${item._id}`}
            />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
