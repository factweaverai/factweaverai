"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#F59E0B" },
    secondary: { main: "#FCD34D" },
    background: { default: "#0f0a00", paper: "#1a1200" },
    text: { primary: "#fff8e1", secondary: "#bfa76f" },
  },
  typography: { fontFamily: "system-ui, -apple-system, sans-serif" },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: "none", fontWeight: 700, borderRadius: 12 } } },
    MuiTextField: { styleOverrides: { root: { borderRadius: 12 } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 24, border: "1px solid rgba(128,128,128,0.1)" } } },
  },
});

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
