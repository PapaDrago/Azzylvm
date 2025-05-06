import React, { useState } from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyIcon from "@mui/icons-material/Key";
import { useTranslation } from "react-i18next";
import SecretModal from "../components/SecretModal";
import secretImg from "../assets/Draws/4.png";
import secretImg2 from "../assets/Draws/14.png";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [secretModalOpen, setSecretModalOpen] = useState(false);
  const handleSecretOpen = () => setSecretModalOpen(true);
  const handleSecretClose = () => setSecretModalOpen(false);
  const year = new Date().getFullYear();

  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "black",
          color: "white",
          py: 3,
          borderTop: "1px solid #333",
          position: "relative",
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
          {/* Redes sociales y secreto */}
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
            <IconButton onClick={handleSecretOpen} sx={{ color: "white" }}>
              <KeyIcon />
            </IconButton>
          </Box>

          {/* Textos traducibles */}
          <Typography variant="body2" sx={{ mb: 1 }}>
            {t("footer.copyright", { year })}
          </Typography>
          <Typography variant="caption" sx={{ fontStyle: "italic" }}>
            {t("footer.tagline")}
          </Typography>
        </Container>

        {/* Desarrollador */}
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
          {t("footer.developedBy", { name: "Oscar Huerta" })}
        </Link>
      </Box>

      {/* Modal del quinto secreto */}
      <SecretModal
        open={secretModalOpen}
        onClose={handleSecretClose}
        secretId={5}
        imageURL={secretImg}
        imageURL2={secretImg2}
        spotifyURL="https://open.spotify.com/embed/track/5Z7D96k9JPtbZC25ikUDz8?utm_source=generator"
      />
    </>
  );
};

export default Footer;
