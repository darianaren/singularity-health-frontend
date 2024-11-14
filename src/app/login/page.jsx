import React from "react";

import Aside from "./components/Aside/Aside";
import Form from "./components/Form/Form";

export const metadata = {
  title: "¡Bienvenido a Fetch!",
  description: "Log in to your Fetch account to learn more about our services."
};
export default function Login() {
  return (
    <>
      <Aside />
      <Form />
    </>
  );
}
