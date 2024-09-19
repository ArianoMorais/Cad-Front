import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function FormLayout({ title, children }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default FormLayout;