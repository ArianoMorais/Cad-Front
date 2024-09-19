import { useState, useEffect } from 'react';
import { getUserData, updateUserData } from '../../services/ApiService';
import { useAuth } from '../../context/AuthContext';
import { formatCPF, formatPhoneNumber} from '../../hooks/validations';
import { useNavigate } from 'react-router-dom';

export const useProfile = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    id: userId,
    userId: userId,
    name: '',
    cpf: '',
    email: '',
    phoneNumber: '',
    addresses: [],
  });
  
  const [errors, setErrors] = useState([]);


  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const data = await getUserData(userId);
          setFormData(data);
        } catch (error) {
          setErrors(['Erro ao buscar dados do usuário']);
          console.error('Erro ao buscar dados do usuário', error);
        }
      }
    };

    fetchUserData();
  }, [userId]);

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
    try {
      await updateUserData(formData);
      navigate('/dashboard');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
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