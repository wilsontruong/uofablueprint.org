import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
    palette: {
        primary: {
            light: '#FFFFFF', // White
            main: '#147BE5', // Primary color
            dark: '#0B2538', // Dark blue
            contrastText: '#000',
        },
        secondary: {
            light: '#F8F8F8', //Light grey
            main: '#AFAFAF', // Grey
            dark: '#333333', //Dark grey
            contrastText: '#000',
        },
    },
});
