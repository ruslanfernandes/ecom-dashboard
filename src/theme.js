import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#a1b5bd",
      main: "#dee2e6",
      dark: "#2d353c",
      contrastText: "#00acac",
    },
    secondary: {
      light: "#ffffff",
      dark: "#a1b5bd",
      main: "#8d969c",
    },
    background: {
      default: "#dee2e6",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
