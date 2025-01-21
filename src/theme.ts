// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f0f0f", // Ejemplo de color principal
    },
    secondary: {
      main: "#ff3b30", // Ejemplo de color secundario
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
