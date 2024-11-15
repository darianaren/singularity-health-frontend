import { useState, useCallback } from "react";

import { APPLY_MASK } from "@/utils/constants/inputMasks";

/**
 * Custom hook to manage forms with validations and masks.
 *
 * @param {Object} config - Hook configuration.
 * @param {Object} [config.applyMask={}] - Defines masks for the form fields. Keys are field names, and values are mask types.
 * @param {Object} [config.initialForm={}] - Initial state of the form. Keys are field names, and values are the initial values.
 * @param {Object} [config.validateForm={}] - Validation rules for the fields. Keys are field names, and values are objects with the rules:
 *   - `required` (boolean): Indicates whether the field is required.
 *   - `pattern` (RegExp): Regular expression to validate the field.
 *   - `customValidator` (Function): Custom function to validate the field. Should return `true` if the field is invalid.
 *   - `message` (string): Error message to display if validation fails.
 *
 * @returns {Object} - Methods and states to manage the form.
 *   @property {Object} form - Current state of the form fields.
 *   @property {Object} errors - Current validation errors.
 *   @property {Function} handleChange - Handles changes in a form field, applying masks if defined.
 *   @property {Function} blurValidator - Validates a specific field when it loses focus (`blur`).
 *   @property {Function} formValidator - Validates all fields in the form.
 *   @property {Function} resetForm - Resets the form to its initial state.
 *   @property {Function} resetErrors - Clears all current errors.
 */
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
