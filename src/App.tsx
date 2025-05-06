import FloatingSocialButton from "./components/FloatingSocialButton";
import Header from "./components/Header";
import Home from "./pages/Home";
import Images from "./pages/Images";
import Video from "./pages/Video";
import { SecretsProvider } from "./contexts/SecretsContext";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import SocialSection from "./pages/SocialSection";

function App() {
  return (
    <SecretsProvider>
      <Header />
      <Video />
      <SocialSection />
      <Home />
      <Images />
      <Box sx={{ backgroundColor: "#0A0A0A" }}>
        <iframe
          width={"100%"}
          height={600}
          src="https://hypeddit.com/315h9a"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: "relative",
            zIndex: 4,
          }}
          frameBorder={0}
        />
      </Box>
      {/* <Instagram /> */}
      <FloatingSocialButton />
      <Footer />
    </SecretsProvider>
  );
}

export default App;
