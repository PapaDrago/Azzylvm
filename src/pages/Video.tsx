import React, { useEffect, useState } from "react";
import { Box, keyframes, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import astronaut from "../assets/BlackHole/edit/astronauta.png";
import astronautBackground from "../assets/BlackHole/edit/astronautaBackground.jpg";
import SecretModal from "../components/SecretModal";
import secret from "../assets/Draws/8.png";
import secret2 from "../assets/Draws/2.png";
import { useTheme, useMediaQuery } from "@mui/material";

// Animaciones...
const blackHoleAnimation = keyframes`
  0% { transform: scale(1) translate(-50%, -50%) rotate(0deg); opacity: 1; }
  100% { transform: scale(5) translate(-50%, -50%) rotate(720deg); opacity: 0; }
`;
const noiseAnimation = keyframes`
  0% { filter: contrast(1) brightness(1); transform: translate(0,0); }
  25% { filter: contrast(1.5) brightness(1.2); transform: translate(-2px,2px); }
  50% { filter: contrast(0.8) brightness(0.9); transform: translate(2px,-2px); }
  75% { filter: contrast(1.3) brightness(1.1); transform: translate(-1px,-1px); }
  100% { filter: contrast(1) brightness(1); transform: translate(0,0); }
`;
const starTwinkleAnimation = keyframes`
  0%,100% { opacity: 0.8; }
  50% { opacity: 1; }
`;
const floatingAnimation = keyframes`
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const Video: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const secretId = 2;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // ** Carrusel de videos **
  const videoIds = [
    "mmvlLAgfxdg?si=ZQdKUT8wxKeQ9mGN", // NOISES
    "yA-zl6eZ6Dc", // Black Hole (oficial lyric)
    "Yp50GlV_b14", // AZZYLVMOFICIAL
    "HBJiGqgGesQ", // AZZYLVMOFICIAL
    "bD1HeXXd714", // AZZYLVMOFICIAL
  ];
  const [currentVideo, setCurrentVideo] = useState(0);
  const prevVideo = () =>
    setCurrentVideo((c) => (c === 0 ? videoIds.length - 1 : c - 1));
  const nextVideo = () =>
    setCurrentVideo((c) => (c === videoIds.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (
        event.data &&
        typeof event.data === "string" &&
        event.data.startsWith('{"event":"')
      ) {
        const data = JSON.parse(event.data);
        if (data.event === "onStateChange") {
          setIsPlaying(data.info === 1);
        }
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <Box
      id="videos"
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
      {/* Partículas */}
      {[...Array(50)].map((_, i) => (
        <Box
          key={i}
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
      {/* Estrellas titilando */}
      {[...Array(100)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "0.1px",
            height: "0.1px",
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

      {/* Astronauta */}
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
        spotifyURL="https://open.spotify.com/embed/track/6HZdQNnUKVMbdn86vGKjha?utm_source=generator"
      />

      {/* Iframe del video actual */}
      <Box
        component="iframe"
        src={`https://www.youtube.com/embed/${videoIds[currentVideo]}?enablejsapi=1`}
        title={`video-${videoIds[currentVideo]}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder="0"
        sx={{
          position: "relative",
          zIndex: 4,
          borderRadius: 2,
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          width: { xs: "90%", sm: "80%", md: "60%" },
          height: { xs: 200, sm: 400, md: 500 },
        }}
      />
      <IconButton
        onClick={prevVideo}
        sx={{
          position: isMobile ? "static" : "absolute",
          left: isMobile ? "auto" : 16,
          top: isMobile ? "auto" : "50%",
          transform: isMobile ? "none" : "translateY(-50%)",
          color: "white",
          mt: isMobile ? 2 : 0,
          mx: isMobile ? 1 : 0,
        }}
      >
        <ChevronLeftIcon fontSize="large" />
      </IconButton>

      <IconButton
        onClick={nextVideo}
        sx={{
          position: isMobile ? "static" : "absolute",
          right: isMobile ? "auto" : 16,
          top: isMobile ? "auto" : "50%",
          transform: isMobile ? "none" : "translateY(-50%)",
          color: "white",
          mt: isMobile ? 2 : 0,
          mx: isMobile ? 1 : 0,
        }}
      >
        <ChevronRightIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default Video;
