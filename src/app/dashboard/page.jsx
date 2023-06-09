"use client";

import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import useSwr from "swr";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });
  //     if (!res.ok) {
  //       setError(true);
  //     }
  //     setData(await res.json());
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  const session = useSession();
  console.log(session);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSwr(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log(data);
  return <div>Dashboard</div>;
};

export default Dashboard;
