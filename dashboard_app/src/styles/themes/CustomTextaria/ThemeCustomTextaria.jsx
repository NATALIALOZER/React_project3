import { createTheme } from "@mui/material/styles";
import { Colors } from "../../colors";

export const themeTextaria = createTheme({
  palette: {
      primary: {
          main: '#000',
      },
  },
  typography: {
      allVariants: {
          color: '#000'
      },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
          input: {
              color: '#000',
          }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {

        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: `3px solid #000`,
            backgroundColor: "#fff",
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: `3px solid #000`,
            },
          }
        },
      }
    },
  }
});