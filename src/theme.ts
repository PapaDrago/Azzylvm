// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A1A1A", // Color principal
    },
    secondary: {
      main: "#E50914", // Color secundario
    },
  },
  typography: {
    // Tipografía por defecto para toda la aplicación
    fontFamily: '"Bebas Neue", sans-serif',

    // Personalizar variantes específicas si es necesario
    h1: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontWeight: 400,
      fontSize: "3rem",
    },
    h2: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontWeight: 400,
      fontSize: "2.5rem",
    },
    button: {
      fontFamily: '"Bebas Neue", sans-serif',
      textTransform: "none", // Evita que el texto de los botones se convierta a mayúsculas
      fontSize: "1.2rem", // Tamaño de fuente aumentado
    },
    // Puedes personalizar más variantes según necesites
  },
});

export default theme;
