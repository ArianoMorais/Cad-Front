import { useState } from 'react';

// Função para validar CPF
export const formatCPF = (cpf) => {
  return cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
};

// Função para validar e formatar número de telefone no padrão (99) 999999999
export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, ''); // Remove tudo que não for dígito

  if (cleaned.length <= 2) {
    return `(${cleaned}`;
  } else if (cleaned.length <= 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  } else {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 11)}`;
  }
};

// Função para validar email simples
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Hook de validação para CPF e telefone
export const useFieldValidation = () => {
  const [errors, setErrors] = useState([]);

  const validateFields = (fieldName, value) => {
    let formattedValue = value;
    let errorMessages = [];

    switch (fieldName) {
      case 'cpf':
        formattedValue = formatCPF(value);
        if (formattedValue.length !== 11) {
          errorMessages.push('CPF deve ter 11 dígitos.');
        }
        break;

      case 'phoneNumber':
        formattedValue = formatPhoneNumber(value);
        if (formattedValue.length !== 15) {
          errorMessages.push('Número de telefone deve seguir o formato (99) 999999999.');
        }
        break;

      case 'email':
        if (!validateEmail(value)) {
          errorMessages.push('Email inválido.');
        }
        break;

      default:
        break;
    }

    setErrors(errorMessages);
    return { formattedValue, isValid: errorMessages.length === 0 };
  };

  return {
    errors,
    setErrors,
    validateFields,
  };
};