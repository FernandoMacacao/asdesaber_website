import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        common: {
            black: '#080f25',
            white: '#f5f5f5'
        },
        // blue color
        primary: {
            main: '#1893c6'
        },
        // orange color
        secondary: {
            main: '#fE860c',
            contrastText: '#f5f5f5'
        },
        // black and orange colors for text
        text: {
            primary: '#080f25',
            secondary: '#fE860c'
        },
        // background color
        background: {
            default: '#f5f5f5'
        }
    },
    typography: {
        // Titles
        h1: {
            fontFamily: "Montserrat"
        },
        h2: {
            fontFamily: "Montserrat",
            fontWeight: 700
        },
        h3: {
            fontFamily: "Montserrat"
        },
        h4: {
            fontFamily: "Montserrat"
        },
        h5: {
            fontFamily: "Lato"
        },
        // Body text
        body1: {
            fontFamily: "Lato"
        },
        // Navbar and Footer text
        body2: {
            fontFamily: "Mulish",
            fontSize: "1rem"
        }
    },
    // Change Components css
    components: {
        // Button css
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "Mulish",
                    textTransform: "none"
                }
            }
        }
    }
})