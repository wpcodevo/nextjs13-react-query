"use client";

import { User } from "../types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

async function getUsers() {
  return (await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  )) as User[];
}

export default function ListUsers() {
  const [count, setCount] = React.useState(0);
  const { data, isLoading, isFetching, error } = useQuery<User[]>({
    queryKey: ["stream-hydrate-users"],
    queryFn: () => getUsers(),
    suspense: true,
    staleTime: 5 * 1000,
  });

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <p>{count}</p>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isFetching || isLoading ? (
        <p style={{ textAlign: "center" }}>loading... on the client-side</p>
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data?.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <Image
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                width={180}
                height={180}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
