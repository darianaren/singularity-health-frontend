"use client";

import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { useRouter, usePathname } from "next/navigation";

import {
  ROUTES_NAME,
  ROUTES_NAME_VALUE,
  VALID_ROUTES_NAME
} from "@/utils/constants/routesNames";
import { useAuth } from "@/context/AuthContext";
import NotFoundLayout from "@/layouts/404Layout/404Layout";

const HomeLayout = dynamic(() => import("@/layouts/HomeLayout/HomeLayout"));

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoggedUser } = useAuth();

  const path = pathname.slice(1);
  const isValidPathName = VALID_ROUTES_NAME.includes(path);

  const [content, setContent] = useState({});

  useEffect(() => {
    if (isValidPathName && !isLoggedUser) {
      router.push("/" + ROUTES_NAME_VALUE[ROUTES_NAME.login]);
    }
  }, [isValidPathName, isLoggedUser, router]);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const pageContent = await import(`@/content/${path}.js`);
        setContent(pageContent.default);
      } catch (error) {
        console.error("Content not found for route:", path);
      }
    };

    loadContent();
  }, [router, path]);

  console.log(content);
  return isValidPathName ? <HomeLayout /> : <NotFoundLayout />;
}
