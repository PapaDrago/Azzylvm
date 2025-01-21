import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../assets/BlackHole/ghost.jpg";

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
        justifyContent: "center",
        color: "#FFFFFF",
        padding: 4,
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
          fontSize: 200,
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
      >
        {hoverText}
      </Typography>
    </Box>
  );
};

export default Home;
