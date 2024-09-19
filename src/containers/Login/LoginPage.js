import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../components/Login/hook.js';
import LoginForm from '../../components/Login/LoginForm.js';
import FormLayout from '../../components/FormLayout';

function LoginPage() {
  const navigate = useNavigate();
  const { loginModel, errorMessage, handleChange, handleSubmit } = useLogin();

  const onSubmit = (e) => handleSubmit(e, navigate);

  return (
    <FormLayout title="Login">
      <LoginForm
        loginModel={loginModel}
        errorMessage={errorMessage}
        handleChange={handleChange}
        handleSubmit={onSubmit}
      />
    </FormLayout>
  );
}

export default LoginPage;