import { useState, useCallback } from "react";

import { APPLY_MASK } from "@/utils/constants/inputMasks";

const useForm = ({ applyMask = {}, initialForm = {}, validateForm = {} }) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors({ ...newErrors });

      const typeMask = applyMask[name];

      const maskApplicator = APPLY_MASK[typeMask] || APPLY_MASK.default;

      const maskApplied = maskApplicator(value);

      const updatedForm = { ...form, [name]: maskApplied };

      setForm(updatedForm);
    },
    [form, applyMask, errors]
  );

  const blurValidator = useCallback(
    (event) => {
      const { name, value } = event.target;

      const rules = validateForm[name] || {};

      if (rules.required && !value)
        return setErrors({ ...errors, [name]: "Este campo es requerido" });

      if (rules.customValidator && rules.customValidator(value)) {
        const message = rules.message || "El valor del campo es inválido";
        return setErrors({ ...errors, [name]: message });
      }

      if (rules.pattern && !rules.pattern.test(value)) {
        const message = rules.message || "El valor del campo es inválido";
        return setErrors({ ...errors, [name]: message });
      }
    },
    [errors, validateForm]
  );

  const formValidator = useCallback(() => {
    Object.keys(validateForm).forEach((name) => {
      const value = form[name];
      blurValidator({ target: { name, value } });
    });
  }, [form, blurValidator, validateForm]);

  const resetForm = useCallback(() => {
    setForm(initialForm);
    setErrors({});
  }, [initialForm]);

  const resetErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    form,
    errors,
    resetForm,
    resetErrors,
    handleChange,
    formValidator,
    blurValidator
  };
};

export default useForm;
