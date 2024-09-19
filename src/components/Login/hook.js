import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export const useLogin = () => {
  const [loginModel, setLoginModel] = useState({ email: '', password: '' });
  const { login } = useAuth(); 
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setLoginModel({
      ...loginModel,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e, navigate) => {
    e.preventDefault();
    try {
      await login(loginModel);
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  };

  return {
    loginModel,
    errorMessage,
    handleChange,
    handleSubmit,
  };
};