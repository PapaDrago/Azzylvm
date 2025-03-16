import React, { useState } from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyIcon from "@mui/icons-material/Key";
import SecretModal from "../components/SecretModal";
// import secretImg from "../assets/Draws/10.png";
// import secretImg2 from "../assets/Draws/9.png";
import secretImg from "../assets/Draws/4.png";
import secretImg2 from "../assets/Draws/14.png";

const Footer: React.FC = () => {
  const [secretModalOpen, setSecretModalOpen] = useState(false);
  const handleSecretOpen = () => setSecretModalOpen(true);
  const handleSecretClose = () => setSecretModalOpen(false);

  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "black",
          color: "white",
          py: 3,
          borderTop: "1px solid #333",
          position: "relative", // Importante para posicionar el elemento del desarrollador
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Enlaces de redes sociales y el icono secreto */}
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <IconButton
              component={Link}
              href="https://www.instagram.com/azzylvm.oficial/"
              target="_blank"
              sx={{ color: "white" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.facebook.com/Azzylvm.Oficial?locale=es_LA"
              target="_blank"
              sx={{ color: "white" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.youtube.com/@azzylumoficial4620"
              target="_blank"
              sx={{ color: "white" }}
            >
              <YouTubeIcon />
            </IconButton>
            {/* Nuevo icono para el quinto secreto */}
            <IconButton onClick={handleSecretOpen} sx={{ color: "white" }}>
              <KeyIcon />
            </IconButton>
          </Box>

          {/* Información final */}
          <Typography variant="body2" sx={{ mb: 1 }}>
            © {new Date().getFullYear()} Azzylum. Todos los derechos reservados.
          </Typography>
          <Typography variant="caption" sx={{ fontStyle: "italic" }}>
            Stars can't shine whitout darkness.
          </Typography>
        </Container>

        {/* Texto del desarrollador en la esquina inferior izquierda */}
        <Link
          href="https://www.linkedin.com/in/oscar-huerta-b08b30128/"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{
            position: "absolute",
            left: 16,
            bottom: 8,
            color: "white",
            fontSize: "0.75rem",
          }}
        >
          Desarrollado por Oscar Huerta
        </Link>
      </Box>

      {/* Modal para el quinto secreto */}
      <SecretModal
        open={secretModalOpen}
        onClose={handleSecretClose}
        secretId={5}
        imageURL={secretImg}
        imageURL2={secretImg2}
        spotifyURL="https://open.spotify.com/embed/track/5Z7D96k9JPtbZC25ikUDz8?utm_source=generator"
        trackTitle="The Fifth Secret"
      />
    </>
  );
};

export default Footer;
