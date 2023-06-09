"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
// useSession hook을 사용하기 위한 SessionProvider로 감싸기
