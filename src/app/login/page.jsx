"use client";

import React from "react";

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

  return (
    <div
      style={{
        display: "flex",
        height: "100vh"
      }}
    >
      <Aside />
      <Form
        {...form}
        errors={errors}
        onSubmit={login}
        resetErrors={resetErrors}
        resetHandler={resetHandler}
        changeHandler={changeHandler}
      />
    </div>
  );
}
