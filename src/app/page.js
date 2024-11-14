"use client";
import React, { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const router = useRouter();
  const { isLoggedUser } = useAuth();

  useEffect(() => {
    if (isLoggedUser) {
      router.push("/");
    } else {
      router.push("/login");
    }
  }, [isLoggedUser, router]);

  return (
    <div>
      <h1>h1 Hola mundo!: We Get Pet Care!</h1>
      <h2>h2 Hola mundo!: Our Services</h2>
      <h3>h3 Hola mundo!</h3>
      <p>
        Texto: For over 17 Years, Fetch! Pet Care has been a trusted partner in
        keeping pets healthy and happy!
      </p>
    </div>
  );
}
