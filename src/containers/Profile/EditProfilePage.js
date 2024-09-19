import React, { useEffect } from 'react';
import { useProfile } from '../../components/Profile/hook';
import ProfileForm from '../../components/Profile/ProfileForm';
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

const EditProfilePage = () => {
  const {
    formData,
    handleChange,
    handleAddressChange,
    handleAddAddress,
    handleRemoveAddress,
    handleSubmit,
    errors,
    setErrors,
  } = useProfile();

  const handleClose = (index) => {
    setErrors(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <FormLayout title="Edit Profile">
        <ProfileForm
          formData={formData}
          onChange={handleChange}
          handleAddressChange={handleAddressChange}
          handleAddAddress={handleAddAddress}
          handleRemoveAddress={handleRemoveAddress}
          onSubmit={handleSubmit}
        />

        <Box sx={{
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
        }}>
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

export default EditProfilePage;