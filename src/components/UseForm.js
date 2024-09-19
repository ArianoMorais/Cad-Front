import React from 'react';
import { Box } from '@mui/material';
import { Input } from "../elements/Container/UtilComponents";

const UserForm = ({ formData, onChange }) => (
  <Box>
    <Input
      label="Name"
      name="name"
      value={formData.name}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
    />
    <Input
      label="CPF"
      name="cpf"
      value={formData.cpf}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
    />
    <Input
      label="Email"
      name="email"
      value={formData.email}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
    />
    <Input
      label="Phone Number"
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  </Box>
);

export default UserForm;