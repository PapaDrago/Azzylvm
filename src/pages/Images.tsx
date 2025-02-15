import React from "react";
import { Masonry } from "@mui/lab";
import { Container, Grid2, Box, useTheme, useMediaQuery } from "@mui/material";
import bandBlack from "../assets/Band/black.jpg";
import bandBlue from "../assets/Band/blue.jpg";
import bandGreen from "../assets/Band/green.jpg";
import bandHand from "../assets/Band/hand.jpg";
import bandLunatic from "../assets/Band/lunatic.jpg";
import blind from "../assets/Portada/blind.jpg";
import high from "../assets/Portada/high.jpg";
import only from "../assets/BlackHole/only.jpg";

// Fondo
import orange from "../assets/News/orangeBlured.jpg";
// Textura de ruido para el efecto animado (asegúrate de que la ruta sea correcta)
import noiseTexture from "../assets/noiseTexture.png";

interface ImageData {
  src: string;
  alt: string;
  height: number;
  link?: string | null;
  phone: boolean;
}

const images: ImageData[] = [
  { src: bandBlack, alt: "Band Black", height: 300, link: null, phone: true },
  { src: bandBlue, alt: "Band Blue", height: 200, link: null, phone: false },
  {
    src: blind,
    alt: "Blind Dog",
    height: 256,
    link: "https://www.youtube.com/watch?v=HBJiGqgGesQ&ab_channel=AZZYLUMOFICIAL",
    phone: false,
  },
  { src: bandHand, alt: "Band Hand", height: 300, link: null, phone: true },
  {
    src: high,
    alt: "In the Highest",
    height: 300,
    link: "https://www.youtube.com/watch?v=Yp50GlV_b14&ab_channel=AZZYLUMOFICIAL",
    phone: false,
  },
  {
    src: bandLunatic,
    alt: "Band Lunatic",
    height: 245,
    link: null,
    phone: false,
  },
  { src: bandGreen, alt: "Band Green", height: 200, link: null, phone: true },
  { src: only, alt: "The only light", height: 200, link: "/", phone: true },
];

const Images: React.FC = () => {
  const theme = useTheme();
  // Detectamos si el breakpoint actual es xs (1 columna)
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  // Si es xs, filtramos para mostrar solo las imágenes con phone: true
  const imagesToShow = isXs ? images.filter((img) => img.phone) : images;

  return (
    <Box
      sx={{
        backgroundImage: `url(${orange})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        py: 4,
      }}
    >
      <Container>
        <Grid2 container spacing={2} m={4}>
          <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
            {imagesToShow.map((image, index) => {
              const boxContent = (
                <Box
                  key={index}
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                    },
                    ...(image.link && {
                      position: "relative",
                      cursor: "pointer",
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
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        animation: "staticNoise 3s steps(20) infinite",
                        pointerEvents: "none",
                      },
                      "&:hover::after": {
                        opacity: 1,
                      },
                      "@keyframes staticNoise": {
                        "0%": { backgroundPosition: "0 0" },
                        "100%": { backgroundPosition: "200px 200px" },
                      },
                    }),
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      display: "block",
                      width: "100%",
                      height: image.height,
                      objectFit: "cover",
                    }}
                  />
                </Box>
              );

              return image.link ? (
                <a
                  key={index}
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  {boxContent}
                </a>
              ) : (
                <React.Fragment key={index}>{boxContent}</React.Fragment>
              );
            })}
          </Masonry>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Images;
