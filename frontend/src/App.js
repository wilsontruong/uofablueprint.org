import React from 'react'
import { Outlet } from 'react-router-dom'
import { createTheme } from '@mui/material/styles';
import { Header, Footer } from './components/shared'


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
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App
