"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[0].value;
    const password = e.target[0].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // JSON format 사용
        },
        body: JSON.stringify({ name, email, password }),
      });
      res.status === 201 && router.push("/dashboard/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button}>회원가입</button>
      </form>
      {error && "잘못된 접근입니다."}
      <div className={styles.loginForm}>
        <span className={styles.span}>이미 회원이신가요?</span>
        <Link href="/dashboard/login" className={styles.link}>
          로그인
        </Link>
      </div>
    </div>
  );
};

export default Register;
