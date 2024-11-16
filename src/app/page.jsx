"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import { ROUTES_NAME, ROUTES_NAME_VALUE } from "@/utils/constants/routesNames";

export default function Home() {
  const router = useRouter();
  const { isLoggedUser } = useAuth();

  useEffect(() => {
    if (isLoggedUser) {
      router.push("/" + ROUTES_NAME_VALUE[ROUTES_NAME.home]);
    } else {
      router.push("/" + ROUTES_NAME_VALUE[ROUTES_NAME.login]);
    }
  }, [isLoggedUser, router]);
}
