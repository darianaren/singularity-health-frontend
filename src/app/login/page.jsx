"use client";

import React, { useCallback, useState } from "react";

import dynamic from "next/dynamic";

import { FORM_MASKS, FORM_VALIDATIONS, INITIAL_STATE_FORM } from "./constants";

import useForm from "@/hooks/useForm";
import { useAuth } from "@/context/AuthContext";

const Aside = dynamic(() => import("./components/Aside/Aside"));
const Form = dynamic(() => import("./components/Form/Form"));

export default function Login() {
  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const {
    form,
    errors,
    resetForm,
    handleChange,
    formValidator,
    blurValidator
  } = useForm({
    applyMask: FORM_MASKS,
    validateForm: FORM_VALIDATIONS,
    initialForm: INITIAL_STATE_FORM
  });

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      formValidator();

      if (Object.keys(errors).length) return null;
      await login(form);

      resetForm();
    } catch (error) {
      console.error("Error en el login:", error);
    }
    setIsLoading(false);
  }, [errors, login, form, resetForm, formValidator, setIsLoading]);

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
        isLoading={isLoading}
        handleChange={handleChange}
        blurValidator={blurValidator}
      />
    </main>
  );
}
