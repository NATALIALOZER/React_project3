import { createTheme } from "@mui/material/styles";
import { Colors } from "../../colors";

export const themeCheckbox = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    error: {
      main: Colors.danger,
    },
  },
});