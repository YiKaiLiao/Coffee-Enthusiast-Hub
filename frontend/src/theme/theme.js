import { createTheme } from "@mui/material/styles";
import { brown, amber } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: brown[700],
    },
    secondary: {
      main: amber[700],
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    h1: {
      fontFamily: "Merriweather, serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Merriweather, serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Merriweather, serif",
      fontWeight: 700,
    },
    body1: {
      fontFamily: "Open Sans, sans-serif",
    },
    body2: {
      fontFamily: "Open Sans, sans-serif",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: brown[900],
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: amber[100],
        },
      },
    },
  },
});

export default theme;
