import React, { useState } from 'react';
import FormSignup from './FormSignup.jsx';
import FormSuccess from './FormSuccess.jsx';
import './Form.css';

const Form = () => {
  const [isSubmitted, setIsSumitted] = useState(false);

  const submitForm = () => {
    setIsSumitted(true);
  };
  return (
    <>
      <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
          <img className="form-img" src="img/img-2.svg" alt="" />
        </div>

        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
