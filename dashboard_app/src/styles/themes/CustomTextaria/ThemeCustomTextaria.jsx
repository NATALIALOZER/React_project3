import { createTheme } from "@mui/material/styles";
import { Colors } from "../../colors";

export const themeTextaria = createTheme({
  palette: {
      primary: {
          main: Colors.primary,
      },
  },
  typography: {
      allVariants: {
          color: Colors.main_font
      },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
          input: {
              color: Colors.main_font,
          }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {

        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: `3px solid #000`,
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: `3px solid #000`,
            },
          }
        },
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            position: "absolute",
            bottom: "-1.5em",
            color: Colors.danger
          }
        }
      }
    }
  }
});