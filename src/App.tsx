import FloatingSocialButton from "./components/FloatingSocialButton";
import Header from "./components/Header";
import Home from "./pages/Home";
import Images from "./pages/Images";
import Video from "./pages/Video";
import { SecretsProvider } from "./contexts/SecretsContext";
import Footer from "./components/Footer";
import Instagram from "./components/Instagram";

function App() {
  return (
    <SecretsProvider>
      <Header />
      <Home />
      <Video />
      <Images />
      <Instagram />
      <FloatingSocialButton />
      <Footer />
    </SecretsProvider>
  );
}

export default App;
