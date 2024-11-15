"use client";

import React, { useCallback } from "react";

import dynamic from "next/dynamic";

import { FORM_MASKS, FORM_VALIDATIONS, INITIAL_STATE_FORM } from "./constants";

import useForm from "@/hooks/useForm";
import { useAuth } from "@/context/AuthContext";

const Aside = dynamic(() => import("./components/Aside/Aside"));
const Form = dynamic(() => import("./components/Form/Form"));

export default function Login() {
  const { login } = useAuth();

  const {
    form,
    errors,
    resetForm,
    resetErrors,
    handleChange,
    formValidator,
    blurValidator
  } = useForm({
    applyMask: FORM_MASKS,
    validateForm: FORM_VALIDATIONS,
    initialForm: INITIAL_STATE_FORM
  });

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      formValidator();

      if (Object.keys(errors).length) return null;

      await login(form);

      resetForm();
    },
    [errors, login, form, resetForm, formValidator]
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
        handleChange={handleChange}
        blurValidator={blurValidator}
      />
    </main>
  );
}
