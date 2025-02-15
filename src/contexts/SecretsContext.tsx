import React, { createContext, useState, useEffect, ReactNode } from "react";

// Definición de la interfaz para cada secreto
export interface Secret {
  id: number;
  found: boolean;
}

// Definición de la interfaz del contexto
interface SecretsContextValue {
  secrets: Secret[];
  markSecretFound: (id: number) => void;
}

// Estado por defecto: 5 secretos no encontrados
const defaultSecrets: Secret[] = [
  { id: 1, found: false },
  { id: 2, found: false },
  { id: 3, found: false },
  { id: 4, found: false },
  { id: 5, found: false },
];

// Creación del contexto con valores por defecto
export const SecretsContext = createContext<SecretsContextValue>({
  secrets: defaultSecrets,
  markSecretFound: () => {},
});

// Provider que gestionará el estado y su persistencia en localStorage
export const SecretsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [secrets, setSecrets] = useState<Secret[]>(defaultSecrets);

  // Al montar el componente, intentamos cargar el estado desde localStorage
  useEffect(() => {
    const storedSecrets = localStorage.getItem("secrets");
    if (storedSecrets) {
      try {
        setSecrets(JSON.parse(storedSecrets));
      } catch (error) {
        console.error("Error al parsear los secretos almacenados:", error);
      }
    }
  }, []);

  // Función para marcar un secreto como encontrado
  const markSecretFound = (id: number) => {
    setSecrets((prevSecrets) => {
      const updatedSecrets = prevSecrets.map((secret) =>
        secret.id === id ? { ...secret, found: true } : secret
      );
      localStorage.setItem("secrets", JSON.stringify(updatedSecrets));
      return updatedSecrets;
    });
  };

  return (
    <SecretsContext.Provider value={{ secrets, markSecretFound }}>
      {children}
    </SecretsContext.Provider>
  );
};
