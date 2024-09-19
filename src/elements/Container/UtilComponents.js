// StyledComponents.js
import { Box, TextField, Typography} from "@mui/material";
import { styled } from "@mui/system";

export const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const Input = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.dark, 
  width: "100%",
  "& .MuiInputBase-root": {
    fontSize: "0.875rem", 
    color: theme.palette.text.primary,
  },
}));

export const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  display: "block",
}));

export const Error = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  marginTop: "8px",
  fontSize: "12px",
}));