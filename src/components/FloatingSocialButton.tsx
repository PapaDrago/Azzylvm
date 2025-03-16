import React, { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AppleIcon from "@mui/icons-material/Apple";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import bandLogo from "../assets/Logos/Isologo Azzylum_Negro.png";
import SecretModal from "../components/SecretModal";
import secret from "../assets/Draws/5.png";
import secret2 from "../assets/Draws/10.png";

const actions = [
  {
    icon: <InstagramIcon />,
    name: "Instagram",
    url: "https://www.instagram.com/azzylvm.oficial/",
  },
  {
    icon: <FacebookIcon />,
    name: "Facebook",
    url: "https://www.facebook.com/Azzylvm.Oficial?locale=es_LA",
  },
  {
    icon: <YouTubeIcon />,
    name: "YouTube",
    url: "https://www.youtube.com/@azzylumoficial4620",
  },
  {
    icon: <AppleIcon />,
    name: "Apple Music",
    url: "https://music.apple.com/mx/artist/azzylum/1512003391",
  },
  {
    icon: <LibraryMusicIcon />,
    name: "Spotify",
    url: "https://open.spotify.com/intl-es/artist/2KZlmeXJr5kYGld8NkyrUd",
  },
  {
    icon: <SentimentSatisfiedIcon />,
    name: "Black Hole",
    url: "#",
  },
];

const FloatingSocialButton: React.FC = () => {
  const [secretModalOpen, setSecretModalOpen] = useState(false);
  const handleSecretModalOpen = () => setSecretModalOpen(true);
  const handleSecretModalClose = () => setSecretModalOpen(false);

  return (
    <>
      <SpeedDial
        ariaLabel="Social Media Links"
        sx={{ position: "fixed", bottom: 24, right: 24 }}
        FabProps={{
          sx: {
            backgroundColor: "white",
            width: 80,
            height: 80,
            transition: "transform 0.3s",
            animation: "float 3s ease-in-out infinite",
            "&:hover": {
              backgroundColor: "white",
            },
            "@keyframes float": {
              "0%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-5px)" },
              "100%": { transform: "translateY(0px)" },
            },
          },
        }}
        icon={
          <Box
            component="img"
            src={bandLogo}
            alt="Band Logo"
            sx={{ width: 70, height: 70, borderRadius: "50%" }}
          />
        }
      >
        {actions.map((action) =>
          action.name === "Black Hole" ? (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleSecretModalOpen}
            />
          ) : (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() =>
                window.open(action.url, "_blank", "noopener,noreferrer")
              }
            />
          )
        )}
      </SpeedDial>

      {/* Modal secreto para "Black Hole" */}
      <SecretModal
        open={secretModalOpen}
        onClose={handleSecretModalClose}
        secretId={4}
        imageURL={secret}
        imageURL2={secret2}
        spotifyURL="https://open.spotify.com/embed/track/37KrcYMI6pQL1whDX1hJQu?utm_source=generator"
        trackTitle="Black Hole"
      />
    </>
  );
};

export default FloatingSocialButton;
