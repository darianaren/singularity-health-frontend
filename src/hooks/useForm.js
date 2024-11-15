import { useState, useCallback } from "react";

const useForm = (initialForm = {}, validateForm = () => ({})) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const changeHandler = useCallback(
    (event) => {
      const { name, value } = event.target;

      const updatedForm = { ...form, [name]: value };

      setForm(updatedForm);
      setErrors(validateForm(updatedForm));
    },
    [form, validateForm]
  );

  const resetHandler = useCallback(() => {
    setForm(initialForm);
    setErrors({});
  }, [initialForm]);

  const resetErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    form,
    errors,
    resetErrors,
    resetHandler,
    changeHandler
  };
};

export default useForm;
