import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import NavButton from "./NavButton";
import logo from "../assets/Logos/Logotipo_Negro.png";
import noiseTexture from "../assets/noiseTexture.png";

const Header: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Transparencia
        backdropFilter: "blur(6px)", // Efecto de desenfoque
        backgroundImage: `url(${noiseTexture})`, // Textura de ruido
        backgroundRepeat: "repeat", // Patrón repetido
        backgroundBlendMode: "overlay",
        boxShadow: "none",
        animation: "staticNoise 3s steps(20) infinite", // Animación de estática más lenta
        "@keyframes staticNoise": {
          "0%": {
            backgroundPosition: "0 0",
          },
          "100%": {
            backgroundPosition: "200px 200px", // Simula movimiento en todas direcciones
          },
        },
      }}
    >
      <Toolbar sx={{ p: 2, display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          width={isSmallScreen ? 150 : 250}
          alt="Logotipo de Azzylvm"
          style={{
            filter: "invert(1)",
          }}
        />
        <Box sx={{ flexGrow: 1 }} />
        {!isSmallScreen && (
          <Stack direction="row" spacing={8} sx={{ marginRight: 15 }}>
            <NavButton onClick={() => console.log("Ir a Inicio")}>
              Inicio
            </NavButton>
            <NavButton onClick={() => console.log("Ir a Black Hole")}>
              Black Hole
            </NavButton>
            <NavButton onClick={() => console.log("Ir a Videos")}>
              Videos
            </NavButton>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
