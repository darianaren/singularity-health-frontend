"use client";

import React, { useCallback, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "public/icons/logo.svg";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css";

import { ROUTES_NAME, ROUTES_NAME_VALUE } from "@/utils/constants/routesNames";
import HamburgerMenu from "@/components/atoms/HamburgerMenu/HamburguerMenu";

/**
 * @module Navbar
 *
 * @description
 * The `Navbar` component is a responsive navigation bar that includes a logo, a hamburger menu for mobile view,
 * and dynamic navigation links. The menu state is managed with React's `useState` and provides accessibility features.
 *
 * @component
 * @param {Object} props - Properties passed to the `Navbar` component.
 * @param {Array} props.routes - An array of route objects used to dynamically render navigation links.
 * @param {string} props.routes[].path - The URL path of the route.
 * @param {string} props.routes[].name - The display name of the route.
 *
 * @returns {React.Component} A responsive navigation bar with a logo, dynamic links, and a hamburger menu.
 */

const Navbar = ({ routes }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), [setIsOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <header className={styles.header}>
      <Link
        onClick={closeMenu}
        className={styles["logo-container"]}
        href={"/" + ROUTES_NAME_VALUE[ROUTES_NAME.home]}
      >
        <Image
          src={logo}
          width={40}
          height={40}
          style={styles.logo}
          alt="Fetch: Pet Caretakers"
        />
      </Link>
      <div className={styles["btn-menu-container"]}>
        <HamburgerMenu isOpen={isOpen} handleClick={toggleMenu} />
      </div>
      <nav
        className={`${styles["nav-container"]} ${isOpen ? styles["is-open"] : styles["is-close"]}`}
      >
        {routes?.map((item, index) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={closeMenu}
            style={{ "--i": index }}
            className={`${styles.link} ${pathname === item.path ? styles.active : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
