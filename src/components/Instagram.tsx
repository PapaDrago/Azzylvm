import React, { useEffect } from "react";
import { Container, Grid2 } from "@mui/material";

const Instagram: React.FC = () => {
  useEffect(() => {
    // Verifica si el script ya está cargado
    if (
      !document.querySelector(
        'script[src="https://cdn.lightwidget.com/widgets/lightwidget.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Grid2>
      <Container>
        <Grid2 container py={5}>
          <iframe
            src="//lightwidget.com/widgets/fea23021226952d782905d5591dbad64.html"
            allowTransparency={true}
            className="lightwidget-widget"
            style={{
              width: "100%",
              height: "500px",
              border: 0,
              overflow: "hidden",
            }}
            scrolling="no"
          ></iframe>
        </Grid2>
      </Container>
    </Grid2>
  );
};

export default Instagram;
