import { createTheme } from "@mui/material/styles";
import { checkboxClasses } from '@mui/material/Checkbox';
import { Colors } from "../../colors";

export const themeCheckbox = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
            color: Colors.black,
            [`&.${checkboxClasses.checked}`]: {
                color: Colors.primary,
            },
        },
      },
    },
  },
});