import React from 'react'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <div>
            <header>-header placeholder-</header>
            <Outlet />
            <footer>-footer placeholder-</footer>
        </div>
    )
}

export default App
