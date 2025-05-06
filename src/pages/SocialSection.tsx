import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  Link,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FaTiktok } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";

// Aquí puedes reemplazar las URL con tus enlaces
const socialLinks = [
  {
    name: "Instagram",
    icon: <InstagramIcon fontSize="large" />,
    url: "https://instagram.com/tu_usuario",
  },
  {
    name: "Facebook",
    icon: <FacebookIcon fontSize="large" />,
    url: "https://facebook.com/tu_pagina",
  },
  {
    name: "YouTube",
    icon: <YouTubeIcon fontSize="large" />,
    url: "https://youtube.com/tu_canal",
  },
  {
    name: "TikTok",
    icon: <FaTiktok size={32} />,
    url: "https://tiktok.com/@tu_usuario",
  },
];

// Variants para animación de aparición
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300 },
  },
};

const SocialSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      component={motion.section}
      id="social"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 10 },
        backgroundColor: "#fff",
        backgroundImage: "radial-gradient(#999 2px, transparent 2px)",
        backgroundSize: "20px 20px",
        // Animación de movimiento de puntos hacia abajo y derecha
        animation: "moveDots 30s linear infinite",
        "@keyframes moveDots": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "200px 200px" },
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          component={motion.h2}
          variants={itemVariants}
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#000" }}
        >
          {t("social.follow")}
        </Typography>

        <Grid
          component={motion.div}
          variants={containerVariants}
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {socialLinks.map(({ name, icon, url }) => (
            <Grid
              item
              key={name}
              component={motion.div}
              variants={itemVariants}
            >
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <IconButton
                  sx={{
                    bgcolor: "transparent",
                    color: "#000",
                    border: "2px solid #000",
                    width: { xs: 56, sm: 64 },
                    height: { xs: 56, sm: 64 },
                    transition:
                      "transform 0.2s ease, background-color 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                      backgroundColor: "#f2f2f2",
                      borderColor: "#900C3F",
                    },
                  }}
                >
                  {icon}
                </IconButton>
                <Typography
                  variant="subtitle2"
                  align="center"
                  mt={1}
                  color="#000"
                >
                  {name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SocialSection;
