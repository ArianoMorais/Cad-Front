import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Input, Label } from "../../elements/Container/UtilComponents";

const RegisterForm = ({ formData, onChange, handleAddressChange, handleAddAddress, handleRemoveAddress, onSubmit }) => {
  return (
    <Box component="form" onSubmit={onSubmit}>
      <Box sx={{ mb: 2 }}>
        <Label variant="h6">User Information</Label>
        <Input
          label="Name"
          required
          name="name"
          value={formData.name}
          onChange={onChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Input
          label="CPF"
          required
          name="cpf"
          value={formData.cpf}
          onChange={onChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Input
          label="Email"
          required
          name="email"
          value={formData.email}
          onChange={onChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Input
          label="Phone Number"
          required
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={onChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Input
          fullWidth
          required
          label="Senha"
          name="password"
          value={formData.password}
          onChange={onChange}
          margin="normal"
          variant="outlined"
          type="password"
        />
        <Input
          fullWidth
          required
          label="Confirmar Senha"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={onChange}
          margin="normal"
          variant="outlined"
          type="password"
        />
      </Box>

      {formData.addresses.map((address, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Label variant="h6">Address {index + 1}</Label>
          
          <Input
            label="Street"
            name="street"
            value={address.street}
            onChange={(e) => handleAddressChange(index, e)}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Input
            label="City"
            name="city"
            value={address.city}
            onChange={(e) => handleAddressChange(index, e)}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Input
            label="State"
            name="state"
            value={address.state}
            onChange={(e) => handleAddressChange(index, e)}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Input
            label="Zip Code"
            name="zipCode"
            value={address.zipCode}
            onChange={(e) => handleAddressChange(index, e)}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <IconButton onClick={() => handleRemoveAddress(index)} aria-label="remove address">
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
      <Box sx={{ mt: 2, mb: 2 }}>
        <Button
        startIcon={<AddIcon />}
        onClick={handleAddAddress}
        variant="outlined"
        sx={{ mr: 1 }}
        >
        Add Address
        </Button>
        <Button type="submit" variant="contained" color="primary">
        Save Changes
        </Button>
     </Box>
    </Box>
  );
};

export default RegisterForm;