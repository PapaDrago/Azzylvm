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
import { useTranslation } from "react-i18next";
import trip from "../assets/Trip/trip.jpg";
import booklet from "../assets/Downloads/booklet.pdf";
import draws from "../assets/Downloads/draws.pdf";

interface JourneyModalProps {
  open: boolean;
  onClose: () => void;
}

const JourneyModal: React.FC<JourneyModalProps> = ({ open, onClose }) => {
  const { t } = useTranslation();

  const style = {
    position: "absolute" as const,
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
    delay: Math.random() * 2,
    distance: 100 + Math.random() * 100,
  }));

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="journey-modal-title">
      <Box sx={style}>
        <style>{`
          @keyframes particleIn {
            0% { transform: rotate(var(--angle)) translateY(0); opacity: 0; }
            100% { transform: rotate(var(--angle)) translateY(var(--distance)); opacity: 1; }
          }
        `}</style>

        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
          aria-label={t("journey.closeLabel")}
        >
          <CloseIcon />
        </IconButton>

        <Typography id="journey-modal-title" variant="h6" component="h2" mb={2}>
          {t("journey.title")}
        </Typography>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            mb: 2,
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={trip}
            alt={t("journey.alt")}
            sx={{
              width: { xs: "100%", sm: "80%", md: "60%" },
              maxWidth: 400,
              borderRadius: 2,
            }}
          />
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
                  width: 1.1,
                  height: 16,
                  backgroundColor: "white",
                  transformOrigin: "top center",
                  animation: "particleIn 1.5s linear infinite",
                  animationDelay: `${particle.delay}s`,
                  "--angle": `${particle.angle}deg`,
                  "--distance": `${particle.distance}px`,
                }}
              />
            ))}
          </Box>
        </Box>

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
              {t("journey.button.draws")}
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
              {t("journey.button.booklet")}
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
              {t("journey.button.album")}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default JourneyModal;
