// src/App.tsx
import Header from "./components/Header";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <h1>¡Hola, Azzylvm!</h1>
        <p>Empieza a desarrollar tu página aquí.</p>
      </Container>
    </>
  );
}

export default App;
