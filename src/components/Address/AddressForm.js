import React from 'react';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Input, Label } from "../../elements/Container/UtilComponents";

const AddressForm = ({ address, index, onChange, onRemove }) => (
  <Box key={index} sx={{ mb: 2 }}>
    <Label variant="h6">Address {index + 1}</Label>
    
    <Input
      label="Street"
      name="street"
      value={address.street}
      onChange={(e) => onChange(index, e)}
      variant="outlined"
      fullWidth
      margin="normal"
    />
    
    <Input
      label="City"
      name="city"
      value={address.city}
      onChange={(e) => onChange(index, e)}
      variant="outlined"
      fullWidth
      margin="normal"
    />
    
    <Input
      label="State"
      name="state"
      value={address.state}
      onChange={(e) => onChange(index, e)}
      variant="outlined"
      fullWidth
      margin="normal"
    />
    
    <Input
      label="Zip Code"
      name="zipCode"
      value={address.zipCode}
      onChange={(e) => onChange(index, e)}
      variant="outlined"
      fullWidth
      margin="normal"
    />
    
    <IconButton onClick={() => onRemove(index)} aria-label="remove address">
      <DeleteIcon />
    </IconButton>
  </Box>
);

export default AddressForm;