"use client";

import React, { useCallback } from "react";

import dynamic from "next/dynamic";

import { INITIAL_STATE_FORM } from "./constants";

import useForm from "@/hooks/useForm";
import { useAuth } from "@/context/AuthContext";

const Aside = dynamic(() => import("./components/Aside/Aside"));
const Form = dynamic(() => import("./components/Form/Form"));

export default function Login() {
  const { login } = useAuth();

  const { form, errors, resetErrors, resetHandler, changeHandler } = useForm(
    INITIAL_STATE_FORM
    // branchOfficeValidation
  );

  const onSubmit = useCallback(
    (event) => login({ event, ...form }),
    [login, form]
  );

  return (
    <main
      style={{
        display: "flex",
        height: "100vh"
      }}
    >
      <Aside />
      <Form
        {...form}
        errors={errors}
        onSubmit={onSubmit}
        resetErrors={resetErrors}
        resetHandler={resetHandler}
        changeHandler={changeHandler}
      />
    </main>
  );
}
