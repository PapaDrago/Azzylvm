import FloatingSocialButton from "./components/FloatingSocialButton";
import Header from "./components/Header";
import Home from "./pages/Home";
import Images from "./pages/Images";
import Video from "./pages/Video";
import { SecretsProvider } from "./contexts/SecretsContext";

function App() {
  return (
    <SecretsProvider>
      <Header />
      <Home />
      <Video />
      <Images />
      <FloatingSocialButton />
    </SecretsProvider>
  );
}

export default App;
