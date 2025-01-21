// src/components/Header.tsx
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

const Header: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(6px)",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
        backgroundRepeat: "repeat",
        backgroundBlendMode: "overlay",
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
