import { useState, useEffect } from 'react';
import { getUserData, updateUserData } from '../../services/UserService';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const useEditProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    email: '',
    phoneNumber: '',
    addresses: [],
  });
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const data = await getUserData(user.id);
          setFormData(data);
        } catch (error) {
          console.error('Erro ao buscar dados do usuário', error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAddresses = [...formData.addresses];
    updatedAddresses[index] = { ...updatedAddresses[index], [name]: value };
    setFormData(prev => ({
      ...prev,
      addresses: updatedAddresses,
    }));
  };

  const handleAddAddress = () => {
    setFormData(prev => ({
      ...prev,
      addresses: [...prev.addresses, { street: '', city: '', state: '', zipCode: '' }],
    }));
  };

  const handleRemoveAddress = (index) => {
    const updatedAddresses = formData.addresses.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      addresses: updatedAddresses,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserData(formData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao atualizar perfil', error);
      
      if (error.response && error.response.data && error.response.data.erros) {
        setErrors(error.response.data.erros);
      } else {
        setErrors(['Erro ao atualizar perfil']);
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