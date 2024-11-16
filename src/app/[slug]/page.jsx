"use client";

import React, { useCallback, useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { useRouter, usePathname } from "next/navigation";

import { FOOTER_ELEMENTS, NAV_ROUTES } from "./constants";

import {
  ROUTES_NAME,
  ROUTES_NAME_VALUE,
  VALID_ROUTES_NAME
} from "@/utils/constants/routesNames";
import { useAuth } from "@/context/AuthContext";
import NotFoundLayout from "@/layouts/404Layout/404Layout";
import { useToast } from "@/context/ToastContext";
import { TOAST_TYPE } from "@/components/atoms/Toast/constants";

const HomeLayout = dynamic(() => import("@/layouts/HomeLayout/HomeLayout"));

export default function Slug() {
  const router = useRouter();
  const pathname = usePathname();
  const { showToast } = useToast();
  const { isLoggedUser } = useAuth();

  const path = pathname.slice(1);
  const isValidPathName = VALID_ROUTES_NAME.includes(path);

  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const constructionMessage = useCallback(
    () => showToast("Page under construction", TOAST_TYPE.warning),
    [showToast]
  );

  const newsletterMessage = useCallback(
    () =>
      showToast(
        "Thank you for subscribing to our newsletter",
        TOAST_TYPE.success
      ),
    [showToast]
  );

  const parsedFooterElements = FOOTER_ELEMENTS({
    constructionMessage,
    newsletterMessage
  });

  useEffect(() => {
    if (isValidPathName && !isLoggedUser) {
      router.push("/" + ROUTES_NAME_VALUE[ROUTES_NAME.login]);
    }
  }, [isValidPathName, isLoggedUser, router]);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        const pageContent = await import(`@/content/${path}.js`);
        setContent(pageContent.default);
      } catch (error) {
        console.error("Content not found for route:", path);
      }
      setIsLoading(false);
    };

    loadContent();
  }, [router, path]);

  return isValidPathName ? (
    <HomeLayout
      {...content}
      isLoading={isLoading}
      navContent={{ routes: NAV_ROUTES }}
      footerContent={{ elements: parsedFooterElements }}
    />
  ) : (
    <NotFoundLayout />
  );
}
