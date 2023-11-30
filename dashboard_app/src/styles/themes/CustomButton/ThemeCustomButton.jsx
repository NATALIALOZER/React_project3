import { createTheme } from "@mui/material/styles";
import { Colors } from "../../colors";

export const themeButton = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.secondary,
          border: '3px solid #000',
          "&:hover": {
            backgroundColor: Colors.focuse,
          },
        },
      },
    },
  },
});