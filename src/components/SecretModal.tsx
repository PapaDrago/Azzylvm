import React, { useEffect, useContext } from "react";
import { Modal, Box, Typography, IconButton, Grid2 } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { SecretsContext } from "../contexts/SecretsContext";
import noiseTexture from "../assets/noiseTexture.png";

interface SecretModalProps {
  open: boolean;
  onClose: () => void;
  secretId: number;
  imageURL: string;
  imageURL2?: string;
  spotifyURL: string;
}

const SecretModal: React.FC<SecretModalProps> = ({
  open,
  onClose,
  secretId,
  imageURL,
  imageURL2,
  spotifyURL,
}) => {
  const { t } = useTranslation();
  const { markSecretFound } = useContext(SecretsContext);

  useEffect(() => {
    if (open) {
      markSecretFound(secretId);
    }
  }, [open, secretId, markSecretFound]);

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
    outline: "none",
    borderRadius: 2,
    animation: "modalEntry 0.5s ease-out",
    "@keyframes modalEntry": {
      "0%": { opacity: 0, transform: "translate(-50%, -60%)" },
      "100%": { opacity: 1, transform: "translate(-50%, -50%)" },
    },
    maxHeight: "90vh",
    overflowY: "auto",
  };

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
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
          aria-label={t("secret.closeLabel")}
        >
          <CloseIcon />
        </IconButton>

        <Typography
          id={`secret-modal-${secretId}`}
          variant="h6"
          component="h2"
          mb={2}
        >
          {t("secret.title", { id: secretId })}
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

        <Box mt={2}>
          <iframe
            style={{ borderRadius: "16px", backgroundColor: "transparent" }}
            src={spotifyURL}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={t("secret.spotifyTitle")}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default SecretModal;
