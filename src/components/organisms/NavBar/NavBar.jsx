"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "public/icons/logo.svg";
import { usePathname } from "next/navigation";

import { ROUTES_NAME, ROUTES_NAME_VALUE } from "@/utils/constants/routesNames";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Location", path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME.location] },
    { name: "Blog", path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME.blog] },
    { name: "Services", path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME.services] },
    {
      name: "About Us",
      path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME["about-us"]]
    },
    {
      name: "Franchise with Us",
      path: "/" + ROUTES_NAME_VALUE[ROUTES_NAME.franchise]
    }
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <Image
          src={logo}
          alt="Fetch: Pet Caretakers"
          width={40}
          height={40}
          style={styles.logo}
        />
      </div>

      <div style={styles.navLinks}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            style={{
              ...styles.link,
              ...(pathname === item.path ? styles.active : {}) // Aplica estilo si está activo
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    backgroundColor: "#FF623F", // Color naranja del fondo
    height: "60px"
  },
  logoContainer: {
    display: "flex",
    alignItems: "center"
  },
  logo: {
    borderRadius: "50%", // Hace que el logo tenga bordes redondeados
    backgroundColor: "white",
    padding: "5px"
  },
  navLinks: {
    display: "flex",
    gap: "2rem"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
    fontSize: "1rem",
    transition: "color 0.3s ease"
  },
  active: {
    color: "#FFD700", // Color para el enlace activo (dorado)
    fontWeight: "bold", // Resalta el texto del enlace activo
    borderBottom: "2px solid #FFD700" // Línea inferior para destacar el enlace
  }
};

export default Navbar;
