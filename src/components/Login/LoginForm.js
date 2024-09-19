import React from "react";
import { Box, Button } from "@mui/material";
import { Input, Label, Error } from "../../elements/Container/UtilComponents";

function LoginForm({ loginModel, errorMessage, handleChange, handleSubmit }) {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "300px",
      }}
    >
      <Label>Email</Label>
      <Input
        name="email"
        variant="outlined"
        value={loginModel.email}
        onChange={handleChange}
        margin="normal"
        fullWidth
        required
      />

      <Label>Password</Label>
      <Input
        name="password"
        type="password"
        variant="outlined"
        value={loginModel.password}
        onChange={handleChange}
        margin="normal"
        fullWidth
        required
      />

      {errorMessage && (
        <Error sx={{ mt: 1 }}>
          {errorMessage}
        </Error>
      )}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2, width: "100%" }}
      >
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;