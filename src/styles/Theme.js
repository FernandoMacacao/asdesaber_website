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
            main: '#fe860c',
            contrastText: '#f5f5f5'
        },
        info: {
            main: '#f5f5f5',
            dark: '#d1d1d1',
            contrastText: '#fe860c'
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
            fontFamily: "Lato",
            fontSize: '1.5rem',
            fontWeight: 700
        },
        h6: {
            fontFamily: "Montserrat",
            textTransform: "uppercase",
            fontSize: '1.125rem',
            fontWeight: 700
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
                },
                textInfo: {
                    backgroundColor: 'red'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 10
                }
            }
        }
    }
})