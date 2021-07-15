import { useState, useEffect } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password: '',
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(values));
  };
  return [values, handleChange, handleSubmit, error];
};

export default useForm;
