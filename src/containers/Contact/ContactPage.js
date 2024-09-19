import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function ContactPage() {
  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '100vh', 
        backgroundColor: 'background.default',
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}
      >
        Entre em Contato
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px' }}>
        Tem perguntas ou precisa de mais informações? Estamos aqui para ajudar! 
        Sinta-se à vontade para entrar em contato conosco através de um dos métodos abaixo.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mb: 4 }}
        href="mailto:contato@empresa.com"
      >
        Enviar E-mail
      </Button>

      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ maxWidth: '500px' }}
      >
        Nosso horário de atendimento é de segunda a sexta, das 9h às 18h. Retornaremos seu contato o mais breve possível.
      </Typography>
    </Box>
  );
}

export default ContactPage;