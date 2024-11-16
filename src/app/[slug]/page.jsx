"use client";

import React, { useCallback, useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { useRouter, usePathname } from "next/navigation";

import { fetchUsers } from "./utils";
import { FOOTER_ELEMENTS, NAV_ROUTES } from "./constants";

import {
  ROUTES_NAME,
  ROUTES_NAME_VALUE,
  VALID_ROUTES_NAME
} from "@/utils/constants/routesNames";
import { useToast } from "@/context/ToastContext";
import NotFoundLayout from "@/layouts/404Layout/404Layout";
import { TOAST_TYPE } from "@/components/atoms/Toast/constants";

const HomeLayout = dynamic(() => import("@/layouts/HomeLayout/HomeLayout"));

export default function Slug() {
  const router = useRouter();
  const pathname = usePathname();
  const { showToast } = useToast();

  const path = pathname.slice(1);
  const isValidPathName = VALID_ROUTES_NAME.includes(path);

  const [content, setContent] = useState({});
  const [usersData, setUsersData] = useState([]);

  const actionMessage = useCallback(
    () => showToast("Thank you for interacting with us!", TOAST_TYPE.success),
    [showToast]
  );

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

  const handleReturn = useCallback(
    () => router.push("/" + ROUTES_NAME_VALUE[ROUTES_NAME.home]),
    [router]
  );

  const parsedFooterElements = FOOTER_ELEMENTS({
    constructionMessage,
    newsletterMessage
  });

  useEffect(() => {
    fetchUsers(setUsersData);
  }, []);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const pageContent = await import(`@/content/${path}.js`);
        setContent(pageContent.default);
      } catch (error) {
        console.log("Content not found for route:", path);
      }
    };

    loadContent();
  }, [router, path]);

  return isValidPathName ? (
    <HomeLayout
      {...content}
      usersData={usersData}
      actionMessage={actionMessage}
      navContent={{ routes: NAV_ROUTES }}
      footerContent={{ elements: parsedFooterElements }}
    />
  ) : (
    <NotFoundLayout
      handleReturn={handleReturn}
      navContent={{ routes: NAV_ROUTES }}
    />
  );
}
