import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import trip from "../assets/Trip/trip.jpg";
import booklet from "../assets/Downloads/booklet.pdf";
import draws from "../assets/Downloads/draws.pdf";

interface JourneyModalProps {
  open: boolean;
  onClose: () => void;
}

const JourneyModal: React.FC<JourneyModalProps> = ({ open, onClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: "80%", md: "60%" },
    bgcolor: "grey.900",
    color: "white",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    maxHeight: "90vh",
    overflowY: "auto",
  };

  // Generamos 100 partículas aleatorias con recorrido reducido.
  const numParticles = 100;
  const particles = Array.from({ length: numParticles }, () => ({
    angle: Math.random() * 360,
    delay: Math.random() * 2, // retraso entre 0 y 2 segundos
    distance: 100 + Math.random() * 100, // recorrido entre 100 y 200px
  }));

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="journey-modal-title">
      <Box sx={style}>
        {/* Definición de keyframes para las líneas: efecto inverso */}
        <style>{`
          @keyframes particleIn {
            0% { transform: rotate(var(--angle)) translateY(0); opacity: 0; }
            100% { transform: rotate(var(--angle)) translateY(var(--distance)); opacity: 1; }
          }
        `}</style>
        {/* Botón para cerrar */}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>

        {/* Título */}
        <Typography id="journey-modal-title" variant="h6" component="h2" mb={2}>
          Viaje del astronauta
        </Typography>

        {/* Contenedor de la imagen con overlay de líneas */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            mb: 2,
            overflow: "hidden", // Clipa el overlay a la imagen
          }}
        >
          <Box
            component="img"
            src={trip}
            alt="Viaje del astronauta"
            sx={{
              width: { xs: "100%", sm: "80%", md: "60%" },
              maxWidth: 400,
              borderRadius: 2,
            }}
          />
          {/* Overlay de partículas (líneas) */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            {particles.map((particle, idx) => (
              <Box
                key={idx}
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: 1.1, // Línea más delgada
                  height: 16, // Línea un poco más corta
                  backgroundColor: "white",
                  transformOrigin: "top center",
                  animation: "particleIn 1.5s linear infinite",
                  animationDelay: `${particle.delay}s`,
                  // Variables CSS para el ángulo y la distancia
                  "--angle": `${particle.angle}deg`,
                  "--distance": `${particle.distance}px`,
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Botones de descarga */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              href={draws}
              download
              startIcon={<DownloadIcon />}
            >
              Dibujos de la infancia
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              href={booklet}
              download
              startIcon={<DownloadIcon />}
            >
              Booklet
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled
              startIcon={<DownloadIcon />}
            >
              Black Hole Album
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default JourneyModal;
