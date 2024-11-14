"use client";
import React, { useState } from "react";

import { redirect } from "next/navigation";

import AuthContext from "@/context/AuthContext";
import { fetchServices } from "@/services/fetchServices";
import { deleteCookie, setCookie } from "@/utils/cookies";

export function AuthProvider({ children }) {
  /**
   * State variable to manage user session status.
   *
   * @constant {boolean} isLoggedUser - Indicates the user's login status.
   * @default false
   * - `false`: User session is closed (user is logged out).
   * - `true`: User session is open and should remain active (user is logged in).
   *
   * @function setIsLoggedUser - Function to update the `isLoggedUser` state.
   */
  const [isLoggedUser, setIsLoggedUser] = useState(false);

  /* Es recomendable guardar información sensible, como el endpoint de la API y el nombre del token,
      únicamente en variables de entorno o archivos de configuración.
     Sin embargo, para fines prácticos en esta prueba, también añado valores estáticos. */
  const endpoint =
    process.env.NEXT_PUBLIC_API_URL || "https://reqres.in/api/login";
  const cookieName = process.env.NEXT_PUBLIC_TOKEN_NAME || "userToken";

  /**
   * Logs in the user with the provided email and password.
   *
   * @async
   * @function login
   *
   * @param {Object} params - The parameters for login.
   * @param {string} params.email - The email address of the user.
   * @param {string} params.password - The password of the user.
   *
   * @throws {Error} If either `email` or `password` is missing.
   * @throws {Error} If there is an error during the login process.
   *
   * @returns {Promise<void>} Resolves when the login is successful and the session is set.
   */
  const login = async ({ email, password }) => {
    if (!email) throw new Error("Missing email");
    if (!password) throw new Error("Missing password");

    try {
      const { token } = await fetchServices.post({
        email,
        password,
        endpoint
      });

      setIsLoggedUser(true);
      setCookie({ name: cookieName, value: token });
      redirect("/");
    } catch (error) {
      console.error("Error en el login:", error);
      throw error;
    }
  };

  /**
   * Logs out the user by clearing the session state and deleting the user token cookie.
   *
   * This function updates the session state to indicate that the user has logged out, deletes
   * the token stored in the cookies, and redirects the user to the login page.
   *
   * @function logout
   * @returns {void}
   */
  const logout = () => {
    setIsLoggedUser(false);
    deleteCookie(cookieName);
    redirect("/login");
  };

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
