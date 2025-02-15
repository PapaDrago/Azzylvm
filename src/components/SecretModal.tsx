import React, { useEffect, useContext } from "react";
import { Modal, Box, Typography, IconButton, Grid2 } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SecretsContext } from "../contexts/SecretsContext";
import noiseTexture from "../assets/noiseTexture.png";

interface SecretModalProps {
  open: boolean;
  onClose: () => void;
  secretId: number;
  imageURL: string;
  imageURL2?: string;
  spotifyURL: string;
  trackTitle: string;
}

const SecretModal: React.FC<SecretModalProps> = ({
  open,
  onClose,
  secretId,
  imageURL,
  imageURL2,
  spotifyURL,
}) => {
  const { markSecretFound } = useContext(SecretsContext);

  // Cuando el modal se abre, se marca el secreto como encontrado
  useEffect(() => {
    if (open) {
      markSecretFound(secretId);
    }
  }, [open, secretId, markSecretFound]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: "80%", md: "60%" },
    bgcolor: "grey.900", // Fondo oscuro
    color: "white", // Texto en blanco
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius: 2,
    animation: "modalEntry 0.5s ease-out", // Animación de entrada
    "@keyframes modalEntry": {
      "0%": {
        opacity: 0,
        transform: "translate(-50%, -60%)",
      },
      "100%": {
        opacity: 1,
        transform: "translate(-50%, -50%)",
      },
    },
    maxHeight: "90vh", // Máxima altura del modal
    overflowY: "auto", // Habilita scroll vertical si el contenido excede la altura
  };

  // Estilo para el contenedor de cada imagen con filtro permanente
  const imageContainerStyle = {
    position: "relative",
    display: "inline-block",
    mx: "auto",
    mb: 2,
    maxWidth: 280,
    borderRadius: "16px",
    overflow: "hidden",
    "& img": {
      display: "block",
      width: "100%",
      borderRadius: "16px",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${noiseTexture})`,
      backgroundRepeat: "repeat",
      backgroundBlendMode: "overlay",
      opacity: 1,
      animation: "staticNoise 3s steps(20) infinite",
      pointerEvents: "none",
    },
    "@keyframes staticNoise": {
      "0%": { backgroundPosition: "0 0" },
      "100%": { backgroundPosition: "200px 200px" },
    },
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby={`secret-modal-${secretId}`}
    >
      <Box sx={style}>
        {/* Botón para cerrar */}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>

        {/* Título del modal */}
        <Typography
          id={`secret-modal-${secretId}`}
          variant="h6"
          component="h2"
          mb={2}
        >
          Dibujos de la infancia: {secretId}
        </Typography>

        {/* Imágenes en el centro con filtro permanente */}
        <Grid2 container justifyContent="center">
          <Box sx={imageContainerStyle}>
            <img src={imageURL} alt="Dibujo de la infancia" />
          </Box>
          {imageURL2 && (
            <Box sx={imageContainerStyle}>
              <img src={imageURL2} alt="Dibujo de la infancia" />
            </Box>
          )}
        </Grid2>

        <Grid2 container>
          <iframe
            style={{
              borderRadius: "16px",
              backgroundColor: "transparent",
            }}
            src={spotifyURL}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Audio"
          ></iframe>
        </Grid2>
      </Box>
    </Modal>
  );
};

export default SecretModal;
