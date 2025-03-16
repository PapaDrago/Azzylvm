import React, { useEffect, useState } from "react";
import { Box, keyframes } from "@mui/material";
import astronaut from "../assets/BlackHole/edit/astronauta.png";
import astronautBackground from "../assets/BlackHole/edit/astronautaBackground.jpg";
import SecretModal from "../components/SecretModal";
import secret from "../assets/Draws/8.png";
import secret2 from "../assets/Draws/2.png";

// Animación para simular un black hole
const blackHoleAnimation = keyframes`
  0% {
    transform: scale(1) translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: scale(5) translate(-50%, -50%) rotate(720deg);
    opacity: 0;
  }
`;

// Animación para ruido
const noiseAnimation = keyframes`
  0% {
    filter: contrast(1) brightness(1);
    transform: translate(0, 0);
  }
  25% {
    filter: contrast(1.5) brightness(1.2);
    transform: translate(-2px, 2px);
  }
  50% {
    filter: contrast(0.8) brightness(0.9);
    transform: translate(2px, -2px);
  }
  75% {
    filter: contrast(1.3) brightness(1.1);
    transform: translate(-1px, -1px);
  }
  100% {
    filter: contrast(1) brightness(1);
    transform: translate(0, 0);
  }
`;

const starTwinkleAnimation = keyframes`
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
`;

const floatingAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const Video: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const secretId = 2; // O el id que corresponda
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (
        event.data &&
        typeof event.data === "string" &&
        event.data.startsWith('{"event":"')
      ) {
        const data = JSON.parse(event.data);
        if (data.event === "onStateChange") {
          // YouTube states: 1 = playing, 2 = paused
          setIsPlaying(data.info === 1);
        }
      }
    };

    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "black",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="videos"
    >
      {/* Black hole effect */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "20vmin",
          height: "20vmin",
          background:
            "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)",
          borderRadius: "50%",
          animation: `${blackHoleAnimation} 4s linear infinite`,
          zIndex: 1,
        }}
      />

      {/* Particles being sucked into the black hole */}
      {[...Array(50)].map((_, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "0.5px",
            height: "0.5px",
            backgroundColor: "white",
            borderRadius: "50%",
            animation: `${blackHoleAnimation} 6s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Twinkling stars */}
      {[...Array(100)].map((_, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "0.1px", // Reducido de 1px a 0.5px
            height: "0.1px", // Reducido de 1px a 0.5px
            backgroundColor: "white",
            borderRadius: "50%",
            animation: `${starTwinkleAnimation} ${
              1 + Math.random() * 3
            }s infinite`,
          }}
        />
      ))}

      {/* Astronaut background */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "25vmin",
          height: "30vmin",
          backgroundImage: `url(${astronautBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
          boxShadow: "0px 0px 30px 10px rgba(0,0,0,1)",
          mixBlendMode: "darken",
          zIndex: 2,
        }}
      />

      {/* Astronauta flotante con hover y efecto al reproducir */}
      <Box
        component="img"
        src={astronaut}
        alt="Astronaut"
        onClick={handleOpen}
        sx={{
          position: "absolute",
          bottom: 20,
          left: 20,
          width: "20vmin",
          height: "auto",
          zIndex: 3,
          cursor: "pointer",
          animation: isPlaying
            ? `${noiseAnimation} 0.5s steps(5, end) infinite`
            : `${floatingAnimation} 3s ease-in-out infinite`,
          "&:hover": {
            animation: `${noiseAnimation} 0.5s steps(5, end) infinite`,
          },
        }}
      />

      <SecretModal
        open={open}
        onClose={handleClose}
        secretId={secretId}
        imageURL={secret}
        imageURL2={secret2}
        trackTitle="Black Hole"
        spotifyURL="https://open.spotify.com/embed/track/0SL8eKNBNIkOLY8Lold13n?utm_source=generator"
      />

      {/* Video de YouTube */}
      <iframe
        width="850"
        height="500"
        src="https://www.youtube.com/embed/Yp50GlV_b14?enablejsapi=1"
        title="Azzylum - In The Highest (Official Music Video)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          position: "relative",
          zIndex: 4,
        }}
        frameBorder={0}
      />
    </Box>
  );
};

export default Video;
