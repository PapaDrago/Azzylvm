import React, { useState, useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../assets/BlackHole/ghost.jpg";
import SecretModal from "../components/SecretModal";
import secret from "../assets/Draws/4.png";
import secret2 from "../assets/Draws/14.png";
import { SecretsContext } from "../contexts/SecretsContext";

const getRandomText = (length: number) => {
  const characters =
    "AEGHIKLNOTVWXYZ0123456789010101010101010101010101010101010101";
  let randomText = "";
  for (let i = 0; i < length; i++) {
    randomText += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomText;
};

const Home: React.FC = () => {
  const [hoverText, setHoverText] = useState("Próximamente");
  const originalText = "Próximamente";
  const [open, setOpen] = useState(false);
  const secretId = 1; // El id del secreto actual

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMouseEnter = () => {
    const textLength = originalText.length;
    let currentText = "";
    let index = -8;

    const randomizeText = () => {
      if (index < textLength) {
        currentText += originalText.charAt(index);
        setHoverText(
          currentText + getRandomText(textLength - currentText.length)
        );
        index++;
      } else {
        setHoverText(originalText);
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(randomizeText, 80);
  };

  // Accedemos al contexto de secretos para calcular el progreso
  const { secrets } = useContext(SecretsContext);
  const totalSecrets = secrets.length;
  const foundCount = secrets.filter((s) => s.found).length;
  const progressPercentage = (foundCount / totalSecrets) * 100;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 1) 100%), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: { sm: "flex-start", md: "center" },
        color: "#FFFFFF",
        p: 4,
        pt: { xs: 16, md: 0 },
      }}
    >
      {/* Texto principal */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          mb: 2,
          color: "#FFFFFF",
          fontSize: { xs: "5rem", sm: "6rem", md: "8rem", lg: 200 },
        }}
      >
        Black Hole
      </Typography>

      {/* Subtexto "Próximamente" */}
      <Typography
        variant="h5"
        sx={{
          color: "#FFFFFF",
          opacity: 0.8,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            opacity: 0.6,
            transform: "scale(1.05)",
            cursor: "pointer",
          },
        }}
        onMouseEnter={handleMouseEnter}
        onClick={handleOpen}
      >
        {hoverText}
      </Typography>

      {/* Modal secreto */}
      <SecretModal
        open={open}
        onClose={handleClose}
        secretId={secretId}
        imageURL={secret2}
        imageURL2={secret}
        spotifyURL="https://open.spotify.com/embed/track/0DU5ltQGfDPRgH69lDI3vw?utm_source=generator"
        trackTitle="Black Hole"
      />

      {/* Botón de progreso de secretos */}
      <Button
        disabled
        sx={{
          position: "fixed",
          bottom: 16,
          right: { xs: 0, sm: 150 },
          transform: { xs: "translateX(-50%)", sm: "none" },
          width: 220,
          height: 50,
          fontWeight: "bold",
          fontSize: "1rem",
          color: "white !important",
          // Fondo con efecto de progreso: se llena desde la izquierda según progressPercentage
          background: `linear-gradient(to right,rgb(165, 165, 165) ${progressPercentage}%, #555 ${progressPercentage}%)`,
          transition: "background 0.5s ease",
          borderRadius: 2,
          zIndex: 99999,
        }}
      >
        Secretos: {foundCount} / {totalSecrets}
      </Button>
    </Box>
  );
};

export default Home;
