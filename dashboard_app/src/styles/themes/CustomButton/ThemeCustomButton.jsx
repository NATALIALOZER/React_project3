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
          color: Colors.main_font,
          backgroundColor: Colors.primary,
          border: '2px solid #000',
          marginBottom: '10px',
          "&:hover": {
            backgroundColor: Colors.focuse,
          },
        },
      },
    },
  },
});