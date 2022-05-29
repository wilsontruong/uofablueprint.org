import React from 'react'
import { Outlet } from 'react-router-dom'
import { createTheme } from '@mui/material/styles';
import { Header, Footer } from './components/shared'
import { Theme } from './config/Theme'
import { ThemeProvider } from '@mui/material'
import { CssBaseline } from '@mui/material';




/* eslint-disable no-unused-vars */
var theme = createTheme({
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
/* eslint-enable no-unused-vars */


function App() {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline enableColorScheme />
            <Header />
            <Outlet />
            <Footer />
        </ThemeProvider>
    )
}

export default App
