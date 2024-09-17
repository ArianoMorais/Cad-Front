import { useState } from 'react';
import { login } from '../services/authService';

const useLoginForm = () => {
  const [model, setModel] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setModel({
      ...model,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(model);
      if (response.status === 200) {
        window.location.href = '/dashboard';
      }
    } catch (err) {
      setError('Falha ao fazer login. Verifique suas credenciais e tente novamente.');
    }
  };

  return {
    model,
    error,
    handleChange,
    handleSubmit,
  };
};

export default useLoginForm;