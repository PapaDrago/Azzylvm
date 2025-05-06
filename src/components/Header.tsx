import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import NavButton from "./NavButton";
import logo from "../assets/Logos/Logotipo_Negro.png";
import noiseTexture from "../assets/noiseTexture.png";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Función para desplazarse al elemento con el id especificado
  const handleScroll = (anchorId: string) => {
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(6px)",
        backgroundImage: `url(${noiseTexture})`,
        backgroundRepeat: "repeat",
        backgroundBlendMode: "overlay",
        boxShadow: "none",
        animation: "staticNoise 3s steps(20) infinite",
        "@keyframes staticNoise": {
          "0%": {
            backgroundPosition: "0 0",
          },
          "100%": {
            backgroundPosition: "200px 200px",
          },
        },
      }}
    >
      <Toolbar sx={{ p: 2, display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          width={isSmallScreen ? 150 : 250}
          alt={t("header.logoAlt")}
          style={{
            filter: "invert(1)",
          }}
        />
        <Box sx={{ flexGrow: 1 }} />
        {!isSmallScreen && (
          <Stack direction="row" spacing={8} sx={{ marginRight: 15 }}>
            <NavButton onClick={() => handleScroll("inicio")}>
              {t("header.nav.inicio")}
            </NavButton>
            <NavButton onClick={() => handleScroll("videos")}>
              {t("header.nav.videos")}
            </NavButton>
            <NavButton onClick={() => handleScroll("fotos")}>
              {t("header.nav.fotos")}
            </NavButton>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
