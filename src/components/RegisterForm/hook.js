import { useState } from 'react';
import { registerUser } from '../../services/ApiService';
import { formatCPF, formatPhoneNumber} from '../../hooks/validations';
import { useNavigate } from 'react-router-dom';

export const useRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    addresses: [],
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cpf') {
      formattedValue = formatCPF(value);
    } else if (name === 'phoneNumber') {
      formattedValue = formatPhoneNumber(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const handleAddressChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAddresses = [...formData.addresses];
    updatedAddresses[index] = { ...updatedAddresses[index], [name]: value };
    setFormData((prev) => ({
      ...prev,
      addresses: updatedAddresses,
    }));
  };

  const handleAddAddress = () => {
    setFormData((prev) => ({
      ...prev,
      addresses: [...prev.addresses, { street: '', city: '', state: '', zipCode: '' }],
    }));
  };

  const handleRemoveAddress = (index) => {
    const updatedAddresses = formData.addresses.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      addresses: updatedAddresses,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrors(['As senhas não coincidem']);
      return;
    }

    try {
      await registerUser(formData);
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors(['Erro ao registrar usuário']);
      }
    }
  };

  return {
    formData,
    handleChange,
    handleAddressChange,
    handleAddAddress,
    handleRemoveAddress,
    handleSubmit,
    errors,
    setErrors,
  };
};