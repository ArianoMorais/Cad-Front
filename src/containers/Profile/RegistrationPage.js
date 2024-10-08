import React, { useEffect } from 'react';
import { useRegistration } from '../../components/RegisterForm/hook';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import FormLayout from '../../components/FormLayout';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

const AutoDismissAlert = ({ message, onClose, duration }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <Alert
      onClose={onClose}
      severity="error"
      sx={{
        mb: 1,
        width: 'auto',
        maxWidth: '400px',
      }}
    >
      {message}
    </Alert>
  );
};

const RegistrationPage = () => {
  const {
    formData,
    handleChange,
    handleAddressChange,
    handleAddAddress,
    handleRemoveAddress,
    handleSubmit,
    errors,
    setErrors,
  } = useRegistration();

  const handleClose = (index) => {
    setErrors((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <FormLayout title="Cadastro">
        <RegisterForm
          formData={formData}
          onChange={handleChange}
          handleAddressChange={handleAddressChange}
          handleAddAddress={handleAddAddress}
          handleRemoveAddress={handleRemoveAddress}
          onSubmit={handleSubmit}
        />
        <Box
          sx={{
            position: 'fixed',
            bottom: 16,
            left: 16,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            zIndex: 1300,
            maxWidth: '300px',
            width: '100%',
          }}
        >
          {errors.map((error, index) => (
            <AutoDismissAlert
              key={index}
              message={error}
              onClose={() => handleClose(index)}
              duration={3000}
            />
          ))}
        </Box>
      </FormLayout>
    </div>
  );
};

export default RegistrationPage;