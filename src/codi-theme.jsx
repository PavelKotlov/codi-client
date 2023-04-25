import { createTheme } from "@mui/material";

const codiTheme = createTheme({
  palette: {
    secondary: {
      main: "#27E0C0",
    },
    info: {
      main: "#7878EA",
    },
    success: {
      main: "#D84177",
      light: "#F4B8D6",
    },
    background: {
      light: "#F3FAFF",
      default: "#E9F5FF",
    },
    primaryCodi: {
      main: "#E9F5FF",
      mainHover: "#C0DBED",
      light: "#F3FAFF",
      medium: "#A8C4E5",
      dark: "#271D30",
    },
    secondaryCodi: {
      main: "#7878EA",
      mainHover: "#B2B5F4",
    },
    accentsCodi: {
      yellow: "#FFD22D",
      yellowHover: "#FFAD08",
      pink: "#D84177",
      pinkHover: "#F4B8D6",
      green: "#27E0C0",
      greenHover: "#AAE8DC",
    },
  },
});

export default codiTheme;
