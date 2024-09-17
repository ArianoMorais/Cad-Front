import { useState } from 'react';

const useForm = (initialModel, onSubmit) => {
  const [model, setModel] = useState(initialModel);
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
      await onSubmit(model);
    } catch (err) {
      setError('Ocorreu um erro. Tente novamente.');
    }
  };

  return {
    model,
    error,
    handleChange,
    handleSubmit,
  };
};

export default useForm;