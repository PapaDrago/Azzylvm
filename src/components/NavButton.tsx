// src/components/NavButton.tsx
import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface NavButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      color="inherit"
      sx={{
        marginLeft: 2,
        fontFamily: '"Bebas Neue", sans-serif',
        fontSize: "1.5rem",
        transition: "opacity 0.3s",
        "&:hover": {
          opacity: 0.7,
          backgroundColor: "transparent",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default NavButton;
