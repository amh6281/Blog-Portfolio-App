"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Register = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
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
