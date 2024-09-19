import React from "react";
import { Box, Typography } from "@mui/material";

function DashboardContent({ firstName, lastName }) {
  return (
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        padding: "20px",
        boxShadow: 3, 
        borderRadius: 2, 
        backgroundColor: "background.paper",
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        sx={{
          marginBottom: 2,
          fontWeight: "bold",
          textAlign: "center",
          color: "primary.main",
        }}
      >
        Bem-vindo, {firstName} {lastName}! O que deseja fazer hoje?”
      </Typography>
    </Box>
  );
}

export default DashboardContent;