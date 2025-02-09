// src/App.tsx
import FloatingSocialButton from "./components/FloatingSocialButton";
import Header from "./components/Header";
import Home from "./pages/Home";
import Images from "./pages/Images";
import Video from "./pages/Video";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Video />
      <Images />
      <FloatingSocialButton />
    </>
  );
}

export default App;
